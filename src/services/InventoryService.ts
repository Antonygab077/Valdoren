import { Character } from "../models/Character"
import { Item } from "../models/Item"
import { Potion } from "../models/Potion"
import { Weapon } from "../models/Weapon"
import { Armor } from "../models/Armor"
import { logger } from "../Main"

export class InventoryService {

    addItem(character: Character, item: Item): void {
        character.getInventory().push(item)

        logger(`${item.getName()} was added to your inventory.`)
    }

    removeItem(character: Character, item: Item): void {
        const inventory = character.getInventory()
        const index = inventory.indexOf(item)

        if (index !== -1) {

            if (character.getWeapon() === item) {
                this.unequipWeapon(character)
            }

            if (character.getArmor() === item) {
                this.unequipArmor(character)
            }

            inventory.splice(index, 1)

            logger(`${item.getName()} was removed from your inventory.`)

        } else {
            logger(`${item.getName()} is not in your inventory.`)
        }
    }

    hasItem(character: Character, item: Item): boolean {
        if (character.getInventory().includes(item)) {
            return true
        } else {
            return false
        }
    }

    listItems(character: Character): void {
        const inventory = character.getInventory()

        logger(`
========================
       INVENTORY
========================
`)

        if (inventory.length === 0) {
            logger("Inventory is empty.")
            return
        }

        inventory.forEach((item, index) => {
            logger(
                `${index + 1}. ${item.getName()} - ${item.getDescription()}`
            )
        })

        logger(`
========================
`)
    }

    useItem(character: Character, potion: Potion): void {
        if (this.hasItem(character, potion)) {

            const healthBefore = character.getHealth()

            potion.use(character)

            const healthAfter = character.getHealth()
            const healedAmount = healthAfter - healthBefore

            logger(
                `${potion.getName()} used! +${healedAmount} HP`
            )

            this.removeItem(character, potion)

        } else {
            logger(`You don't have ${potion.getName()} in your inventory.`)
        }
    }

    equipWeapon(character: Character, weapon: Weapon): void {
        if (this.hasItem(character, weapon)) {

            const currentWeapon = character.getWeapon()

            if (currentWeapon === weapon) {
                logger(`${weapon.getName()} is already equipped.`)
                return
            }

            if (currentWeapon !== null) {
                logger(`${currentWeapon.getName()} was unequipped.`)
                currentWeapon.unequip(character)
            }

            weapon.equip(character)
            character.setWeapon(weapon)

            logger(
                `${weapon.getName()} equipped! +${weapon.getAttackBonus()} Attack`
            )

        } else {
            logger(`You don't have ${weapon.getName()} in your inventory.`)
        }
    }

    equipArmor(character: Character, armor: Armor): void {
        if (this.hasItem(character, armor)) {

            const currentArmor = character.getArmor()

            if (currentArmor === armor) {
                logger(`${armor.getName()} is already equipped.`)
                return
            }

            if (currentArmor !== null) {
                logger(`${currentArmor.getName()} was unequipped.`)
                currentArmor.unequip(character)
            }

            armor.equip(character)
            character.setArmor(armor)

            logger(
                `${armor.getName()} equipped! +${armor.getDefenseBonus()} Defense`
            )

        } else {
            logger(`You don't have ${armor.getName()} in your inventory.`)
        }
    }

    unequipWeapon(character: Character): void {
        const currentWeapon = character.getWeapon()

        if (currentWeapon !== null) {

            currentWeapon.unequip(character)
            character.setWeapon(null)

            logger(`${currentWeapon.getName()} was unequipped.`)

        } else {
            logger("No weapon is currently equipped.")
        }
    }

    unequipArmor(character: Character): void {
        const currentArmor = character.getArmor()

        if (currentArmor !== null) {

            currentArmor.unequip(character)
            character.setArmor(null)

            logger(`${currentArmor.getName()} was unequipped.`)

        } else {
            logger("No armor is currently equipped.")
        }
    }

    showEquipment(character: Character): void {
        const weapon = character.getWeapon()
        const armor = character.getArmor()

        logger(`
========================
       EQUIPMENT
========================
Weapon: ${weapon ? `${weapon.getName()} (+${weapon.getAttackBonus()} Attack)` : "None"}
Armor: ${armor ? `${armor.getName()} (+${armor.getDefenseBonus()} Defense)` : "None"}
========================
`)
    }
}
import { Item } from "./Item"
import { Equippable } from "../interfaces/Equippable"
import { Character } from "./Character"

export class Weapon extends Item implements Equippable {
    private attackBonus: number

    constructor(name: string, description: string, attackBonus: number) {
        super(name, description)
        this.attackBonus = attackBonus
    }

    getAttackBonus(): number {
        return this.attackBonus
    }

    setAttackBonus(newAttackBonus: number): void {
        this.attackBonus = newAttackBonus
    }

    equip(character: Character): void {
        character.setAttack(character.getAttack() + this.attackBonus)
    }

    unequip(character: Character): void {
        character.setAttack(character.getAttack() - this.attackBonus)
    }
}
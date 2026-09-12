import { Item } from "./Item"
import { Equippable } from "../interfaces/Equippable"
import { Character } from "./Character"

export class Armor extends Item implements Equippable {
    private defenseBonus: number

    constructor(name: string, description: string, defenseBonus: number) {
        super(name, description)
        this.defenseBonus = defenseBonus
    }

    getDefenseBonus(): number {
        return this.defenseBonus
    }

    setDefenseBonus(newDefenseBonus: number): void {
        this.defenseBonus = newDefenseBonus
    }

    equip(character: Character): void {
        character.setDefense(character.getDefense() + this.defenseBonus)
    }

    unequip(character: Character): void {
        character.setDefense(character.getDefense() - this.defenseBonus)
    }
}
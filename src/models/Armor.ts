import { Item } from "./Item"

export class Armor extends Item {
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
}
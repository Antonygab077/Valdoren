import { Item } from "./Item"

export class Weapon extends Item {
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

}
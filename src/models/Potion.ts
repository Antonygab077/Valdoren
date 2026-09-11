import { Item } from "./Item"
import { Usable } from "../interfaces/Usable"
import { Character } from "./Character"

export class Potion extends Item implements Usable {
    private healAmount: number

    constructor(name: string, description: string, healAmount: number) {
        super(name, description)
        this.healAmount = healAmount
    }

    getHealAmount(): number {
        return this.healAmount
    }

    setHealAmount(newHealAmount: number): void {
        this.healAmount = newHealAmount
    }

    use(target: Character): void {
        
    }
}
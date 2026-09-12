// comandos comentados sao comandos que necessitam da parte de outro integrante do grupo ainda nao feita
import { Combatant } from "../interfaces/Combatant";

export abstract class Character implements Combatant {
    private name: string;
    private profession: string;
    private health: number;
    private damage: number;
    private defense: number;
    private gold: number;
    // private inventory: inventory[]
    // private equipaments: Weapon[]


	public constructor(name: string, profession: string, health: number, damage: number, defense: number, gold: number) {
		this.name = name;
		this.profession = profession;
		this.health = health;
		this.damage = damage;
		this.defense = defense;
		this.gold = gold;
	}

	public getName(): string {
		return this.name;
	}

	public setName(value: string) {
		this.name = value;
	}

	public getProfession(): string {
		return this.profession;
	}

	public setProfession(value: string) {
		this.profession = value;
	}

	public getHealth(): number {
		return this.health;
	}

	public setHealth(value: number) {
		this.health = value;
	}

	public getAttack(): number {
		return this.damage;
	}

	public setAttack(value: number) {
		this.damage = value;
	}

	public getDefense(): number {
		return this.defense;
	}

	public setDefense(value: number) {
		this.defense = value;
	}

	public getGold(): number {
		return this.gold;
	}

	public setGold(value: number) {
		this.gold = value;
	}

    attack(target: Combatant): number {
        
    }

    takeDamage(amount: number): void {
        
    }

    isAlive(): boolean {
        if(this.health > 0){
            return true
        } else 
        return false
    }
}
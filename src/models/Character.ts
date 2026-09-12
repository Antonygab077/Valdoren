// comandos comentados sao comandos que necessitam da parte de outro integrante do grupo ainda nao feita
import { Combatant } from "../interfaces/Combatant";
import { Item } from "./Item";
import { Weapon } from "./Weapon";
import { Armor } from "./Armor";

export abstract class Character implements Combatant {
	private name: string;
	private profession: string;
	private health: number;
	private damage: number;
	private defense: number;
	private gold: number;
	private inventory: Item[]
	private weapon: Weapon | null
	private armor: Armor | null
	private maxHealth: number;


	public constructor(name: string, profession: string, health: number, damage: number, defense: number, gold: number,) {
		this.name = name;
		this.profession = profession;
		this.health = health;
		this.damage = damage;
		this.defense = defense;
		this.gold = gold;
		this.inventory = []
		this.weapon = null
		this.armor = null
		this.maxHealth = health
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

	public setHealth(value: number): void {
		if (value > this.maxHealth) {
			this.health = this.maxHealth
		} else if (value < 0) {
			this.health = 0
		} else {
			this.health = value
		}
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

	public getInventory(): Item[] {
		return this.inventory
	}

	public getWeapon(): Weapon | null {
		return this.weapon
	}

	public setWeapon(weapon: Weapon | null): void {
		this.weapon = weapon
	}

	public getArmor(): Armor | null {
		return this.armor
	}

	public setArmor(armor: Armor | null): void {
		this.armor = armor
	}

	public getMaxHealth(): number {
		return this.maxHealth
	}

	attack(target: Combatant): number {
		return 0 //Essa parte nao esta pronta, só retorna 0 para nao dar erro na hora de testar outras coisas
	}

	takeDamage(amount: number): void {

	}

	isAlive(): boolean {
		if (this.health > 0) {
			return true
		} else
			return false
	}
}
import { Character } from "../models/Character";

export interface Equippable {
    equip(character: Character): void;
    unequip(character: Character): void;
}
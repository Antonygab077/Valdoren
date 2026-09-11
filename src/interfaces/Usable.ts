import { Character } from "../models/Character"

export interface Usable {
    use(target: Character): void
}
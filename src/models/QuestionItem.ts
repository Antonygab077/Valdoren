import { Item } from "./Item"

export class QuestItem extends Item {
    private questName: string

    constructor(name: string, description: string, questName: string) {
        super(name, description)
        this.questName = questName
    }

    getQuestName(): string {
        return this.questName
    }

    setQuestName(newQuestName: string): void {
        this.questName = newQuestName
    }
}
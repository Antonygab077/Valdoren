export abstract class Item {
    private name: string
    private description: string

    constructor(name: string, description: string) {
        this.name = name
        this.description = description
    }

    getName(): string {
        return this.name
    }

    getDescription(): string {
        return this.description
    }

    setName(newName: string): void {
        this.name = newName
    }

    setDescription(newDescription: string): void {
        this.description = newDescription
    }
}
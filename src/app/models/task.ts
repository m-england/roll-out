export class Task {
    constructor(id: number, desc: string, assigned: string)
    {
        this.id = id;
        this.name = `Task${id}`;
        this.description = desc;
        this.assigned = assigned;
        this.status = 'Open';
    }

    id: number;
    name: string;
    description: string;
    status: string;
    assigned: string;
    reminder: Date;
}


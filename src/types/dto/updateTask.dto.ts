export class updateTaskDto {
    id: string
    task: {
        title: string
        text?: string
        hour?: string 
        completed: boolean
        day: Date
    }
} 
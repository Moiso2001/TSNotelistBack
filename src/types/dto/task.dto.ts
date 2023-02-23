
import { IsNotEmpty } from "class-validator"

export class theTaskDto {
    @IsNotEmpty({message: 'Title cannot be empty'})
    title: string

    text?: string

    hour?: string

    @IsNotEmpty()
    completed: boolean

    day: Date
} 
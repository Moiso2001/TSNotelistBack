import { Document } from "mongoose"

export interface Task extends Document {
    title: string
    text?: string
    hour?: string 
    completed: boolean
    day: Date
}
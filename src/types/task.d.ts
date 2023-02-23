import { Document } from "mongoose"

export interface Task {
    title: string
    text?: string
    hour?: string 
    completed: boolean
    day: Date
}
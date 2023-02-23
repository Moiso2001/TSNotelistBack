import { Schema } from "mongoose";

/* We initialize the Task Schema for MONGODB */

export const taskSchema = new Schema({
    title: String,
    text: String,
    hour: String, 
    completed: Boolean,
    day: Date
})
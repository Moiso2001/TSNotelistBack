import { Schema } from "mongoose";

/* We initialize the User Schema for MONGODB */

export const taskSchema = new Schema({
    name: String,
    profilePicture: String
})
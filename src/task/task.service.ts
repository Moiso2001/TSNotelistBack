import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from 'src/types/task';
import { Model } from 'mongoose';
import { theTaskDto } from 'src/types/dto/task.dto';

@Injectable()
export class TaskService {

    /* Constructor injecting the Mongo model "task" typed as private and readonly for security reasons */
    constructor(@InjectModel('task') private readonly taskModel:Model<Task>){};

    /* getAll brings all tasks does not matter id or user */
    async getAll(): Promise<Task[]>{
        return await this.taskModel.find()
    };

    /* getById we can search by id a specific task */
    async getById(id: string): Promise<Task>{
        try {
            return await this.taskModel.findById(id)
        } catch (error) {
            return error
        }   
    };

    /* Create task method to initialize and save a new task */
    async createTask(task: theTaskDto): Promise<Task>{
        try {
            const newTask = new this.taskModel(task);
            await newTask.save()

            return newTask
        } catch (error) {
            return error
        }
    };

    /* update task is a method which receives an id and a task, this will update and return the task updated */
    async updateTask(id: string, newTask: Task): Promise<Task>{
        try {
            const updatedTask = await this.taskModel.findByIdAndUpdate(id, newTask)

            console.log(updatedTask)
            return updatedTask
        } catch (error) {
            console.log(error)
            return error
        }
    }

    /* Deleting a task, returning a promise including a string confirming the deletion */
    async deleteTask(id:string): Promise<string>{
        try {
            const deletedTask = await this.taskModel.findByIdAndDelete(id)
            console.log(deletedTask)
            return 'deleted'
        } catch (error) {
            return error
        }
    }
}

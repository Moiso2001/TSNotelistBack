import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from 'src/types/task';
import { Model } from 'mongoose';
import { theTask } from 'src/types/dto/task.dto';

@Injectable()
export class TaskService {

    /* Constructor injecting the Mongo model "task" typed as private and readonly for security reasons */
    constructor(@InjectModel('task') private readonly taskModel:Model<Task>){}

    /* getAll brings all tasks does not matter id or user */
    async getAll(): Promise<Task[]>{
        return await this.taskModel.find()
    }

    /* getById we can search by id a specific task */
    async getById(id: string): Promise<Task>{
        return await this.taskModel.findById(id)
    }

    /* Create task method to initialize and save a new task */
    async createTask(task: theTask): Promise<Task>{
        try {
            const newTask = new this.taskModel(task);
            await newTask.save()
            return newTask
        } catch (error) {
            return error
        }
    }

    // async updateTask(task): Promise<Task>{

    // }
}

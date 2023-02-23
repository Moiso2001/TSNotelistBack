import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from 'src/types/task';
import { Model } from 'mongoose';
import { theTask } from 'src/types/dto/task.dto';

@Injectable()
export class TaskService {

    constructor(@InjectModel('task') private taskModel:Model<Task>){}

    async getAll(): Promise<Task[]>{
        return await this.taskModel.find()
    }

    async getById(id: string): Promise<Task>{
        return await this.taskModel.findById(id)
    }

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

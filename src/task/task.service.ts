import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from 'src/types/task';
import { Model } from 'mongoose';
import { theTaskDto } from 'src/types/dto/task.dto';
import { errorMessage } from 'src/types/errorMessage';

@Injectable()
export class TaskService {

    /* Constructor injecting the Mongo model "task" typed as private and readonly for security reasons */
    constructor(@InjectModel('task') private readonly taskModel:Model<Task>){};

    /* getAll brings all tasks does not matter id or user */
    async getAll(): Promise<errorMessage | Task[]>{
        try {
            const tasks = await this.taskModel.find() 

            /* Validation to avoid return an empty task */
            if(tasks.length > 0){
                return tasks
            }                                                 
           
            return {message: 'There is no tasks at db'}
        } catch (error) {
            return {message: 'An error ocurred on mongoDB', error}
        }
    };

    /* getById we can search by id a specific task */
    async getById(id: string): Promise<Task | errorMessage >{
        try {
            const task = await this.taskModel.findById(id)

            /* Validation to avoid return a null object in case there is no task with the id */
            if(task){
                return task
            }
            
            return {message: `Task with id ${id} doesn't exist`}
        } catch (error) {
            return {message: 'An error ocurred on mongoDB', error}
        }   
    };

    /* Create task method to initialize and save a new task */
    async createTask(task: theTaskDto): Promise<Task | errorMessage>{
        try {

            if(!task.title || !task.completed){
                return {message: "Missing important information"}
            }

            const newTask = new this.taskModel(task);
            await newTask.save()

            return newTask
        } catch (error) {
            return {message: "An error ocurred on mongodb", error}
        }
    };

    /* update task is a method which receives an id and a task, this will update and return the task updated */
    async updateTask(id: string, newTask: Task): Promise<Task | errorMessage>{
        try {

            if(!id || !newTask){  
                return {message: "There is missing important information"}
            }
            
            const updatedTask = await this.taskModel.findByIdAndUpdate(id, newTask)
            return updatedTask
        } catch (error) {
            return {message: "An error ocurred on mongodb", error}
        }
    }

    /* Deleting a task, returning a promise including a string confirming the deletion */
    async deleteTask(id:string): Promise<errorMessage>{ /* errorMessage can work as just message since error key is optional */
        try {
            const deletedTask = await this.taskModel.findByIdAndDelete(id)
            return {message: `Deleted task with id ${id}`}
        } catch (error) {
            return {message: 'An error ocurred on db', error}
        }
    }
}

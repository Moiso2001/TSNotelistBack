import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { Task } from 'src/types/task';
import { theTaskDto } from 'src/types/dto/task.dto';
import { TaskService } from './task.service';
import { updateTaskDto } from 'src/types/dto/updateTask.dto';
import { errorMessage } from 'src/types/errorMessage';

@Controller('task')
export class TaskController {

    /* We create the taskService as propety for the class to use their services */
    constructor(private readonly taskService: TaskService){}

    /* Route to get all tasks availables no matter user */
    @Get()
    getTasks(): Promise<Task[] | errorMessage > {
        return this.taskService.getAll()
    }

    /* Route to get specific task searched by id */
    @Get(':id')
    getTask(@Param('id') string: string): Promise<Task | errorMessage> {
        return this.taskService.getById(string);
    }

    /* Route to create and save a new task, receives a task by parameter */
    @Post()
    postTask(@Body() task: theTaskDto): Promise<Task | errorMessage>{
        return this.taskService.createTask(task)
    }

    /* Rout to update an existing task, we receive an object which have an id and the task info to update */
    @Put()
    editTask(@Body() updateTask: updateTaskDto): Promise<Task | errorMessage>{
        return this.taskService.updateTask(updateTask.id, updateTask.task)
    }

    /* Route to delete a task by id */       /* errorMessage can work just as message too */
    @Delete(':id')
    deleteTask(@Param('id') string: string): Promise<errorMessage>{
        return this.taskService.deleteTask(string)
    }
}

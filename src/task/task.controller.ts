import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { Task } from 'src/types/task';
import { theTask } from 'src/types/dto/task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService){}

    @Get()
    getTasks(): Promise<Task[]> {
        return this.taskService.getAll()
    }

    @Get(':id')
    getTask(@Param('id') string: string): Promise<Task> {
        return this.taskService.getById(string);
    }

    @Post()
    postTask(@Body() task: theTask): Promise<Task>{
        return this.taskService.createTask(task)
    }

    @Put()
    editTask(@Body() task: theTask): {}{
        return 
    }

    @Delete()
    deleteTask(@Param('id') string: string): {}{
        return "Delete task"
    }
}

import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { Task } from 'src/types/task';
import { theTask } from 'src/types/dto/task.dto';

@Controller('task')
export class TaskController {
    @Get()
    getTasks(): string {
        return 'Tasks'
    }

    @Get(':id')
    getTask(@Param('id') string: string): Task | string {
        return string;
    }

    @Post()
    postTask(@Body() task: theTask): {}{
        return "Task Posted"
    }

    @Put()
    editTask(@Body() task: theTask): {}{
        return "Task edited"
    }

    @Delete()
    deleteTask(@Param('id') string: string): {}{
        return "Delete task"
    }
}

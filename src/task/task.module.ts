import { Module } from '@nestjs/common';

import { TaskService } from './task.service';
import { TaskController } from './task.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { taskSchema } from '../schema/task.schema';

/* We bring here to our module the controllers and services, and also with the MongoDB schemas */
@Module({
    
    /* DataBase MongoDB declarations */
    imports: [MongooseModule.forFeature([
        {name: 'Task', schema: taskSchema}
    ])],

    /* Controllers where we'll have the routes available */
    controllers: [TaskController],

    /* Providers working as functionality complementing our controller */
    providers: [TaskService]
})

/* Exporting the class to our App.module.ts */
export class TaskModule {}

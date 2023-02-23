import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { UserController } from './user/user.controller';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

/* This will be our principal Module */
@Module({

  /* Importing our differents Modules, including also the root conecting with our DB on the mongodb online server */
  imports: [TaskModule, UserModule, MongooseModule.forRoot('mongodb+srv://moisesplatadev:5gzm8MzgV9ehrkOy@firstmongodb.hocbq8g.mongodb.net/?retryWrites=true&w=majority')],
 
  /* Controllers where we'll have all our routes available */
  controllers: [AppController, TaskController, UserController],

  /* Providers working as the functionality to complement our controllers */
  providers: [AppService, TaskService, UserService],
})

/* This app module will be exported to our main.ts */
export class AppModule {}

import { Controller, Get, Post, Put, Delete} from '@nestjs/common';


@Controller('user')
export class UserController {
    @Get()
    getUsers(){
        return 'users'
    }

    @Get()
    getUser(){
        return "user"
    }

    @Post()
    createUser(){
        
    }

    @Put()
    updateUser(){

    }

    @Delete()
    deleteUser(){

    }
}

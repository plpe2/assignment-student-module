import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatestudentService } from './createstudent.service';
import { CreatestudentDto } from './dtos/create-student.dto';

@Controller('createstudent')
export class CreatestudentController {
    constructor(private readonly createstudentsService: CreatestudentService){}

    @Post()
    create(@Body() dto: CreatestudentDto){
        return this.createstudentsService.create(dto);
    }

}

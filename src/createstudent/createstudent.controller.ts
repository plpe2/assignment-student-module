import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreatestudentService } from './createstudent.service';
import { CreatestudentDto } from './dtos/create-student.dto';

@Controller('createstudent')
export class CreatestudentController {
    constructor(private readonly createstudentsService: CreatestudentService){}

    @Post()
    create(@Body() dto: CreatestudentDto){
        return this.createstudentsService.create(dto);
    }

    @Get()
    async findMany() {
        return await this.createstudentsService.findMany();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const studentId = parseInt(id, 10); // Convert the `id` parameter to a number
        if (isNaN(studentId)) {
            throw new Error('Invalid ID format'); // Optionally handle invalid IDs
        }
        return await this.createstudentsService.findOneById(studentId);
    }

    @Put(':id')
    update(@Param('id') id: number , @Body() dto: CreatestudentDto){
        return this.createstudentsService.update(id, dto);
    }
}

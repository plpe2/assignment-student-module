import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Createstudent } from './createstudent.entity';
import { Repository } from 'typeorm';
import { CreatestudentDto } from './dtos/create-student.dto';

@Injectable()
export class CreatestudentService {
    constructor(@InjectRepository(Createstudent) private readonly createstudentRepository: Repository <Createstudent>,
){}

    async create(dto:  CreatestudentDto) {
        const student = this.createstudentRepository.create(dto);

        return await this.createstudentRepository.save(student);
    }
}

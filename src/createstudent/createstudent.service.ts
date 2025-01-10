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

    async findMany(){
        return this.createstudentRepository.find();
    }

    async findOneById(id: number) {
        try {
            const student = await this.createstudentRepository.findOne({ where: { id } });
            if (!student) {
                throw new Error(`Student with ID ${id} not found`);
            }
            return student;
        } catch (error) {
            throw new Error(`Failed to retrieve student: ${error.message}`);
        }
    }

    async update(id: number, dto: CreatestudentDto) {
        // Fetch the student by id
        const student = await this.createstudentRepository.findOne({ where: { id } });
    
        // Handle the case where the student is not found
        if (!student) {
            throw new Error(`Student with ID ${id} not found`);
        }
    
        // Merge the provided DTO into the existing student entity
        Object.assign(student, dto);
    
        // Save the updated student entity
        return await this.createstudentRepository.save(student);
    }
    
    
}

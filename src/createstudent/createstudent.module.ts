import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeORMError } from "typeorm";
import { Createstudent } from "./createstudent.entity";
import { CreatestudentController } from './createstudent.controller';
import { CreatestudentService } from './createstudent.service';

@Module({
    imports: [TypeOrmModule.forFeature([Createstudent])],
    controllers: [CreatestudentController],
    providers: [CreatestudentService],
    
})

export class CreatestudentModule {}
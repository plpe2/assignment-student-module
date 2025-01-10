import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Createstudent } from './createstudent/createstudent.entity';
import { CreatestudentModule } from './createstudent/createstudent.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'userdb',
    entities: [Createstudent],
    synchronize: true,
  }), CreatestudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

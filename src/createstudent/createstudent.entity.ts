import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Createstudent {
    @PrimaryGeneratedColumn()
    id: number; // Primary key (auto-generated)

    @Column({ nullable: false })
    firstName: string; // String (required)

    @Column({ nullable: false })
    lastName: string; // String (required)

    @Column({ unique: true, nullable: false })
    email: string; // String (required, unique)

    @Column({ type: 'date', nullable: false, default: () => 'CURRENT_DATE' })
    enrollmentDate: Date; // Date (required)

    @CreateDateColumn()
    createdAt: Date; // Timestamp (auto-generated)

    @UpdateDateColumn()
    updatedAt: Date; // Timestamp (auto-updated)
}
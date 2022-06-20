import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 150, nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 100, nullable: false, name: 'first_name' })
  firstName: string;

  @Column({ type: 'varchar', length: 100, nullable: false, name: 'last_name' })
  lastName: string;

  @Column({
    type: 'varchar',
    length: 10,
    name: 'secret_code',
    nullable: true,
    comment: 'password reset code sent by email',
  })
  secretCode: string;
}

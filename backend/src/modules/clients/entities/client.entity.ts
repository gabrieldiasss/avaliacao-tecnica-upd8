import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Gender } from "../enums/gender.enum";
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'clients' })
export class ClientEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ unique: true })
  cpf: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  birth: Date;

  @ApiProperty()
  @Column({ enum: Gender })
  gender: Gender;

  @ApiProperty()
  @Column()
  address: string;

  @ApiProperty()
  @Column()
  state: string;

  @ApiProperty()
  @Column()
  city: string;
}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Gender } from "../enums/gender.enum";
import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty()
  cpf: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  birth: Date;

  @ApiProperty()
  gender: Gender;

  @ApiProperty()
  address: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  city: string;
}
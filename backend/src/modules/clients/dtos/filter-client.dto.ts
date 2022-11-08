import { Gender } from "../enums/gender.enum";
import { ApiProperty } from '@nestjs/swagger';

export class FilterClientDto {
  @ApiProperty({ required: false })
  cpf?: string;

  @ApiProperty({ required: false })
  name?: string;

  @ApiProperty({ required: false })
  birth?: Date;

  @ApiProperty({ required: false })
  gender?: Gender;

  @ApiProperty({ required: false })
  address?: string;

  @ApiProperty({ required: false })
  state?: string;

  @ApiProperty({ required: false })
  city?: string;
}
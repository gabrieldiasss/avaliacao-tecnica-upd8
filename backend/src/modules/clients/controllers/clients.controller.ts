import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ClientEntity } from '../entities/client.entity';
import { ClientsService } from '../services/clients.service';
import { ApiOkResponse, ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateClientDto } from '../dtos/create-client.dto';
import { UpdateClientDto } from '../dtos/update-client.dto';
import { FilterClientDto } from '../dtos/filter-client.dto';

@ApiTags('Clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @ApiBody({ type: CreateClientDto })
  @ApiOkResponse({ type: ClientEntity })
  create(@Body() dto: CreateClientDto): Promise<ClientEntity> {
    return this.clientsService.create(dto);
  }

  @Get(':id')
  @ApiOkResponse({ type: ClientEntity })
  findById(@Param('id') id: number): Promise<ClientEntity> {
    return this.clientsService.findById(id);
  }

  @Put(':id')
  @ApiBody({ type: UpdateClientDto })
  @ApiOkResponse({ type: ClientEntity })
  update(@Param('id') id: number, @Body() dto: UpdateClientDto): Promise<ClientEntity> {
    return this.clientsService.update(id, dto);
  }

  @Get()
  @ApiOkResponse({ type: [ClientEntity] })
  findAll(@Query() query: FilterClientDto): Promise<ClientEntity[]> {
    return this.clientsService.findAll(query);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.clientsService.delete(id);
  }
}

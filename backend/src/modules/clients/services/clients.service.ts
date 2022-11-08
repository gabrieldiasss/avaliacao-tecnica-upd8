import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from '../dtos/create-client.dto';
import { FilterClientDto } from '../dtos/filter-client.dto';
import { UpdateClientDto } from '../dtos/update-client.dto';
import { ClientEntity } from '../entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(ClientEntity)
    private clientRepository: Repository<ClientEntity>
  ){}

  create(dto: CreateClientDto): Promise<ClientEntity> {
    return this.clientRepository.save(dto);
  }
  
  async update(id: number, dto: UpdateClientDto): Promise<ClientEntity> {
    const data = await this.clientRepository.update(id, dto);
    return data.raw;
  }

  findById(id: number): Promise<ClientEntity> {
    return this.clientRepository.findOne({ where: { id }});
  }

  async findAll(query: FilterClientDto): Promise<ClientEntity[]> {
    return this.clientRepository.find({ where: query });
  }

  async delete(id: number): Promise<void> {
    try {
      await this.clientRepository.delete(id);
      Promise.resolve()
    } catch (error) {
      Promise.reject(error)
    }
  }
}

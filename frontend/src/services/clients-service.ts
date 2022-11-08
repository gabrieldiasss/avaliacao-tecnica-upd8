import { api } from "../config/api"
import { Client } from "../types/client.type"

export interface ClientCreateDto {
  cpf: string;
  name: string;
  birth: Date;
  gender: 'MALE' | 'FEMALE';
  address: string;
  state: string;
  city: string;
}

export interface ClientUpdateDto {
  cpf?: string;
  name?: string;
  birth?: Date;
  gender?: 'MALE' | 'FEMALE';
  address?: string;
  state?: string;
  city?: string;
}

export interface ClientFindAllParams {
  cpf?: string;
  name?: string;
  birth?: Date;
  gender?: 'MALE' | 'FEMALE';
  address?: string;
  state?: string;
  city?: string;
}

const { findAll, del, update, create, findOne } = {
  findAll: async (params: ClientFindAllParams): Promise<Client[]> => {
    const { data } = await api.get<Client[]>('clients', { params })
    return data
  },
  del: async (id: number): Promise<Client> => {
    const { data } = await api.delete<Client>(`clients/${id}`)
    return data
  },
  create: async(dto: ClientCreateDto): Promise<Client> => {
    const { data } = await api.post<Client>('clients', dto)
    return data
  },
  update: async(id: number, dto: ClientUpdateDto): Promise<Client> => {
    const { data } = await api.patch<Client>(`clients/${id}`, dto)
    return data
  },
  findOne: async (id: number): Promise<Client> => {
    const { data } = await api.get<Client>(`clients/${id}`)
    return data
  }
}

export { findAll, del, update, create, findOne }

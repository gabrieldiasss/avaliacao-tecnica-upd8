export interface Client {
  id: number;
  cpf: string;
  name: string;
  birth: Date;
  gender: 'MALE' | 'FEMALE';
  address: string;
  state: string;
  city: string;
}
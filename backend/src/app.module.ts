import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './modules/clients/clients.module';
import { ClientEntity } from './modules/clients/entities/client.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'db',
      entities: [ClientEntity],
      migrations: ['src/migration/*{.ts,.js}'],
      synchronize: false,
    }),
    ClientsModule
  ]
})
export class AppModule {}

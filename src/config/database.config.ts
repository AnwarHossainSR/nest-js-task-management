// src/config/database.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'taskDB',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};

import { DataSource } from 'typeorm';
import { appConfig } from '../config';
import * as path from 'path';

const typeOrmDatabaseSource = new DataSource({
  type: 'mysql',
  host: appConfig.DB_HOST,
  port: appConfig.DB_PORT,
  username: appConfig.DB_USERNAME,
  password: appConfig.DB_PASSWORD,
  database: appConfig.DB_DATABASE,
  synchronize: false,
  logging: true,
  entities: [path.resolve('entities/*.entity.ts')],
  migrations: [path.resolve('db/migrations/*.ts')],
});

export default typeOrmDatabaseSource;

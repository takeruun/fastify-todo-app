import { appConfig } from '../config';
import { createConnection } from 'mysql';

const createDatabase = async () => {
  const client = createConnection({
    host: appConfig.DB_HOST,
    port: appConfig.DB_PORT,
    user: appConfig.DB_USERNAME,
    password: appConfig.DB_PASSWORD,
    database: 'mysql',
  });

  console.log('== Start create database ==');
  client.connect();

  client.query(`CREATE DATABASE IF NOT EXISTS ${appConfig.DB_DATABASE};`);

  client.end();

  console.log(`== Complete create ${appConfig.DB_DATABASE} ==`);
};

createDatabase();

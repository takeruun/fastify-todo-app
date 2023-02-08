export const appConfig = {
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PORT: Number(process.env.DB_PORT) || 13316,
  DB_USERNAME: process.env.DB_USERNAME || 'root',
  DB_PASSWORD: process.env.DB_PASSWORD || 'password',
  DB_DATABASE: process.env.DB_DATABASE || 'fastify_todo',
  APP_PORT: Number(process.env.APP_PORT) || 31111,
};

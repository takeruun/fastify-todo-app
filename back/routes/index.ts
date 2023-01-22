import { FastifyInstance } from 'fastify';
import todoRoutes from './todo/route';
import authRoutes from './auth/route';

export const setRoutes = (server: FastifyInstance) => {
  server.register(authRoutes, { prefix: 'auth' });
  server.register(todoRoutes, { prefix: '/todo' });
};

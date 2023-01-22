import { FastifyInstance } from 'fastify';
import * as todoGet from './get';
import * as todoPost from './post';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', todoGet.opts, todoGet.handler);
  fastify.post('/', todoPost.option, todoPost.handler);
};

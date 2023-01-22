import { FastifyInstance } from 'fastify';
import * as signUpPost from './sign_up/post';
import * as infoGet from './info/get';

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.post('/sign_up', signUpPost.opts, signUpPost.handler);
  fastify.get('/info', infoGet.opts, infoGet.handler);
};

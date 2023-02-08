import { FastifyReply, FastifyRequest } from 'fastify';
import { getMyInfo } from '../../../usecases/auth/info/usecase';
import { User } from '../../../entities/user.entity';
import server from '../../../server';

export const opts = {
  schema: {
    tags: ['auth'],
    security: [{ cookie: [] }],
    operationId: 'get-my-info',
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
        },
      },
    },
  },
};

export const handler = async (request: FastifyRequest, reply: FastifyReply) => {
  const user = await getMyInfo(server.db.getRepository(User));

  return reply.code(200).send({ id: user.id, name: user.name });
};

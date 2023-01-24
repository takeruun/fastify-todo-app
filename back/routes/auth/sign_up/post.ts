import { FastifyReply, FastifyRequest } from 'fastify';
import { User } from '../../../entities/user.entity';
import db from '../../../db/ormconfig';

export const opts = {
  schema: {
    tags: ['auth'],
    operationId: 'sign-up',
    body: {
      type: 'object',
      required: ['email', 'password'],
      properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
      },
    },
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

export type RequetType = {
  Body: {
    name: string;
    email: string;
    password: string;
  };
};

export const handler = async (request: FastifyRequest<RequetType>, reply: FastifyReply) => {
  const { name, email, password } = request.body;

  const user = await db.getRepository(User).save({
    name,
    email,
    password,
  });

  return reply.code(200).send({ id: user.id, name: user.name });
};

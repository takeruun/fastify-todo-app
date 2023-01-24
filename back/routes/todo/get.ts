import { FastifyReply, FastifyRequest } from 'fastify';
import { Todo } from '../../entities/todo.entity';
import db from '../../db/ormconfig';

export const opts = {
  schema: {
    tags: ['todo'],
    security: [{ cookie: [] }],
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            title: { type: 'string' },
            description: { type: 'string' },
          },
        },
      },
    },
  },
};

export const handler = async (request: FastifyRequest, reply: FastifyReply) => {
  const todos = await db.getRepository(Todo).find();

  return reply.code(200).send(todos);
};

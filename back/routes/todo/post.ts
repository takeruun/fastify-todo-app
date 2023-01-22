import { FastifyReply, FastifyRequest } from 'fastify';
import { Todo } from '../../entities/todo.entity';
import { User } from '../../entities/user.entity';
import db from '../../db/ormconfig';

export const option = {
  schema: {
    tags: ['todo'],
    body: {
      type: 'object',
      required: ['userId', 'title'],
      properties: {
        userId: { type: 'string' },
        title: { type: 'string' },
        description: { type: 'string' },
      },
    },
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          title: { type: 'string' },
          description: { type: 'string' },
        },
      },
    },
  },
};

export type RequetType = {
  Body: {
    userId: string;
    title: string;
    description: string;
  };
};

export const handler = async (request: FastifyRequest<RequetType>, reply: FastifyReply) => {
  const { userId, title, description } = request.body;

  const user = await db.getRepository(User).findOne({ where: { id: userId } });

  const todo = await db.getRepository(Todo).save({
    title,
    description,
    user,
  });

  return reply.code(200).send({
    todo,
  });
};

import fastify from 'fastify';
import fastifySwagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import cors from '@fastify/cors';
import { writeFileSync } from 'fs';
import fp from './db';
import { setRoutes } from './routes';

const server = fastify({ logger: true });

server.register(fp);

server.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Fastify todo api',
      description: 'Fastify todo api Swagger',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:31111',
      },
    ],
    components: {
      schemas: {},
      securitySchemes: {
        cookie: {
          type: 'apiKey',
          in: 'cookie',
          name: '_fastify_todo_session_id',
        },
      },
    },
  },
  refResolver: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    buildLocalReference(json, _baseUri, _fragment, _i) {
      return `${json.$id}`;
    },
  },
});

server.register(swaggerUi, {
  routePrefix: '/docs',
  staticCSP: true,
});

server.register(cors, {
  origin: ['http://localhost:3000'],
  credentials: true,
});

setRoutes(server);

const setYml = async () => {
  // generate sjon
  const responseJson = await server.inject('/docs/yaml');
  writeFileSync('../docs/openapi.yml', responseJson.payload);
};

setYml();

export default server;

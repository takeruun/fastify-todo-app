import * as AuthInfoUsecase from '../../../../usecases/auth/info/usecase';
import { LightMyRequestResponse as Response } from 'fastify';
import server from '../../../../server';

let authInfoUsecaseSqy: jest.SpyInstance;
let response: Response;

afterEach(() => {
  authInfoUsecaseSqy?.mockRestore();
});

afterAll(async () => {
  await server.close();
});

describe('GET /auth/info', () => {
  beforeEach(async () => {
    authInfoUsecaseSqy = jest.spyOn(AuthInfoUsecase, 'getMyInfo').mockResolvedValue({
      id: '1',
      name: 'name',
      email: 'test@example.com',
      password: '',
      todos: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    response = await server.inject({
      method: 'get',
      url: '/auth/info',
    });
  });

  test('shloud get my user info', async () => {
    expect(response.statusCode).toBe(200);
  });
});

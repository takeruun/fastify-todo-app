import { User } from '../../../entities/user.entity';
import { Repository } from 'typeorm';

export const getMyInfo = (repository: Repository<User>) => {
  return repository.findOne({ where: { id: '9521bfc8-d721-44c0-a030-b8a5e5cf1cfe' } });
};

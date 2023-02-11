import { User } from '../../../entities/user.entity';
import { Repository } from 'typeorm';

export type Args = {
  id: string;
};

export const getMyInfo = (repository: Repository<User>, args: Args) => {
  const { id } = args;

  return repository.findOne({ where: { id } });
};

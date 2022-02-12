import { CrudService, User as IUser } from '@server';

import User from '@server/models/user';

type AuthDraft = {
  username: string;
};

export class UsersService implements CrudService<IUser> {
  public async find({ username }: AuthDraft) {
    return User.findOne({ username });
  }
}

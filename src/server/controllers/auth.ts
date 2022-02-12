import { User as IUser } from '@server';

import User from '@server/models/user';

interface IAuthController {
  authenticate: (props: IUser) => Promise<any>;
}

type AuthDraft = {
  username: string;
};

class AuthController implements IAuthController {
  public async authenticate({ username }: AuthDraft) {
    return User.findOne({ username });
  }
}

export default AuthController;

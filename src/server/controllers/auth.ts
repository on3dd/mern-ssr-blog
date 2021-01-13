import { User as IUser } from '@server';

import User from '@server/models/user';

import { USER_FIELDS } from '@server/utils/constants';

interface IAuthController {
  authenticate: (props: IUser) => Promise<any>;
}

class AuthController implements IAuthController {
  public async authenticate({ username }: IUser) {
    return await User.findOne({ username }, USER_FIELDS);
  }
}

export default AuthController;

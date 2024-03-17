import { GenericModel } from '../../models';

export class User extends GenericModel {
  email: string | undefined;
  password: string | undefined;
}

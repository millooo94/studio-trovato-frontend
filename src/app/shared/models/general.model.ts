import { GenericModel, Social } from '.';

export class General extends GenericModel {
  name?: string | undefined;
  description?: string | undefined;
  logo?: string | undefined;
  phone?: string | undefined;
  email?: string | undefined;
  address?: string | undefined;
  openingTime?: Date | undefined;
  closingTime?: Date | undefined;
  socials?: Social[] | undefined;
}

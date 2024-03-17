import { GenericModel } from '.';

export class ContactForm extends GenericModel {
  firstName: string | undefined;
  lastName: string | undefined;
  businessName: string | undefined;
  sector: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  subject: string | undefined;
  message: string | undefined;
}

import { Education, GenericModel, PracticeArea, Social } from '.';

export class Partner extends GenericModel {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  picture: string | undefined;
  education: Education[] | undefined;
  practiceAreas: PracticeArea[] | undefined;
  socials: Social[] | undefined;
}

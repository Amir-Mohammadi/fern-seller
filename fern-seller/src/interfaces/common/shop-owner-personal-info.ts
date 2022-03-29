import { UserGenderType } from './user-gender-type';
import { UserLegalType } from './user-legal-type';

export type IShopOwnerPersonalInfo = {
  firstName: string;
  lastName: string;
  userId: string;
  userType: UserLegalType | string;
  gender: UserGenderType | string;
  birthDate: string;
  IDCode: string;
  NationalNumber: string; //I don`t know shomareh shenasnameh english meaning.
  password: string;
};

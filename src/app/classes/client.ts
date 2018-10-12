
import {IClient} from '../interfaces/client';

export class Client implements IClient {
/*  static idCnt = 0;
  id?: number;*/
  firstName: string;
  lastName: string;
  avatar: string;
  company: string;
  title: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  zipCode: string;
  country: string;

  constructor(obj: any) {
    this.firstName = obj.general.firstName;
    this.lastName = obj.general.lastName;
    this.avatar = obj.general.avatar;
    this.company = obj.job.company;
    this.title = obj.job.title;
    this.email = obj.contact.email;
    this.phone = obj.contact.phone;
    this.street = obj.address.street;
    this.city = obj.address.city;
    this.zipCode = obj.address.zipCode;
    this.country = obj.address.country;
  }

}



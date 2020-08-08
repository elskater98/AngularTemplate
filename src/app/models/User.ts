
export class User {

  first_name:string;
  last_name:string;
  email:string;
  password:string;
  roles:string [];
  createAt:Date;
  enable:boolean;
  token:string;

  constructor(values:object = {}) {
    Object.assign(this as any,values)
  }

}

import {Role} from './role';

export class User {
  fullname: string;
  nik: number;
  password: string;
  position: string
  userAddress: string;
  directorate: string;
  division: string;
  department: string;
  unitDepartment: string;
  role: Role;
  isActive: boolean;
}

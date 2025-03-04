import { IUser } from "../interfaces/IUser";

export default class User implements IUser {
  userId: string;
  username: string;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;

  constructor() {
    this.userId = "";
    this.username = "";
    this.email = "";
    this.password = "";
    this.createdAt = "";
    this.updatedAt = "";
  }
}

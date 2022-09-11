import { User } from "src/user/interfaces/user.interface";

export interface Post {
  _id: string;

  content: string;

  createdAt: Date;

  updatedAt: Date;

  image: string;
  user:User;
}

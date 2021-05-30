export interface User {
  id: number;
  username: string;
  password: string;
  salt: string;
}
export interface Article {
  id: number;
  title: string;
  content: string;
  createdOn: string;
  authorId: number;
  author: User;
}

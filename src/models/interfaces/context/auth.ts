export interface User {
  name: string;
  email: string;
  password: string;
}

export interface LoginResponse extends User {
  token: string;
  expireIn: number;
  loggedAt: Date;
}

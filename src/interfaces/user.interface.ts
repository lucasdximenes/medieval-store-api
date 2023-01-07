export interface NewUser {
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface SanitizedUser {
  id: number;
  username: string;
  vocation: string;
  level: number;
}

export interface User extends SanitizedUser {
  password?: string;
}

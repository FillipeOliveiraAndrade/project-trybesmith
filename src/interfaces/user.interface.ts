export interface IUser {
  id?: number,
  username: string,
  vocation?: string,
  level?: number,
  password: string
} 

export interface IJwt {
  username: string,
  id?: number,
}
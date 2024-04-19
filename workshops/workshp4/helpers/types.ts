export class ErrorWithStatus extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
  }
}
export interface StandardResponse<T> {
  success: boolean;
  data: T;
}
export interface Token {
  _id: string;
  fullname: string;
  email: string;
}

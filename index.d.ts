import { IAuth } from "./app/interfaces";

export {};

declare module "http" {
  interface IncomingMessage {
    auth: IAuth;
  }
}

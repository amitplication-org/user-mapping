import { AdminInfo } from "./AdminInfo";

export interface IAuthStrategy {
  validate: (...any: any) => Promise<AdminInfo>;
}

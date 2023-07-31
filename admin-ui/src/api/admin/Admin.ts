import { JsonValue } from "type-fest";

export type Admin = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  birthdate: Date | null;
  firstName: string | null;
  lastName: string | null;
  username: string;
  password: string;
  roles: JsonValue;
  username: string;
  roles: JsonValue;
};

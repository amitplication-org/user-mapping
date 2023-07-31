import { InputJsonValue } from "../../types";

export type AdminCreateInput = {
  birthdate?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  username: string;
  password: string;
  roles: InputJsonValue;
};

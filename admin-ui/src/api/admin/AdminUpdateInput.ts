import { InputJsonValue } from "../../types";

export type AdminUpdateInput = {
  birthdate?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
};

import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  firstName?: SortOrder;
  lastName?: SortOrder;
  birthdate?: SortOrder;
  id?: SortOrder;
};

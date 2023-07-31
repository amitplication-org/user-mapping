import { Address } from "../address/Address";
import { Order } from "../order/Order";
import { SomeThing } from "../someThing/SomeThing";

export type Customer = {
  address?: Address | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  updatedAt: Date;
  customerType?: "INDIVIDUAL" | "COMPANY" | null;
  orders?: Array<Order>;
  someThing?: SomeThing | null;
};

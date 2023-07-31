import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <NumberInput label="Item Price" source="itemPrice" />
        <TextInput label="Description" source="description" />
        <SelectArrayInput
          label="Product Type"
          source="productType"
          choices={[
            { label: "ELECTRONICS", value: "ELECTRONICS" },
            { label: "BOOKS", value: "BOOKS" },
            { label: "CLOTHING", value: "CLOTHING" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

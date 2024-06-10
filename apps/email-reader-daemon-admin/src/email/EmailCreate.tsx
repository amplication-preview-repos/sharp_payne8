import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EmailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="body" multiline source="body" />
        <DateTimeInput label="receivedDateTime" source="receivedDateTime" />
        <TextInput label="subject" source="subject" />
      </SimpleForm>
    </Create>
  );
};

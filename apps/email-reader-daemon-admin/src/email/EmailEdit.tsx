import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EmailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="body" multiline source="body" />
        <DateTimeInput label="receivedDateTime" source="receivedDateTime" />
        <TextInput label="subject" source="subject" />
      </SimpleForm>
    </Edit>
  );
};

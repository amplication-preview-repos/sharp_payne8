import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EmailWhereInput = {
  body?: StringNullableFilter;
  id?: StringFilter;
  receivedDateTime?: DateTimeNullableFilter;
  subject?: StringNullableFilter;
};

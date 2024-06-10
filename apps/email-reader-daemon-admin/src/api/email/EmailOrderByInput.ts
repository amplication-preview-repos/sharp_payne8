import { SortOrder } from "../../util/SortOrder";

export type EmailOrderByInput = {
  body?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  receivedDateTime?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};

import { Sender as TSender } from "../api/sender/Sender";

export const SENDER_TITLE_FIELD = "id";

export const SenderTitle = (record: TSender): string => {
  return record.id?.toString() || String(record.id);
};

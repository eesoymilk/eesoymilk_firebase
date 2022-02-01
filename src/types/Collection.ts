import { Timestamp } from "firebase/firestore";

export default interface Collection {
  id: string;
  createdAt: Timestamp;
}

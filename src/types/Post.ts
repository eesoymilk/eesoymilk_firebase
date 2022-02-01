import Collection from "./Collection";

export default interface Post extends Collection {
  title: string;
  body: string;
  tags: string[];
}
// export default interface Post {
//   title: string;
//   body: string;
//   tags: string[];
//   id: string;
//   createdAt: Timestamp;
// }

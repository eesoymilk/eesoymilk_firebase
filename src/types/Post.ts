import Collection from "./Collection";

interface PostContent {
  title: string;
  body: string;
  tags: string[];
}

interface Post extends Collection, PostContent {}

export { Post, PostContent };

// export default interface Post {
//   title: string;
//   body: string;
//   tags: string[];
//   id: string;
//   createdAt: Timestamp;
// }

import { db } from "@/firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { Ref, ref } from "vue";
import Collection from "@/types/Collection";

const getCollection = <T extends Collection>(c: string) => {
  const documents = ref<T[]>([]) as Ref<T[]>;
  const error = ref<string>("") as Ref<string>;

  const collectionRef = collection(db, c);

  // const load = async () => {
  onSnapshot(
    collectionRef,
    (snap) => {
      snap.docs.forEach((doc) => {
        console.log(doc.data());
      });
      documents.value = snap.docs.map(
        (doc) => ({ ...doc.data(), id: doc.id } as T)
      );
    },
    (err) => {
      console.log(err.message);
      error.value = err.message;
    }
  );

  return { documents, error };
};

export default getCollection;

// import { ref } from "vue";
// import Post from '@/types/Post';
// import { projectFirestore } from '@/firebase/config'

// const getPosts = () => {
//   const posts = ref<Post[]>([]);
// 	const error = ref<string>('');

// 	const load = async () => {
// 		try {
// 			const res = await projectFirestore.collection('posts')
// 				.orderBy('createdAt', 'desc')
// 				.get();
// 			posts.value = res.docs.map(doc => ({ ...doc.data(), id: doc.id } as Post));
// 		} catch (err: unknown) {
// 			if (err instanceof Error)	error.value = err.message;
// 		}
// 	}

// 	return { posts, error, load };
// }

// export default getPosts;
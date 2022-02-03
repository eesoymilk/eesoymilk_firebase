import { db } from "@/firebase/config";
import { collection, onSnapshot, query } from "firebase/firestore";
import { Ref, ref, watchEffect } from "vue";
import Collection from "@/types/Collection";

const getCollection = <T extends Collection>(c: string) => {
  const documents = ref<T[]>([]) as Ref<T[]>;
  const error = ref<string>("") as Ref<string>;

  const unsub = onSnapshot(
    query(collection(db, c)),
    (snap) => {
      console.log("snapshot");
      documents.value = snap.docs.map(
        (doc) => ({ ...doc.data(), id: doc.id } as T)
      );
    },
    (err) => {
      console.log(err.message);
      error.value = err.message;
    }
  );

  watchEffect((onInvalidate) => onInvalidate(unsub));

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

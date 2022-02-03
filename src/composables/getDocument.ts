import { db } from "@/firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
import { Ref, ref, watchEffect } from "vue";
import Collection from "@/types/Collection";

const getCollection = <T extends Collection>(c: string, id: string) => {
  const document = ref<T | null>(null) as Ref<T | null>;
  const error = ref<string>("") as Ref<string>;

  const unsub = onSnapshot(
    doc(db, c, id),
    (snap) => {
      console.log("snapshot for one doc");
      document.value = { ...snap.data(), id: snap.id } as T;
    },
    (err) => {
      console.log(err.message);
      error.value = err.message;
    }
  );

  watchEffect((onInvalidate) => onInvalidate(unsub));

  return { document, error };
};

export default getCollection;

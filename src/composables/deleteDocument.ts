import { db } from "@/firebase/config";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { Ref, ref } from "vue";
import Collection from "@/types/Collection";

const deleteDocument = async <T extends Collection>(c: string, id: string) => {
  const document = ref<T>() as Ref<T>;
  const error = ref<string>("") as Ref<string>;

  const documentRef = doc(db, c, id);
  const snap = await getDoc(documentRef);
  if (snap.exists()) {
    document.value = snap.data() as T;
    error.value = "";
    deleteDoc(documentRef);
  } else {
    error.value = "The document you tried to delete does not exist.";
  }

  return { document, error };
};

export default deleteDocument;

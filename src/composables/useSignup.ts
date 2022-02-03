import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Ref, ref } from "vue";

const error = ref(null) as Ref<string | null>;
const isPending = ref(false) as Ref<boolean>;

const signup = async (email: string, password: string) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not complete signup");
    }
    error.value = null;
    isPending.value = false;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      error.value = err.message;
      isPending.value = false;
    }
  }
};

const useSignup = () => ({ error, isPending, signup });

export default useSignup;

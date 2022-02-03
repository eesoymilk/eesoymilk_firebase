import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";

const user = ref(auth.currentUser);

onAuthStateChanged(auth, (u) => {
  console.log("User state changed, current user: ", u);

  user.value = u;
});

const getUser = () => user;

export default getUser;


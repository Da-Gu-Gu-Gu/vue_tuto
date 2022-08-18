import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

const err = ref(null);

const LOGIN = async (email, password) => {
  try {
    let res = await signInWithEmailAndPassword(auth, email, password);

    if (!res) {
      throw new Error("Something Wrong!");
    }
    console.log(res.user);
  } catch (error) {
    console.log(error.message);
    err.value = error.message;
  }
};

const useLogin = () => {
  return { err, LOGIN };
};

export default useLogin;

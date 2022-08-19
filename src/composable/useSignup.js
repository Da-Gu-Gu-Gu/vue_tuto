import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref } from "vue";

let err = ref(null);

const signUp = async (name, email, password) => {
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);

    if (!res) {
      throw new Error("Something Wrong!");
    }
    await updateProfile(res.user, {
      displayName: name,
    });
    return res;
  } catch (error) {
    err.value = error.message;
  }
};

const useSignUp = () => {
  return { err, signUp };
};

export default useSignUp;

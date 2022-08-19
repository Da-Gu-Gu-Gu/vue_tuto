import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ref } from "vue";

const useCollection = (coll) => {
  let err = ref(null);
  let adddoc = async (doc) => {
    try {
      await addDoc(collection(db, coll), doc);
      //   await db.collection(collection).add(doc);
    } catch (error) {
      err.value = "Something Wrong!";
      console.log(error.message);
    }
  };
  return { err, adddoc };
};

export default useCollection;

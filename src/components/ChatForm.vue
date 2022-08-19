<template>
  <form @keyup.enter.prevent="handlesubmit">
    <textarea placeholder="Enter a message" v-model="message"></textarea>
  </form>
</template>

<script>
import { ref } from "vue";
import getUser from "@/composable/getUser";
import useCollection from "../composable/useCollection";
import { serverTimestamp } from "@firebase/firestore";
export default {
  setup() {
    let message = ref("");
    let { user } = getUser();

    let { err, adddoc } = useCollection("messages");

    let handlesubmit = async () => {
      let chat = {
        message: message.value,
        name: user.value.displayName,
        timestamps: serverTimestamp(),
      };

      await adddoc(chat);

      message.value = "";
    };

    return { message, handlesubmit };
  },
};
</script>

<style>
textarea {
  width: 100%;
  border: 0;
  outline: 0;
  border-radius: 10px;
  padding: 20px;
  padding-bottom: 10px;
}
</style>

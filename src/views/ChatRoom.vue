<template>
  <div class="chatroom">
    <Navbar />
    <ChatWindow />
    <ChatForm />
  </div>
</template>

<script>
import { watch } from "vue";
import Navbar from "../components/Navbar.vue";
import { useRouter } from "vue-router";
import getUser from "@/composable/getUser";
import ChatForm from "../components/ChatForm.vue";
import { fromMap } from "@jridgewell/gen-mapping";
import ChatWindow from "@/components/ChatWindow.vue";

export default {
  components: { Navbar, ChatForm, ChatWindow },
  setup() {
    let router = useRouter();
    let { user } = getUser();
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Home" });
      }
    });
  },
};
</script>

<style>
.chatroom {
  background: white;
}
</style>

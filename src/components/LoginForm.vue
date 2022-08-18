<template>
  <h2>Login</h2>
  <form @submit.prevent="login">
    <input type="email" placeholder="Enter email" v-model="email" />
    <input type="password" placeholder="Enter password" v-model="password" />
    <div class="error" v-if="err">
      {{ err }}
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "@/firebase/config";
import useLogin from "@/composable/useLogin";

export default {
  setup() {
    let email = ref("");
    let password = ref("");

    let { err, LOGIN } = useLogin();

    let login = async () => {
      await LOGIN(email.value, password.value);
    };
    return { err, email, password, login };
  },
};
</script>

<style></style>

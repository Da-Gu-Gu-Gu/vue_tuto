<template>
  <h2>Signup</h2>

  <form @submit.prevent="signup">
    <input type="text" placeholder="Enter Name" v-model="name" />
    <input type="email" placeholder="Enter email" v-model="email" />
    <input type="password" placeholder="Enter password" v-model="password" />
    <div v-if="err" class="error">
      {{ err }}
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignUp from "../composable/useSignup";
export default {
  setup() {
    let name = ref("");
    let email = ref("");
    let password = ref("");

    let { err, signUp } = useSignUp();

    let signup = async () => {
      console.log(email.value);
      await signUp(name.value, email.value, password.value);
    };

    console.log(err);

    return { err, name, email, password, signup };
  },
};
</script>

<style></style>

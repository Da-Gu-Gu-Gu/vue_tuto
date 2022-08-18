<template>
  <div class="wrapper">
    <div v-if="showsignup">
      <Signupform />
      <p>
        Already have an account?
        <span @click="showsignup = false">Login Here</span>
      </p>
    </div>
    <div v-if="!showsignup">
      <LoginForm />
      <p>
        Don't have an account?
        <span @click="showsignup = true">Signup Here</span>
      </p>
    </div>
  </div>
</template>

<script>
import Signupform from "@/components/Signupform.vue";
import LoginForm from "@/components/LoginForm.vue";
import { ref } from "vue";

export default {
  components: { Signupform, LoginForm },
  setup() {
    let showsignup = ref(true);

    return { showsignup };
  },
};
</script>

<style>
.wrapper {
  margin: 0px auto;
  border-radius: 20px;
  background-color: white;
  padding: 20px;
  padding-top: 30px;
  max-width: 600px;
}
</style>

<template>
  <div class="navbar" v-if="user">
    <div>
      <h1>👋 Hi, {{ user.displayName }}</h1>
      <p>
        Login as <span>{{ user.email }}</span>
      </p>
    </div>
    <div class="logout" @click="logout">logout</div>
  </div>
</template>

<script>
import { auth } from "@/firebase/config";
import { ref } from "vue";
import getUser from "../composable/getUser";

export default {
  setup() {
    let err = ref(null);

    let { user } = getUser();

    let logout = async () => {
      try {
        await auth.signOut();
        console.log("logout");
      } catch (error) {
        err.value = error.message;
        console.log(error.message);
      }
    };

    return { user, logout };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  width: 600px;
  border-radius: 10px;
  padding: 15px;
}

h1 {
  /* background: red; */
  font-size: 25px;
  text-align: left;
  padding-bottom: 0px;
}
p {
  margin-top: 10px;
  color: black;
}

span {
  color: #377ee8;
}

.logout {
  background: #e63946;
  width: 100px;
  padding: 10px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
}
</style>

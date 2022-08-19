import { auth } from "@/firebase/config";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "../App.vue";
import ChatRoom from "../views/ChatRoom.vue";
import Welcome from "../views/Welcome.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Welcome,
    beforeEnter(to, enter, next) {
      let user = auth.currentUser;
      if (!user) {
        next();
      } else {
        next({ name: "ChatRoom" });
      }
    },
  },
  {
    path: "/chatroom",
    name: "ChatRoom",
    component: ChatRoom,
    beforeEnter(to, from, next) {
      let user = auth.currentUser;
      if (user) {
        next();
      } else {
        next({ name: "Home" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

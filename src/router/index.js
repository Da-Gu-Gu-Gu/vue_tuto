import { createRouter, createWebHashHistory } from "vue-router";
import App from "../App.vue";
import ChatRoom from "../views/ChatRoom.vue";
import Welcome from "../views/Welcome.vue";

const routes = [
  { path: "/", name: "Home", component: Welcome },
  {
    path: "/chatroom",
    name: "ChatRoom",
    component: ChatRoom,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

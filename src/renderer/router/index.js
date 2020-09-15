import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EventList from "../views/EventList.vue";
import PlayerView from "../views/PlayerView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: require("@/views/Home").default,
  },
  {
    path: "/event",
    name: "Event",
    component: require("@/views/EventList").default,
  },
  {
    path: "/event/player/:id",
    name: "player",
    component: require("@/views/PlayerView").default,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

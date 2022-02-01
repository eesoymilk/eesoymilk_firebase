import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Blog from "../views/Blog.vue";
import CreatePost from "../views/CreatePost.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog/create",
    name: "New Post",
    component: CreatePost,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

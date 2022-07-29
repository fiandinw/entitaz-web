import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CountdownView from "../views/CountdownView.vue";
import CommingSoonView from "../views/CommingSoonView.vue";
import ErrorView from "../views/ErrorView.vue";
import ArticleView from "../views/ArticleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/",
      name: "countdown",
      component: CountdownView,
    },
    {
      path: "/soon",
      name: "commingsoon",
      component: CommingSoonView,
    },
    {
      path: "/article/1",
      name: "article1",
      component: ArticleView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: ErrorView,
    },
  ],
});

router.beforeEach(async (to, from) => {
  if (["notfound"].includes(to.name)) {
    return { name: "countdown" };
  }
});

export default router;

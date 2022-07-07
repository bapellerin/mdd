import { createRouter, createWebHistory } from "vue-router";

import Auth from "../views/Auth/Index.vue";
import LoginView from "../views/Auth/LoginView.vue";
import RegisterView from "../views/Auth/RegisterView.vue";
import RegisterSpotifyView from "../views/Auth/RegisterSpotifyView.vue";

import App from "../views/Main/Index.vue";
import ExploreView from "../views/Main/ExploreView.vue";
import ProfileView from "../views/Main/ProfileView.vue";
import MatchView from "../views/Main/MatchView.vue";
import ArtistView from "../views/Main/ArtistView.vue";
import MessagesView from "../views/Main/MessagesView.vue";

import Settings from "../views/Settings/Index.vue";
import MyProfileView from "../views/Settings/MyProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "auth",
      component: Auth,
      children: [
        {
          alias: "login",
          name: "login",
          path: "",
          component: LoginView,
        },
        {
          alias: "register",
          path: "/register",
          name: "register",
          component: RegisterView,
        },
        {
          alias: "register-spotify",
          path: "/register-spotify",
          name: "register-spotify",
          component: RegisterSpotifyView,
        },
      ],
    },

    {
      path: "/app",
      name: "app",
      component: App,
      children: [
        {
          alias: "explore",
          name: "explore",
          path: "",
          component: ExploreView,
          meta: {
            header: true,
          },
        },
        {
          alias: "match",
          name: "match",
          path: "match/:id",
          component: MatchView,
          meta: {
            header: true,
          },
        },
        {
          alias: "profile/:id",
          path: "/profile/:id",
          name: "profile",
          component: ProfileView,
        },
        {
          alias: "artists",
          path: "/artists",
          name: "artists",
          component: ArtistView,
        },
        {
          alias: "messages",
          path: "/messages",
          name: "messages",
          component: MessagesView,
        },
      ],
    },

    {
      path: "/settings",
      name: "settings",
      component: Settings,
      children: [
        {
          alias: "my-profile",
          name: "my-profile",
          path: "my-profile",
          component: MyProfileView,
          meta: {
            header: true,
          },
        },
      ],
    },
  ],
});

export default router;

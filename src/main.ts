import { ComponentPublicInstance, createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

loadFonts();

let app: ComponentPublicInstance;

onAuthStateChanged(auth, () => {
  if (!app) app = createApp(App).use(router).use(vuetify).mount("#app");
});

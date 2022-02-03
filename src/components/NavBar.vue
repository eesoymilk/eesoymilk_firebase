<template>
  <v-app-bar>
    <v-app-bar-title>
      <span class="font-weight-light">ee</span>
      <span>Soymilk</span>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <!-- <v-btn-toggle group> -->
    <v-btn v-for="name in navRouteNames" :key="name" :to="{ name }">
      {{ name }}
    </v-btn>
    <v-divider vertical></v-divider>
    <div v-if="user">
      <v-btn @click="logoutUser">Logout</v-btn>
      <v-btn>{{ user.email }}</v-btn>
      <v-btn @click="becomeAdmin">admin</v-btn>
    </div>
    <div v-else>
      <v-btn :to="{ name: 'Signup' }">Sign Up</v-btn>
      <v-btn :to="{ name: 'Login' }">Login</v-btn>
    </div>
    <!-- </v-btn-toggle> -->
  </v-app-bar>
</template>

<script lang="ts">
import getUser from "@/composables/getUser";
import { auth } from "@/firebase/config";
import { signOut } from "@firebase/auth";
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
  name: "NavBar",
  setup() {
    const user = getUser();
    const navRouteNames: Ref<string[]> = ref<string[]>([
      "Home",
      "About",
      "Blog",
    ]);
    const logoutUser = () => {
      signOut(auth);
    };
    return { user, navRouteNames, logoutUser };
  },
});
</script>

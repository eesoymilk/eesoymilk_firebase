<template>
  <v-app>
    <NavBar />
    <v-main class="mx-5">
      <!-- <CreatePost /> -->
      <!-- <v-text-field label="regular"></v-text-field> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
// import CreatePost from "@/components/CreatePost.vue";

export default defineComponent({
  name: "App",
  components: { NavBar },
});
</script>

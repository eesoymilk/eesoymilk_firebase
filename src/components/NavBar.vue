<template>
  <nav>
    <v-app-bar>
      <v-app-bar-title>
        <span class="font-weight-light">ee</span>
        <span>Soymilk</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="route in routes" :key="route.name" router :to="route.path">
        <span>{{ route.name }}</span>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { routes } from "@/router/index";

export default defineComponent({
  name: "NavBar",
  setup() {
    return { routes };
  },
});
</script>

<template>
  <!-- <v-main> -->
  <v-card class="ma-5" v-for="post in blog" :key="post.id">
    <v-card-title>{{ post.title }}</v-card-title>
    <v-divider inset thickness></v-divider>
    <v-card-text>{{ post.body }}</v-card-text>
    <v-card-subtitle>
      <span v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
    </v-card-subtitle>
    <v-card-actions>
      <v-btn flat>
        <v-icon>mdi-dots-horizontal</v-icon>
        More
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn flat>
        <v-icon>mdi-delete</v-icon>
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
  <!-- </v-main> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Post from "@/types/Post";
import getCollection from "@/composables/getCollection";

export default defineComponent({
  name: "Blog",
  setup() {
    const { documents: blog, error } = getCollection<Post>("posts");
    return { blog, error };
  },
});
</script>

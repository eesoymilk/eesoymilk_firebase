<template>
  <v-container fluid>
    <v-row justify="space-between">
      <v-col cols="auto">
        <v-btn-toggle v-model="text" group>
          <v-btn value="left"> Left </v-btn>
          <v-btn value="center"> Center </v-btn>
          <v-btn value="right"> Right </v-btn>
          <v-btn value="justify"> Justify </v-btn>
        </v-btn-toggle>
      </v-col>
      <v-col cols="auto">
        <v-btn-toggle v-model="text" tile color="light-green accent-3" group>
          <v-btn value="left"> Left </v-btn>
          <v-btn value="center"> Center </v-btn>
          <v-btn value="right"> Right </v-btn>
          <v-btn value="justify"> Justify </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
  </v-container>

  <v-card
    color="light-gray lighten-5outline "
    class="my-5"
    v-for="post in blog"
    :key="post.id"
  >
    <v-card-title>{{ post.title }}</v-card-title>
    <v-divider inset thickness></v-divider>
    <v-card-text>{{ post.body }}</v-card-text>

    <v-container fluid>
      <v-row justify="end">
        <v-col cols="auto">
          <v-item-group>
            <v-item v-for="tag in post.tags" :key="tag">
              <v-chip class="mx-1">#{{ tag }}</v-chip>
            </v-item>
          </v-item-group>
        </v-col>
      </v-row>
    </v-container>

    <v-card-actions>
      <v-container fluid>
        <v-row justify="end">
          <v-col cols="auto">
            <v-btn outline flat color="light-blue">
              <v-icon>mdi-dots-horizontal</v-icon>
              More
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn outline flat color="light-blue" @click="deletePost(post.id)">
              <v-icon>mdi-delete</v-icon>
              Delete
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Post } from "@/types/Post";
import getCollection from "@/composables/getCollection";
import deleteDocument from "@/composables/deleteDocument";

export default defineComponent({
  name: "Blog",
  setup() {
    const { documents: blog, error } = getCollection<Post>("blog");
    const deletePost = async (id: string) => {
      const deletedPost = await deleteDocument<Post>("blog", id);
      if (deletedPost.error.value) {
        console.log(deletedPost.error.value);
      } else {
        console.log("You deleted:", deletedPost.document.value);
      }
    };
    return { blog, error, deletePost };
  },
});
</script>

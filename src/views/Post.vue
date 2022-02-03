<template>
  <v-card v-if="post" class="mt-5">
    <v-card-title>
      <v-text-field
        label="Title"
        v-model="post.title"
        :readonly="!isEditing"
      ></v-text-field>
    </v-card-title>
    <v-card-text>
      <v-textarea
        label="Body"
        v-model="post.body"
        :readonly="!isEditing"
      ></v-textarea>
    </v-card-text>

    <v-card-action>
      <v-container fluid>
        <v-row justify="start">
          <v-col cols="auto">
            <v-item-group>
              <v-item v-for="tag in post.tags" :key="tag">
                <v-chip class="mx-1">#{{ tag }}</v-chip>
              </v-item>
            </v-item-group>
          </v-col>
        </v-row>
      </v-container>
    </v-card-action>

    <v-card-actions>
      <v-btn v-if="!isEditing" @click="isEditing = true">
        <v-icon>mdi-square-edit-outline</v-icon>
        <span>Edit</span>
      </v-btn>
      <v-btn v-if="isEditing" @click="isEditing = false">
        <v-icon>mdi-content-save-edit</v-icon>
        <span>Save</span>
      </v-btn>
      <v-btn v-if="isEditing" @click="isEditing = false">
        <v-icon>mdi-file-undo</v-icon>
        <span>Discard Change</span>
      </v-btn>
      <v-btn @click="deletePost(post.id)">
        <v-icon>mdi-delete</v-icon>
        <span>Delete</span>
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-card v-else class="mt-5">
    <v-card-title>Loading...</v-card-title>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { Post } from "@/types/Post";
import getDocument from "@/composables/getDocument";
import deleteDocument from "@/composables/deleteDocument";
import router from "@/router";

export default defineComponent({
  name: "Post",
  props: ["id"],
  setup(props) {
    const isEditing = ref<boolean>(false) as Ref<boolean>;
    const { document: post, error } = getDocument<Post>("blog", props.id);
    const deletePost = async (postId: string) => {
      const deletedPost = await deleteDocument<Post>("blog", postId);
      if (deletedPost.error.value) {
        console.log(deletedPost.error.value);
      } else {
        console.log("You deleted:", deletedPost.document.value);
      }
      router.push({ name: "Blog" });
    };
    return { isEditing, post, error, deletePost };
  },
});
</script>

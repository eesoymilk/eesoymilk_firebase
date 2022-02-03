<template>
  <v-sheet width="500px" height="auto" color="light-gray">
    <v-container fluid>
      <v-row justify="center">
        <v-col>
          <h2 class="text-center">Create New Post</h2>
        </v-col>
      </v-row>
      <v-form>
        <v-text-field v-model="post.title"></v-text-field>
        <v-textarea v-model="post.body"></v-textarea>
        <v-row>
          <v-col cols="4">
            <v-text-field
              prefix="#"
              v-model="tag"
              @keydown.enter.prevent="addTag"
            ></v-text-field>
          </v-col>
          <v-col cols="8">
            <v-item-group>
              <v-item v-for="tag in post.tags" :key="tag">
                <v-chip class="ma-1" closable @click:close="chip = false">
                  #{{ tag }}
                </v-chip>
              </v-item>
            </v-item-group>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="auto">
            <v-btn @click="submitPost">submit</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent, reactive, Ref, ref } from "vue";
import { db } from "@/firebase/config";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { PostContent } from "@/types/Post";

export default defineComponent({
  name: "CreatePost",
  setup() {
    const post = reactive<PostContent>({
      title: "",
      body: "",
      tags: [],
    }) as PostContent;
    const tag = ref<string>("") as Ref<string>;

    const addTag = () => {
      console.log("clicked");
      if (!post.tags.includes(tag.value)) {
        post.tags.push(tag.value);
      }
      tag.value = "";
    };

    const submitPost = async () => {
      await addDoc(collection(db, "blog"), {
        ...post,
        createdAt: serverTimestamp(),
      });
    };

    return { post, tag, addTag, submitPost };
  },
});
</script>

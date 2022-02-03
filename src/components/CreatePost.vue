<template>
  <!-- <h2>Create New Post</h2> -->
  <v-form class="ma-5">
    <v-text-field v-model="post.title"></v-text-field>
    <v-textarea v-model="post.body"></v-textarea>
    <v-layout>
      <v-text-field
        prefix="#"
        v-model="tag"
        @keydown.enter.prevent="addTag"
      ></v-text-field>
      <v-item-group>
        <v-item v-for="tag in post.tags" :key="tag">
          <v-chip class="ma-1" closable @click:close="chip = false">
            #{{ tag }}
          </v-chip>
        </v-item>
      </v-item-group>
    </v-layout>
    <v-layout row>
      <v-btn @click="backToBlog">back</v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="submitPost">submit</v-btn>
    </v-layout>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, reactive, Ref, ref } from "vue";
import { db } from "@/firebase/config";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { PostContent } from "@/types/Post";
// import { useRouter } from "vue-router";
import router from "@/router";

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

    const backToBlog = () => {
      router.push("/blog");
    };

    const submitPost = async () => {
      await addDoc(collection(db, "blog"), {
        ...post,
        createdAt: serverTimestamp(),
      });
      backToBlog();
    };

    return { post, tag, addTag, backToBlog, submitPost };
  },
});
</script>

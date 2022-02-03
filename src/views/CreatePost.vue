<template>
  <v-card v-if="post" class="mt-5">
    <v-card-title>Creating A New Post</v-card-title>
    <v-card-title>
      <v-text-field label="Title" v-model="post.title"></v-text-field>
    </v-card-title>
    <v-card-text>
      <v-textarea label="Body" v-model="post.body"></v-textarea>
    </v-card-text>

    <v-card-action>
      <v-container fluid>
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
                <v-chip class="ma-1" closable @click="removeTag(tag)">
                  #{{ tag }}
                </v-chip>
              </v-item>
            </v-item-group>
          </v-col>
        </v-row>
      </v-container>
    </v-card-action>

    <v-card-actions>
      <v-btn :to="{ name: 'Blog' }">
        <v-icon>mdi-undo</v-icon>
        <span>Back</span>
      </v-btn>
      <v-btn @click="submitPost()">
        <v-icon>mdi-cloud-upload</v-icon>
        <span>Submit</span>
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-card v-else class="mt-5">
    <v-card-title>Loading...</v-card-title>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive, Ref, ref } from "vue";
import { PostContent } from "@/types/Post";
// import router from "@/router";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { db } from "@/firebase/config";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "CreatePost",
  setup() {
    const post = reactive<PostContent>({
      title: "",
      body: "",
      tags: [],
    }) as PostContent;
    const tag = ref<string>("") as Ref<string>;
    const router = useRouter();

    const addTag = () => {
      console.log("clicked");
      if (!post.tags.includes(tag.value)) {
        post.tags.push(tag.value);
      }
      tag.value = "";
    };

    const removeTag = (t: string) => {
      const idx = post.tags.indexOf(t);
      if (idx > -1) post.tags.splice(idx, 1);
    };

    const submitPost = async () => {
      await addDoc(collection(db, "blog"), {
        ...post,
        createdAt: serverTimestamp(),
      });
      router.push({ name: "Blog" });
    };

    return { post, tag, addTag, removeTag, submitPost };
  },
});
</script>

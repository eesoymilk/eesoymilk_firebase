<template>
  <v-card class="mt-5">
    <v-card-title>Sign Up!</v-card-title>
    <v-card-title>
      <v-text-field
        type="email"
        label="E-mail"
        v-model="info.email"
      ></v-text-field>
    </v-card-title>
    <v-card-title>
      <v-text-field
        type="password"
        label="Password"
        v-model="info.password"
      ></v-text-field>
    </v-card-title>

    <v-card-actions>
      <v-btn :to="{ name: 'Home' }">
        <v-icon>mdi-undo</v-icon>
        <span>Back</span>
      </v-btn>
      <v-btn @click="submitSignup()">
        <v-icon>mdi-account-plus</v-icon>
        <span>Signup</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import useSignup from "@/composables/useSignup";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Signup",
  setup() {
    const { signup, error } = useSignup();
    const info = reactive<{ email: string; password: string }>({
      email: "",
      password: "",
    }) as { email: string; password: string };
    const router = useRouter();

    const submitSignup = async () => {
      await signup(info.email, info.password);
      if (!error.value) {
        router.push({ name: "Home" });
      }
    };
    return { info, submitSignup };
  },
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-parallax src="@/assets/violet1.jpg"></v-parallax>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id aut
          cumque nihil sed adipisci quibusdam officiis voluptas, quo qui minus
          ea perferendis ducimus cum placeat? Dicta culpa error sed debitis vero
          magni non obcaecati deleniti, in, necessitatibus eaque consectetur
          modi nostrum impedit quos rerum eligendi quam libero repellendus
          nihil, possimus recusandae a! Aliquid voluptatem dolores, delectus
          reprehenderit esse ducimus harum, et excepturi laborum nisi, labore
          dolorem ex dicta. Quidem rerum atque esse amet saepe tempora obcaecati
          assumenda unde nemo labore consectetur tenetur accusantium quo ea
          illum earum vel quam, quas veritatis iusto fugiat, officiis laboriosam
          possimus perferendis? Fuga error aliquid officiis itaque dolorum
          beatae, quod, dolores, quas obcaecati repellat commodi. Eligendi nihil
          consectetur architecto repellat quos debitis repellendus ex explicabo
          corrupti? Iure tenetur maxime, error nisi sequi optio dolor ad laborum
          ut veritatis nihil commodi nam, vel eaque quidem perspiciatis officia
          ea! Commodi veritatis dignissimos maxime odit iste laudantium
          similique excepturi nobis aliquam ipsam id facere repudiandae
          laboriosam deleniti laborum voluptatibus sit at accusamus, voluptate
          quas soluta sint quod. Eius enim praesentium, perspiciatis iure iste
          ullam non laboriosam ab corrupti nam quas voluptate iusto magni omnis
          itaque dolore deleniti impedit amet! Maxime nam omnis quas repudiandae
          eum aliquam itaque.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from "../components/HelloWorld.vue";

export default defineComponent({
  name: "Home",

  components: {
    // HelloWorld,
  },
  setup() {
    const justify = ["start", "center", "end", "space-around", "space-between"];
    return { justify };
  },
});
</script>

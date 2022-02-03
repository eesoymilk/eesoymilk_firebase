// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

// Compiler bug fix
import { Intersect } from "vuetify/directives";

export default createVuetify({
  directives: { Intersect },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

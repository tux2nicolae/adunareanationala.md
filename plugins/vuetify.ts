import { createVuetify } from "vuetify";
import { mdi } from "vuetify/lib/iconsets/mdi";
import { md2 } from "vuetify/blueprints";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    blueprint: md2,
    theme: {
      defaultTheme: "light",
    },
    icons: {
      defaultSet: "mdi",
      sets: {
        mdi,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});

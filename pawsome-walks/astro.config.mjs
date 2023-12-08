import { defineConfig } from "astro/config";
import { defaultLocale, locales } from "./src/i18n/language";
// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale,
    locales,
    routing: {
      prefixDefaultLocale: true,
    },
  },
  output: "server",
});

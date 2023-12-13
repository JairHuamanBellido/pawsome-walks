import { defineConfig } from "astro/config";
import { defaultLocale, locales } from "./src/i18n/language";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale,
    locales,
    routing: {
      prefixDefaultLocale: true
    }
  },
  output: "server",
  integrations: [tailwind(), react()]
});
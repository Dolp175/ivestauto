// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://www.ivestauto.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
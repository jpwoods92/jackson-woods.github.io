import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindCSS from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [
    preact({
      prerender: {
        enabled: true,
        renderTarget: "#app",
      },
    }),
  ],
  base: "/",
  css: {
    postcss: {
      plugins: [tailwindCSS(), autoprefixer()],
    },
  },
});

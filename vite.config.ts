import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("/node_modules/")) {
            return /\/(motion|framer-motion|motion-dom|motion-utils)\//.test(id)
              ? "motion"
              : "vendor";
          }
        },
      },
    },
  },
});

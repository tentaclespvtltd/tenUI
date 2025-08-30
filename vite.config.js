import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "TenUI", // global variable name for UMD build
      fileName: (format) => `tenui.${format}.js`, // dist/tenui.es.js, dist/tenui.cjs.js
    },
    rollupOptions: {
      // make sure to not bundle react & react-dom into your library
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

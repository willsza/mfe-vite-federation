import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "statement_app",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./Statement": "./src/components/Statement",
      },
      shared: ["react", "react-dom", "tailwindcss"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

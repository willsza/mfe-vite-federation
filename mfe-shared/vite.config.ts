import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shared_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/components/Header",
        "./Menu": "./src/components/Menu",
        "./Template": "./src/components/Template",
        "./store": "./src/store",
      },
      shared: ["react", "react-dom", "react-router-dom", "zustand"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5002,
  },
});

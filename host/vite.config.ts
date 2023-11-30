import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Shell": "./src/components/Shell",
        "./store": "./src/store/index",
      },
      remotes: {
        statement_app: "http://localhost:5001/assets/remoteEntry.js",
        transfer_app: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "zustand", "tailwindcss"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5000,
  },
});

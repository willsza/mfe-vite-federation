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
      exposes: {
        "./Statement": "./src/components/Statement",
      },
      remotes: {
        host_app: "http://localhost:5000/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "tailwindcss"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

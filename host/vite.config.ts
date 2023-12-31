import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

import { defineConfig, loadEnv } from "vite";

const env = loadEnv("all", process.cwd());

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Shell": "./src/components/Shell",
        "./styles": "./src/index.css",
      },
      remotes: {
        statement_app: `${env.VITE_STATEMENT_APP}/assets/remoteEntry.js`,
        transfer_app: `${env.VITE_TRANSFER_APP}/assets/remoteEntry.js`,
        shared_app: `${env.VITE_SHARED_APP}/assets/remoteEntry.js`,
      },
      shared: ["react", "react-dom", "zustand"],
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

import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const env = loadEnv("all", process.cwd());

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "transfer_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Transfers": "./src/components/Transfers",
      },
      remotes: {
        host_app: `${env.VITE_HOST_APP}/assets/remoteEntry.js`,
        shared_app: `${env.VITE_SHARED_APP}/assets/remoteEntry.js`,
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
    port: 5003,
  },
});

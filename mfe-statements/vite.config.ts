import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

const env = loadEnv("all", process.cwd());

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
        host_app: `${env.VITE_HOST_APP}/assets/remoteEntry.js`,
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
});

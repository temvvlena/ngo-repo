import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `BASE_PATH` is set by CI when deploying to GitHub Pages
// (e.g. "/ngo-repo/"). Locally and for root-domain hosting it stays "/".
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});

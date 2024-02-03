import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const base = process.env.VITE_BASE || "/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: base,
});

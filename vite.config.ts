import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    emptyOutDir: true,
    outDir: "dist",
    lib: {
      entry: {
        useText: resolve(__dirname, "./src/useText.tsx"),
        useToggle: resolve(__dirname, "./src/useToggle.tsx"),
      },
      formats: ["es", "cjs"],
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "index",
      fileName: "index",
      formats: ["es", "cjs", "umd"],
    },
    outDir: "../dist",
    emptyOutDir: true,
  },
});

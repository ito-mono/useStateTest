import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: {
        index: "src/index.ts", // エントリポイント
        useToggle: "src/useToggle.ts", // 2番目のエントリポイント
      },
      formats: ["es", "cjs"],
    },
    outDir: "../dist",
    emptyOutDir: true,
  },
});

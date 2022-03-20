import { defineConfig } from "rollup";
import path from "path";
import svgr from "@svgr/rollup";

export default defineConfig({
  input: path.resolve(__dirname, "../../src/case1.jsx"),
  output: {
    dir: path.resolve(__dirname, "../../dist/rollup/case1"),
  },
  plugins: [svgr()],
});

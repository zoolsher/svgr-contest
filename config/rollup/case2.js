import { defineConfig } from "rollup";
import path from "path";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";

export default defineConfig({
  input: path.resolve(__dirname, "../../src/case2.jsx"),
  output: {
    dir: path.resolve(__dirname, "../../dist/rollup/case2"),
  },
  plugins: [url(), svgr()],
});
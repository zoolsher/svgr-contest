import { defineConfig } from "rollup";
import path from "path";
import url from "@rollup/plugin-url";

function parseId(id) {
  const [url, query] = id.split("?");
  return {
    url,
    query,
  };
}

export default defineConfig({
  input: path.resolve(__dirname, "../../src/case3.jsx"),
  output: {
    dir: path.resolve(__dirname, "../../dist/rollup/case3"),
  },
  plugins: [
    // SVG File Loader
    {
      load(id) {
        if (/\.svg$/.test(id)) {
          return `export default ${JSON.stringify(
            require("fs")
              .readFileSync(path.resolve(__dirname, "../../", id))
              .toString("utf-8")
          )}`;
        }
        return null;
      },
    },
    {
      // svgr
      async resolveId(id, importer) {
        if (/as=react/.test(id)) {
          // 需要把 resolve 结果交回去，不然没办法处理 alias 等情况
          const res = await this.resolve(
            id.replace("?as=react", ""),
            importer,
            {
              skipSelf: true,
            }
          );
          res.id = res.id + "?as=react";
          return res;
        }
      },
      async load(id) {
        if (/as=react/.test(id)) {
          // 交给 file loader 处理
          const path = id.replace("?as=react", "");
          return await this.load({ id: path });
        }
      },
      async transform(code, id) {
        if (/as\=react$/.test(id)) {
          // TOOD should invoke svgr
          return `
          import React from "react";
          export default ()=>{
            return React.createElement("div");
          };
          `;
        }
        return code;
      },
    },
  ],
});

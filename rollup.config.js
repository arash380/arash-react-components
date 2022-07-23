import babel from "@rollup/plugin-babel";
import image from "@rollup/plugin-image";
import alias from "@rollup/plugin-alias";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const input = "src/index.js";

const config = {
  input,
  output: {
    name: "arash-react-components",
    file: "dist/index.js",
    format: "cjs",
    exports: "auto",
  },
  // The peerDepsExternal plugin did not detect this package :(
  external: [/@babel\/runtime/],
  plugins: [
    babel({
      exclude: "node_modules/**",
      plugins: ["@babel/transform-runtime"],
      babelHelpers: "runtime",
    }),
    postcss({
      modules: true,
    }),
    image(),
    peerDepsExternal(),
  ],
};

export default config;

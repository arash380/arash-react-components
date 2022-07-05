import babel from "@rollup/plugin-babel";
import image from "@rollup/plugin-image";
import postcss from "rollup-plugin-postcss";

const input = "src/index.js";

const config = {
  input,
  output: {
    name: "arash-react-components",
    file: "dist/index.js",
    format: "cjs",
    exports: "auto",
  },
  external: [
    "react",
    "react-router-dom",
    "react-toastify",
    "react-custom-scrollbars",
    "moment",
    "@material-ui/core",
    "@material-ui/lab",
    "@material-ui/core/styles",
    "@material-ui/icons",
    "@iconify/react",
    /@babel\/runtime/,
  ],
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
  ],
};

export default config;

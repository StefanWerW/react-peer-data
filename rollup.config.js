import sourcemaps from "rollup-plugin-sourcemaps";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

const env = process.env.NODE_ENV;
const pkg = require("./package");
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const plugins = [
  sourcemaps(),
  resolve({
    mainFields: ['module', 'main', 'jsnext']
  }),
  typescript({
    clean: true,
    rollupCommonJSResolveHack: true,
    exclude: ['*.d.ts', '**/*.d.ts'],
  }),
  commonjs(),
];

const config = {
  input: "src/index.ts",
  external: external,
  plugins: plugins,
  output: [
    {
      name: pkg.name,
      exports: 'named',
      file: pkg.module,
      format: "es",
      sourcemap: true
    },
    {
      name: pkg.name,
      exports: 'named',
      file: pkg.main,
      format: "umd",
      sourcemap: true
    },
  ]
};

export default config;

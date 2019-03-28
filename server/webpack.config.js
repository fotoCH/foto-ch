const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/server.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "foto-ch-server.bundle.js"
  },
  mode: "production",
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.build.json"
        }
      }
    ]
  },
  plugins: [new CopyPlugin([{ from: "src/config.json", to: "config.json" }])],
  target: "node",
  optimization: {
    minimize: false
  }
};

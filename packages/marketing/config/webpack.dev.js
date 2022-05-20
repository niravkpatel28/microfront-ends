const { merge } = require("webpack-merge");
const { ModuleFederationPlugin } = require("webpack").container;
const commonCongif = require("./webpack.common");

// in case of shared modules, a simpler way would be to add
// all the dependencies in the in package.json can be simply included in the file

const packageJson = require("../package.json");
const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "./public/index.html",
    },
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      // shared: ["react", "react-dom"],
      shared: packageJson.dependencies,
    }),
  ],
};

// merges both the configs...
// devConfig takes precedence over any config.
module.exports = merge(commonCongif, devConfig);

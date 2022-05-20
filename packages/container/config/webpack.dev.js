const { merge } = require("webpack-merge");

const { ModuleFederationPlugin } = require("webpack").container;
const commonCongif = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "./public/index.html",
    },
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketingApp: "marketing@http://localhost:8081/remoteEntry.js",
      },
      // shared: ["react", "react-dom"],
      shared: packageJson.dependencies,
    }),
  ],
};

// merges both the configs...
// devConfig takes precedence over any config.
module.exports = merge(commonCongif, devConfig);

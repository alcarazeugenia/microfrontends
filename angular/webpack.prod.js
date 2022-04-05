const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const commonConfig = require("./webpack.config");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/angular/latest/",
    scriptType: "text/javascript",
  },
};

module.exports = merge(commonConfig, prodConfig);

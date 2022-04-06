const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
	mode: "development",
	output: {
		publicPath: "http://localhost:8080/",
	},
	devServer: {
		port: 8080,
		historyApiFallback: {
			index: "index.html",
		},
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "container",
			remotes: {
				marketing: "marketing@http://localhost:8084/remoteEntry.js",
				auth: "auth@http://localhost:8082/remoteEntry.js",
				dashboard: "dashboard@http://localhost:8083/remoteEntry.js",
				angular: "angular@http://localhost:3002/remoteEntry.js",
				multiAppLeft:
					"multiAppLeft@http://localhost:3003/remoteEntry.js",
				multiAppRight:
					"multiAppRight@http://localhost:3004/remoteEntry.js",
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(commonConfig, devConfig);

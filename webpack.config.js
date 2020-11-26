const HtmlWebpackPlugin = require("html-webpack-plugin")

const javascriptRules = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: "babel-loader",
		options: {
			presets: ["@babel/preset-react", "@babel/preset-env"],
		},
	},
}

module.exports = {
	output: {
		filename: "app.[contenthash].js",
	},
	module: {
		rules: [javascriptRules],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Webpack paso a paso",
			template: "src/index.html",
		}),
	],
}

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	target: "web",
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			title: "webpack Boilerplate",
			template: path.resolve(__dirname, "./src/template.html"), // шаблон
			filename: path.resolve(__dirname, "./dist/index.html"), // название выходного файла
		}),
	],
	entry: {
		main: path.resolve(__dirname, "./src/index.js"),
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].bundle.js",
	},
	devServer: {
		open: true,
		watchContentBase: true,
		hot: true,
		liveReload: true,
	},
};

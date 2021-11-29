const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.config.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "../build"),
        filename: "js/main.[contentHash].js",
        publicPath: "./",
        clean: true,
    },
    plugins: [new CleanWebpackPlugin()],
});

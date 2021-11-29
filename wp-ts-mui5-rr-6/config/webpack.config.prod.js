const { merge } = require("webpack-merge");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./webpack.config.common");

module.exports = merge(common, {
    mode: "production",
    devtool: "hidden-source-map",
    output: {
        path: path.join(__dirname, "../build"),
        filename: "js/main.[contentHash].js",
        publicPath: "./",
    },
    plugins: [new CleanWebpackPlugin()],
});

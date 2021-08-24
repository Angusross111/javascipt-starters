const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.config.common");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    output: {
        path: path.join(__dirname, "../build"),
        filename: "js/main.[contentHash].js",
        publicPath: "./",
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        devMiddleware: {
            writeToDisk: true,
        },
        host: "localhost",
        port: 3003,
        static: [
            {
                directory: path.join(__dirname, "../build"),
                serveIndex: true,
                watch: true,
            },
        ],
    },
});

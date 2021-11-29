//Require path is a node subcomponent - no NPM modules needed
var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "../src/index"),
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    experiments: {
        asset: true,
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                },
            },
            {
                test: /\.(svg|png|jpe?g|gif|jp2|webp)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /(\.less)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
            },
        ],
    },
    externals: ({ context, request }, cb) => {
        if (/xlsx|canvg|pdfmake/.test(request)) {
            return cb(null, "commonjs " + request);
        }
        cb();
    },
    plugins: [
        new NodePolyfillPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./index.html"),
            favicon: "./config/logo-16.png",
        }),
    ],
};

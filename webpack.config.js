const { resolve } = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const sassJsonImporter = require("node-sass-json-importer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
    entry: [
        "babel-polyfill",
        "./index.jsx"
    ],
    output: {
        filename: "bundle.js",
        path: resolve(__dirname, "dist"),
        publicPath: "/"
    },
    resolve: {
        extensions: [".js", ".json", ".jsx"],
        alias: {
            components: resolve(__dirname, "app/components"),
            containers: resolve(__dirname, "app/containers"),
            store: resolve(__dirname, "app/store"),
        }
    },
    context: resolve(__dirname, "app"),
    devtool: "inline-source-map",
    devServer: {
        contentBase: resolve(__dirname, "dist"),
        publicPath: "/",
        stats: "errors-only",
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: [/\.js$/, /\.jsx$/],
                use: ["babel-loader"],
                include: /app/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: { modules: true, camelCase: true }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: () => [autoprefixer]
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                importer: sassJsonImporter
                            }
                        }
                    ]
                }),
                include: /app/
            },
            {
                test: /\.png$/,
                use: "url-loader",
                include: /app/
            }
        ]
    },
    node: {
        fs: "empty",
        child_process: "empty"
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "app/index.html")
        })
    ]
};

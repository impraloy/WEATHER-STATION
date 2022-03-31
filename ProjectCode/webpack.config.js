const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "src", "index.jsx"),
    output: {
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        name: '[path][name].[ext]'
                    }
                }]
            },
            // {
            //     test: /\.(png|jpg|jpeg|svg|gif)$/,
            //     use: [{
            //         loader: "file-loader",
            //         options: {
            //             name: '[path][name].[ext]'
            //         }
            //     }]
            // },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "public/index.html")
        })
    ]
}
// const MODE = "production"
const MODE = "development"
const enabledSourceMap = MODE === "development"

module.exports = {
    mode: MODE,
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    devServer: {
        contentBase: 'dist',
        open: true
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: enabledSourceMap,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: enabledSourceMap
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
                loader: 'url-loader'
            }
        ]
    }
}

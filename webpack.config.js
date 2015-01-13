module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname,
        filename: "./public/scripts/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.js$/,
                loader: 'jsx'
            }
        ]
    }
};
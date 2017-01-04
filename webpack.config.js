module.exports = {
    // entry: './app/js/index.js',
    // output: {
    //     filename: 'bundle.js',
    //     path: './dist',
    // },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ["style-loader", "css-loader", "sass-loader"],
        }]
    },
};

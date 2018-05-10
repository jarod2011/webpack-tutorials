const webpack = require('webpack');
const modulePath = __dirname + '/node_modules/';

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: modulePath,
            loader: [{
                loader: 'jsx-loader'
            }, {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
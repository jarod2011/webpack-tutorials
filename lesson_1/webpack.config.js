const webpack = require('webpack');
const modulePath = __dirname + '/node_modules/';

module.exports = {
    entry: {
        app: './src/app.jsx'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
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
        }),
        new webpack.optimize.UglifyJsPlugin({
            warnings: false,
            compress: {
                join_vars: true,
                warnings: false,
            },
            output: {
                comments: false,
            },
            except: ['$super', '$', 'exports', 'require'],
            toplevel: false,
            ie8: false,
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
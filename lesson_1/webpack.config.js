/* 引入webpack */
const webpack = require('webpack');
/* 定义模块路径 */
const modulePath = __dirname + '/node_modules/';
/**
 * entry: 配置入口
 * output: 配置输入，其中path代表输出路径，filename表示文件名，这里的[name]表示配置入口时传入的名，此处为app
 * module: 配置其他模块打包规则，由于webpack仅理解js，所以对于其他类型文件要通过此处做单独处理,
 *         每一条规则规则都是一个object，test代表匹配的正则表达式规则，exclude配置模块的路径,
 *         匹配到对应的文件后，通过配置的loader来做递归处理。loader是一个数组，里面每个object为一个处理loader
 *         此处先使用了jsx-loader处理了jsx语法，然后通过babel-loader，使用es2015和react依赖，将文件处理成es5语法。
 * plugins: 此处配置了插件，第一个是定义下输出生产环境，第二个则使用了webpack内置的UglifyJs对文件做了压缩和混淆处理
 * resolve: 此处配置自动追加了扩展名，此处配置了js和jsx，因此入口的app.jsx可以改为app即可。
 */
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
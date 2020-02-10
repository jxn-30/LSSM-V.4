const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    target: 'web',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                indentedSyntax: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.html?$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src'],
                    },
                },
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(require('./package').version),
        }),
    ],
};

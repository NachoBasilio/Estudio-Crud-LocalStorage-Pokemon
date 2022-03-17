const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { ids } = require('webpack');


const rules = [
    //rules for css
    {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
    },

]

module.exports = (env, argv) => {
    const {mode} = argv
    const isProd = mode === 'production'
    return {
        output: {
            filename: isProd ? '[name].[chunkhash].js' : '[name].js',
            path: path.resolve(__dirname, 'build')
        },
        plugins:[
            new htmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
        devtool: 'source-map',
        module: {
            rules
        },
        devServer: {
            open:true,
            port: 3000,

        },
    }
    
}
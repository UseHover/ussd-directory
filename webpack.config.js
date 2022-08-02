const path = require("path")
const DotEnv = require('dotenv-webpack')

module.exports = {
    entry: './packs/index.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: "bundle.js"
    },
    module: {
        rules:  [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'packs'),
                exclude: /(node_modules)/,
                loader: "babel-loader", // "babel-loader" is also a legal name to reference
                options: {
                    presets: [
                        ['@babel/preset-env', {targets: "defaults", modules: false}],
                        '@babel/preset-react',
                    ]
                }
            },
            {
                test: /\.ya?ml$/,
                include: path.resolve(__dirname, '_data'),
                use: ['yaml-loader']
            }
        ]
    },
    plugins: [
        new DotEnv(),
    ]
};
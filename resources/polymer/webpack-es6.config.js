const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../../public/js/polymer'),
    filename: 'index-es6.js'
  },
  module: {
    rules: [
      {
      test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env',
            {
              targets: {
                "esmodules": true
              },
              debug: true
            }  
            ]]
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'node_modules/@webcomponents/webcomponentsjs/',
        to: path.resolve(__dirname, '../../public/js/webcomponentsjs/')
      }
    ]),
  ],
}
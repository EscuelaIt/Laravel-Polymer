const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    publicPath: 'http://localhost:9009/scripts/'
  },
  devtool: 'inline-source-map',
  devServer: {
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
  }
}


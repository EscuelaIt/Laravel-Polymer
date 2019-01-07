const path = require('path');


module.exports = {
  entry: [
    '@webcomponents/webcomponentsjs/custom-elements-es5-adapter',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, '../../public/js/polymer'),
    filename: 'index-es5.js'
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
                browsers: [
                  '>=1%',
                  'not op_mini all',
                ]
              },
              debug: true
            }  
            ]]
          }
        }
      }
    ]
  },
}
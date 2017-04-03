
const path = require('path');

const config = {
  entry: {
    main: './js/entry.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist/js')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};

module.exports = config;
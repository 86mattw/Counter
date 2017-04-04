
const webpack =     require('webpack');
const path =        require('path');

// Directories.
const srcDir = path.resolve(__dirname, './src');
const distDir = path.resolve(__dirname, './dist');

// Loader config objects.
const babelLoaderConfig = {
  test: /\.js$/,
  exclude: [/node_modules/],
  use: [{
    loader: 'babel-loader'
  }]
};

// Webpack Config.
const webpackConfig = {
  context: srcDir,
  resolve: {
    modules: [srcDir, 'node_modules']
  },
  entry: {
    main: './js/entry.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: distDir
  },
  module: {
    rules: [babelLoaderConfig]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = webpackConfig;
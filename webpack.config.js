var path = require('path');

module.exports = {
  context: path.resolve('./lib'),
  devtool: 'inline-source-map',
  entry: {
    main: ['./main.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: './build'
  },
  devServer: {
    host: 'localhost',
    port: 8888
  },
  module: {
    loaders: [
      {
        test:  /\.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

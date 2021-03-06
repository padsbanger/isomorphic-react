const path = require('path');

module.exports = {
  // Inform webpack that we are building a bundle for nodejs
  target: 'node',

  //tell webpack the root of our app,
  entry: './src/index.js',

  // tell webpack where to put out file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // tell webpack to run babel on every file
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', {targets: {
              browsers: ['last 2 versions']
            }}]
          ]
        }
      }
    ]
  }
}
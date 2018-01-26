const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const distPath = path.relative(process.cwd(), path.resolve(__dirname, 'dist'));

module.exports = {
  entry: './app.js',
  output: {
    filename: `${distPath}/app.js`,
  },
  context: __dirname,
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react'],
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'index.html',
        to: `${distPath}/index.html`,
      },
    ]),
  ],
};

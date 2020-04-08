const path = require('path');
require('dotenv/config');

const srcFolder = path.resolve(__dirname, 'client');
const publicFolder = path.resolve(__dirname, 'server/public');

module.exports = {
  mode: 'none',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: './client',
  output: {
    path: publicFolder
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: srcFolder,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-react-jsx'
            ]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: publicFolder,
    historyApiFallback: true,
    port: process.env.DEV_SERVER_PORT,
    watchContentBase: true,
    host: '0.0.0.0',
    proxy: {
      '/api': `localhost:${process.env.PORT}`
    },
    stats: 'minimal'
  }
};

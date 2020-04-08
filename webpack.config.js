const path = require('path');

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
  }
};

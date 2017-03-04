var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'app') + '/index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'app'),
        loader: ['babel-loader'],
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'app'),
        loaders:[
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]'
        ],
      }
    ]
  },
  plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin()
    ],
  devServer: {
    stats: 'errors-only'
  }
};

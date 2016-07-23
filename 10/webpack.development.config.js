var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var config = {

  devtool: 'eval',

  entry: [
    './src/App',
    'webpack-hot-middleware/client'
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },

  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    // Step 7: Distinguish between client and server side specific code
    new webpack.DefinePlugin({
      "process.env": {
        BROWSER: JSON.stringify(true)
      }
    }),
    new ExtractTextPlugin("[name].css")
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: [path.join(__dirname, 'src')]
      },
      // {
      //   test: /\.css$/,
      //   loaders: ['style-loader','css-loader']
      // },
      {
       test: /\.css$/,
       loader: ExtractTextPlugin.extract('style-loader','css-loader')
      }
      ,
      { test: /\.(png|jpg|gif)$/, loader: 'file-loader?name=[path][name].[hash].[ext]' }
    ]
  }
}

module.exports = config

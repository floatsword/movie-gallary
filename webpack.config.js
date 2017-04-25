const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor/index.js'),
    main: [path.resolve(__dirname, 'src/app/index.js')]
  },
  output: {
    filename: 'assets/js/[name].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    compress: true,
    historyApiFallback: true,
    contentBase: 'public',
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'less-loader']
        })
      },
      {
        test: /\.(eot|svg|ttf|woff?)$/,
        use: ['file-loader?name=assets/fonts/[name].[ext]']
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: 'vendor'
    }),
    new ExtractTextPlugin({
      filename: 'assets/css/[name].css'
    })

  ]
}

var CircularDependencyPlugin = require('circular-dependency-plugin')
var config = require('../webpack.common.config.js')
var webpack = require('webpack')

loaders = [
  {test: /\.(js|jsx)$/, loader: 'babel-loader', include: path.join(__dirname, 'src')},
  {test: /\.(scss)$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!sass-loader'})},
  {test: /\.(png|jpg|gif|eot|ttf|woff|svg|woff2)(\?.*)?$/, loader: 'url-loader?limit=1000&name=img/[name]-[hash].[ext]'}
]

module.exports = {
  module: {
    rules: loaders
  },
  plugins: config.plugins
}

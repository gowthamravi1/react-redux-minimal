var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var app_root = 'src'; // the app root folder: src, src_users, etc
module.exports = require('./webpack.config.js');    // inherit from the main config file

// disable the hot reload
module.exports.entry = [
  'babel-polyfill',
  __dirname + '/' + app_root + '/index.js'
];

// export css to a separate file
module.exports.module.loaders[1] = {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('css-loader!sass-loader')
};
module.exports.plugins.push(
  new ExtractTextPlugin('../css/main.css')
);

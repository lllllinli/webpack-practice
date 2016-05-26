var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var entryPath = path.join(__dirname, "..", "/app/main.js");
var buildPath = path.join(__dirname, "..", "/build");
var templetePath = path.join(__dirname, "..", "/app/html-templete");
var pkg = require(path.join("..", "./package.json"));

module.exports = {
  devtool: 'source-map',
	entry: {
    app:entryPath,
    vendors: pkg.vendors
  },
	output: {
		path: buildPath,
		filename: "[name]-[hash].js"
	},
	module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
			{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules!postcss', 'sass')
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url?limit=8192'
      },
      {
        test : /\.(woff|woff2|ttf|eot)$/,
        loader: 'url'
      }
    ]
  },
	postcss: [
    require('autoprefixer')
  ],
	plugins: [
		new HtmlWebpackPlugin({
      title: pkg.name,
      filename: 'index.html',
      template: templetePath + "/index.html"
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("[name]-[hash].css"),
    new HtmlWebpackPlugin({
      template: templetePath + "/index.html"
    }),
		new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery'
        }),
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js', Infinity)
  ]
};

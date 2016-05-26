var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entryPath = path.join(__dirname, "..", "/app/main.js");
var outputPath = path.join(__dirname, "..", "/public");
var contentBasePort = path.join(__dirname, "..", "/public");
var templetePath = path.join(__dirname, "..", "/app/html-templete")


var pkg = require(path.join("..", "./package.json"));
var devPort = 8080;

module.exports = {
	devtool: "source-map",
	entry: {
		app: entryPath,
		vendors: pkg.vendors
	},
	output: {
		path: outputPath,
		filename: "bundle.js"
	},
  // loaders
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
        loader: 'style!css?modules!postcss!sass'
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
      template: templetePath + "/index.html"
    }),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery'
        }),
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js', Infinity),
    new webpack.NoErrorsPlugin()
  ],
	// 設定 webpack dev server
	devServer:{
		port: devPort,
		contentBase: contentBasePort,
    colors: true,
    historyApiFallback: true,
    inline: true,
		hot:true
	}
};

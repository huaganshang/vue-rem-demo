const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const APP_PATH = path.resolve(__dirname, '../')
const APP_SRC = path.join(APP_PATH, '/src')
const APP_DIST = path.join(APP_PATH, '/dist')

var webpackConfig = {
	// devtool: '#cheap-module-eval-source-map',
	entry: {
		app: ['babel-polyfill', path.join(APP_SRC, '/main.js')],
		vendors: [
			'vue',
			'vuex',
			'vue-router',
			'axios',
			'vue-i18n',
		]
	},
	output: {
		path: APP_DIST,
		filename: '[name].[hash].js'
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.min.js',
			app_src: APP_SRC,
			app_component: 'app_src/component',
			app_view: 'app_src/view'
		},
		extensions: ['.js', '.json', '.vue', '.css', 'less']
	},
	module: {
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				exclude: /^node_modules$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'images/[name]-[hash].[ext]'
				}
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'fonts/[name].[hash].[ext]'
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							path: 'postcss.config.js'
						}
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader',
					{
						loader: 'postcss-loader',
						options: {
							path: 'postcss.config.js'
						}
					}
				]
			},
			{
				test: /\.js$/,
				include: APP_SRC,
				exclude: /^node_modules$/,
				use: [{
					loader: 'babel-loader'
				}]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendors',
			filename: 'vendors.[hash].js'
		}),
		new htmlWebpackPlugin({
			hash: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true
			},
			favicon: path.join(APP_SRC, '/asset/images/ico.ico'),
			template: path.join(APP_SRC, '/template/index.html')
		}),
		new webpack.DefinePlugin({
			__ENV__: JSON.stringify(process.env.NODE_ENV)
		})
	]
}
module.exports = webpackConfig
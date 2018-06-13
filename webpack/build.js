var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var config = require('./base.js')

config.plugins.push(
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false,
			drop_debugger: true,
			drop_console: true
		},
		output: {
			comments: false
		}
	})
)

module.exports = merge(config, {
	devtool: false
})
/**
 * 组件内调用方式
 * 示例1--打开微邮：this.Util.YYBridge.do('openAPP', {app_id: '55', title: '微邮', isPush: '0'}, (rs) => {alert('ok')})
 */
let JsBridge = function() {
	this.init(YonYouJSBridge => {
		YonYouJSBridge.init((message, responseCallback) => {
			//
		})
	})
}
JsBridge.prototype = {
	registerHandler(actionname, callback, data = {}) {
		data = JSON.stringify(data)
		this.init(YonYouJSBridge => {
			YonYouJSBridge.registerHandler(actionname, (data, responseData) => {
				callback()
			})
		})
	},
	init(callback) {
		if (window.WebViewJavascriptBridge) {
			callback(WebViewJavascriptBridge)
		} else {
			document.addEventListener(
				"WebViewJavascriptBridgeReady",
				function() {
					callback(WebViewJavascriptBridge)
				},
				false
			)
		}
	},
	do(action = "", parameters = {}, fn = () => {}) {
		let registerHandler = ""
		if (parameters.registerHandler) {
			registerHandler = parameters.registerHandler
			delete parameters.registerHandler
		}
		let data = {
			function: action,
			parameters: parameters
		}
		data = JSON.stringify(data)
		if (registerHandler.length > 0) {
			registerHandler.forEach((value, index, registerHandler) => {
				let action = value.action
				let actionname = value.parameters
				this.init(YonYouJSBridge => {
					YonYouJSBridge.registerHandler(
						actionname,
						(data, responseData) => {
							action(data)
						}
					)
					YonYouJSBridge.send(data, responseData => {
						fn && fn(responseData)
					})
				})
			})
		} else if (registerHandler.length == undefined) {
			let action = registerHandler.action
			let actionname = registerHandler.parameters

			this.init(YonYouJSBridge => {
				YonYouJSBridge.registerHandler(
					actionname,
					(data, responseData) => {
						fn && fn(responseData)
					}
				)
				YonYouJSBridge.send(data, responseData => {
					fn && fn(responseData)
				})
			})
		} else {
			this.init(YonYouJSBridge => {
				YonYouJSBridge.send(data, responseData => {
					fn && fn(responseData)
				})
			})
		}
	}
}

let YYBridge = (function() {
	let instance
	if (!instance) {
		instance = new JsBridge()
	}
	return instance
})()

export default YYBridge

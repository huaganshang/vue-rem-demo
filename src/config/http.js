import axios from "axios"
import CONFIG from "app_src/config/config"

//获取绝对url
function getUrl(url = "") {
	let env = CONFIG[__ENV__]
	if (!/[http|https]:\/\//gi.test(url)) {
		url = url.replace(/^\[(\w+)\]?/g, (reg, key) => {
			return env[key] || ""
		})
	}
	return url
}
//获取config
function getConfig(config) {
	config.params = config.params || {}
	config.url = getUrl(config.url)
	return config
}

//设置config
axios.defaults.timeout = 3000
axios.interceptors.request.use(
	config => {
		return getConfig(config)
	},
	error => {
		return Promise.reject(error)
	}
)

axios.interceptors.response.use(
	response => {
		return response
	},
	error => {
		return Promise.reject("err")
	}
)

export default axios

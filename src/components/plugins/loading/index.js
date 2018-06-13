import loadingComponent from "./loading"
let $vm
let loading = {
	install(Vue, options) {
		let Loading = Vue.extend(loadingComponent)
		if (!$vm) {
			$vm = new Loading({
				el: document.createElement("div")
			})
			document.body.insertBefore($vm.$el,document.body.firstElementChild)
		}
		let plugin = {
			show(options = {}) {
				if (typeof options === "string") {
					$vm.text = options
				}
				$vm.show = true
			},
			hiden() {
				$vm.show = false
			}
		}
		if (!Vue.prototype.$plugins) {
			Vue.prototype.$plugins = {
				loading: plugin
			}
		} else {
			Vue.prototype.$plugins.loading = plugin
		}
	}
}

export default loading

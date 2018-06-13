import util from '../../util/index'

module.exports = {
	/**
	 * 获取所有localStorage数据
	 */
	getStorageData: (state) => {
		return state.storageData
	},
	/**
	 * 获取localStorage中当前空间下的所有数据
	 */
	getCurrentQzStorageData: (state, getters) => {
		let data = getters.getStorageData,
			qzId = getters.getUserQzId,
			key = `qz_${qzId}`
		return data && data[key] ? data[key] : false
	},
	/**
	 * 获取localStorage中当前空间下的key键值的数据
	 */
	getCurrentQzStorageDataByKey: (state, getters) => (key) => {
		let data = getters.getCurrentQzStorageData
		return data && data[key] ? data[key] : false
	}
}

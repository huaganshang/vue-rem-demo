import Vue from 'vue'
import util from '../../util/index'
import * as types from './mutations_types'

module.exports = {
	[types.UPDATE_STORAGE](state){
		state.storageData = util.store.get()
	},
	[types.UPDATE_CURRENT_QZ_STORAGE_DATA_BY_KEY](state, data){
		let key = Object.keys(data)[0] || ''
		if(key){
			Vue.set(state.storageData, key, data[key])
		}
	}
}

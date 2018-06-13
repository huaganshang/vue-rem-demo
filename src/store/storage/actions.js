import util from '../../util/index'
import * as types from './mutations_types'

module.exports = {
    /**
     * 更新localStorage中、store中的当前空间下的key键值的数据
     * @params Object {commit, state}
     * @params Object {vue实例, data数据对象}
     */
    updateCurrentQzStorageDataByKey: ({commit, state}, {vue, key, data}) => {
        return new Promise((reslove, reject) => {
            let currentQzId = vue.$store.getters.getUserQzId,
                qzKey = `qz_${currentQzId}`,
                qzData = util.store.get(qzKey)
            if(!qzData){
                qzData = {}
                util.store.set(qzKey, qzData)
            }
            if(!!key){
                qzData[key] = data
                util.store.set(qzKey, qzData)
                commit(types.UPDATE_CURRENT_QZ_STORAGE_DATA_BY_KEY, {[qzKey]:qzData})
                reslove(true)
            }
            reject(false)
        })
    },
}
/**
 * wiki: https://wiki.upesn.com/pages/viewpage.action?pageId=2396500
 */
import config from '../../config/config'
import * as types from './mutations_types'

const CGI = {
	memberInfoUrl: '[phpApi]/member/getMemberBaseInfo'
}
module.exports = {
	/**
	 * 更新store中的当前用户信息
	 * @params Object {commit, state}
	 * @params Object {vue实例}
	 */
	setUserInfo: ({commit, state}, {vue}) => {
		return new Promise((reslove, reject) => {
			if(!state.userinfo.member_id){
				vue.$http.get(CGI.memberInfoUrl).then((rs) => {
					let data = rs.data || {}
					if(data.code === 0){ //请求成功
						commit(types.UPDATE_USERINFO, data.data)
						reslove(data.data)
					} else {
						reject(data.msg)
					}
				}).catch((error) => {
					reject(error)
				})
			} else{
				reslove(state.userinfo)
			}
		})
	}
}

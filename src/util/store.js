/**
 * 组件内调用方式
 * 保存数据：this.Util.store.set('userName', 'jack')
 * 获取所有数据：this.Util.store.get()
 * 获取数据：this.Util.store.get('userName')
 * 删除数据：this.Util.store.remove('userName')
 * 清空数据：this.Util.store.clear()
*/

const KEY = 'YYStorage'
let storage = window.localStorage || ''
if(!storage){
    throw new Error("您的浏览器不支持localstorage")
}
let init = function(){
    storage.setItem(KEY, '{}')
}
let store = {
    set(key, value){
        if(key){
            let storageData = storage.getItem(KEY)
            if(!storageData){
                init()
                storageData = storage.getItem(KEY)
            }
            storageData = JSON.parse(storageData)   
            storageData[key] = value
            storage.setItem(KEY, JSON.stringify(storageData))
            return true
        } else{
            return false
        }
    },
    get(key = ''){
        let storageData = storage.getItem(KEY)
        if(!storageData){
            init()
            storageData = storage.getItem(KEY)
        }
        storageData = JSON.parse(storageData)
        if(key){
            return storageData[key] || false
        } else{
            return storageData
        }
    },
    remove(key){
        if(key){
            let storageData = storage.getItem(KEY)
            if(storageData){
                storageData = JSON.parse(storageData)
                delete storageData[key]
                storage.setItem(KEY, JSON.stringify(storageData))
                return true
            } else{
                return false
            }
        }
    },
    clear(){
        storage.removeItem(KEY)
    }
}

export default store
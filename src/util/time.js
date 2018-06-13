export default {
    /**
     * 对Date的扩展，将 Date 转化为指定格式的String
     * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符
     * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
     * @param {String、Date} timestamp 
     * @param {String} formats 
     * 例子：
     * formatDate('1514950039293', "yyyy-MM-dd hh:mm:ss.S") ==> 2018-01-03 11:27:19.293
     * formatDate('1514950039293', "yyyy-M-d h:m:s")      ==> 2018-1-3 11:27:19
     */
    formatDate(timestamp = + new Date(), formats = 'yyyy-MM-dd hh:mm:ss'){
        let time = new Date(timestamp)
        if(! time instanceof Date){
            time = new Date()
        }
        let o = {
            "M+": time.getMonth() + 1, //月份 
            "d+": time.getDate(), //日 
            "h+": time.getHours(), //小时 
            "m+": time.getMinutes(), //分 
            "s+": time.getSeconds(), //秒 
            "q+": Math.floor((time.getMonth() + 3) / 3), //季度 
            "S": time.getMilliseconds() //毫秒 
        };
        if(/(y+)/.test(formats)){
            formats = formats.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for(var k in o){
            if(new RegExp("(" + k + ")").test(formats)){
                formats = formats.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return formats;
    },
}
module.exports = {
  version: '1.0',
  development: {
    phpApi: 'http://h5.api.chaoke.com:6062', //开发环境php接口地址
    javaApi: 'http://123.103.9.204:6058', //开发环境java接口地址
    approveApi: 'http://ys.chaoke.com:91/approvecenter' //开发环境审批接口地址
  },
  test: {
    phpApi: 'http://h5.api.chaoke.com:6062', //测试环境php接口地址
    javaApi: 'http://123.103.9.204:6058', //测试环境java接口地址
    approveApi: 'http://ys.chaoke.com:91/approvecenter' //测试环境审批接口地址
  },
  prevProduction: {
    phpApi: 'https://h5-api.esn.ren', //预发布环境php接口地址
    javaApi: 'https://ezone.esn.ren', //预发布环境java接口地址
    approveApi: 'https://ys.esn.ren/approvecenter' //预发布环境审批接口地址
  },
  production: {
    phpApi: 'https://h5-api.yonyoucloud.com', //生产环境php后端接口域名
    javaApi: 'https://ezone.yonyoucloud.com', //生产环境java接口地址
    approveApi: 'https://ys.yonyoucloud.com/approvecenter' //生产环境审批接口地址
  }
}

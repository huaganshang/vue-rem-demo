#技术栈说明#
* 主要使用 webpack + vue + vuex + vue-router 进行快速开发的一个DEMO
* 对axios进行了底层request、response拦截配置
* 对调用友空间原生方法进行了bridge封装
* 对本地存储localStorage进行了封装，统一通过store中的storage模块存储、读取localStorage
* 支持多语言
* 支持开发环境代码热更新

#开发环境运行步骤#
1. npm install
2. npm run dev
3. 浏览器访问：http://localhost:8888

#测试环境打包#
* npm run test-build

#预发布环境打包#
* npm run pre-build

#生产环境打包#
* npm run dist-build

#目录结构说明#
```
|---dist: 打包后的实体文件
|---webpack: webpack配置文件
|---src: 源代码目录
    |---asset: 静态资源文件夹
    |---components: 组件文件夹
        |---business: 业务组件文件夹
        |---common: 公共组件文件夹
        |---plugins: 插件文件夹
        |---third_party: 第三方组件文件夹(预留)
    |---config: 配置文件夹
        |---config.js: 配置文件
        |---http.js: axios异步请求配置文件
    |---lang: 多语言配置文件夹
    |---router: 前端路由配置文件
    |---store: 状态管理器文件
        |---storage: 本地存储封装
        |---userinfo: 用户信息store
    |---template: 静态页面模板
    |---util: 工具类文件夹
        |---bridge.js: js调用友空间原生方法的封装
        |---md5.js: MD5工具类
        |---store.js: localStorage封装
        |---time.js: 时间工具
    |---view: 应用内所有页面的入口模板
    |---app.vue: 主入口模板文件
    |---main.js: 主入口文件
```

#异步请求#
* API: https://github.com/axios/axios
* 调用方式: this.$http.get('[phpApi]/announce/getInfo', {params: {id: 190}}).then(response => {console.log(response)}).catch(function(error){console.log(error)})
* 其中'[phpApi]/announce/getInfo'中的[phpApi],在src/config/http.js中进行了封装，会对应去读取src/config/config.js中对应环境下的phpApi的值

#调用友空间原生bridge#
* API: 请联系 协同与人力云-移动应用开发部--董雷 (dongleic@yonyou.com), 后续可在开放平台进行查询
* 示例-打开微邮：this.Util.YYBridge.do('openAPP', {app_id: '55', title: '微邮', isPush: '0'}, (rs) =>{alert('ok')})

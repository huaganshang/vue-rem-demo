<template>
    <app-card class="banner-box">
        <template slot="content">
                <span class="radius radius1"></span>
                <span class="radius radius2"></span>
                <span class="radius radius3"></span>
                <span class="radius radius4"></span>
                <swiper :options="list.length>1?swiperOption:swiperOptions" v-if="list.length">
                    <swiper-slide class="banner-swiper-slide" v-if="list.length" v-for="(item,index) in list" :key="index">
                        <div class="imgbox" @click=goDetail(item.url)>
                            <img :src="item.pic" alt="">
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination" v-show="list.length>1"></div>
                </swiper>
        </template>
    </app-card>
</template>

<script>
import AppCard from '../../common/card/index'
export default {
    components: {
        AppCard
    },
    props: {},
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                autoplay: {
                    disableOnInteraction: true
                },
                speed: 1000,
                loop: true
            },
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                },
            },
            httpCfm: {
                uri: '[phpApi]/app/getBanner', //获取数据接口地址
                params: {
                    //请求数据配置参数
                    hash_switch: 'on', //是否开启缓存  on开启  off关闭
                    hash: '' //后台判断数据是否更新唯一标识
                }
            },
            localName: 'banner_list', //缓存数据键名
            list: [] //列表数据
        }
    },
    computed: {},
    methods: {
        goDetail(url) {
            if (url) {
                this.Util.YYBridge.do(
                    'openWindow',
                    { orientation: 0, url: url },
                    rs => {
                        // 打开后回调
                    }
                )
            } else {
                return
            }
        },
        getList() {
            let storeData =
                this.$store.getters.getCurrentQzStorageDataByKey(
                    this.localName
                ) || {} //获取store数据优先展示；如数据有更新再次覆盖
            this.list = storeData.list || []
            this.httpCfm.params.hash = storeData.hash || ''
            this.loading = this.list.length > 0 ? false : true
            this.$http.get(this.httpCfm.uri, { params: this.httpCfm.params }).then(res => {
                    let reData = res.data.data || [],
                        hash = res.data.hash || ''
                    this.list = [] 
                    setTimeout(()=>{
                        this.list = this.resetData(reData, hash)
                    },100)
                })
                .catch(data => {
                })
        },
        resetData(list, hash) {
            let data = {
                list: list,
                hash: hash
            }
            this.$store.dispatch('updateCurrentQzStorageDataByKey', {
                vue: this,
                key: this.localName,
                data: data
            })
            return list
        }
    },
    created() {
        this.getList()
    },
    mounted() {
        this.$eventbus.$on('updateCommonList.commonList', () => {
            this.getList()
        })
        this.$eventbus.$on('updateApplist.alllist', () => {
            this.getList()
        })
    },
}
</script>
<style scoped>
.banner-box>>>.swiper-container {
    overflow: hidden;
    border-radius: 20px;
    /* transform-style: preserve-3d; */
    /* transform:perspective(800px); */
    transform:rotate(0deg);
    position: relative;
    z-index: 2;
}
.banner-box>>>.swiper-wrapper{
    position: relative;
    z-index: 1;
}

.banner-box>>>.swiper-pagination-bullet{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(255,255,255,.4)
}
.banner-box>>>.swiper-pagination-bullet-active{
    background-color: #fff;
}

.banner-box>>>.swiper-container {
    overflow: hidden;
    border-radius: 20px;
    /* transform-style: preserve-3d; */
    /* transform:perspective(800px); */
    transform:rotate(0deg);
    position: relative;
    z-index: 2;
}
.banner-box>>>.swiper-pagination-bullet{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0px;
    transform: scale(0.5, 0.5)
}


</style>
<style lang="less" scoped>
.banner-box {
    background: #fff;
    overflow: hidden;
    transform-style: preserve-3d;
    transform:perspective(800px);
    transform:rotate(0deg);
    position: relative;
    z-index: 1;
    
    .radius{
        position: absolute;
        z-index: 3;
        width: 20px;height: 20px;line-height: 40px;display: block;text-align: center;
        background-image: radial-gradient(80px at 20px 0px, rgba(0,0,0,0) 20px, #FFF 20px);
    }
    .radius1{
        left: 0;
        bottom: -1px;
    }
    .radius2{
		transform: rotate(90deg);
        left: 0;
        top: 0;
        background-image: radial-gradient(80px at 20px 0px, rgba(0,0,0,0) 20px, #f5f5f5 20px);
        
    }
    .radius3{
		transform: rotate(180deg);
        right: 0;
        top: 0;
        background-image: radial-gradient(80px at 20px 0px, rgba(0,0,0,0) 20px, #f5f5f5 20px);
        
    }
    .radius4{
		transform: rotate(270deg);
        right: 0;
        bottom: -1px;
    }
    .swiper-pagination-bullets {
        bottom: 0;
    }
 
    .swiper-wrapper,.banner-swiper-slide{
        height: auto;
        margin: 0;
        padding: 0;
        font-size: 0;
    }
    .imgbox {
        width: 100%;
        overflow: hidden;
        img {
            width: 100%;
        }
    }
}
</style>

<template>
    <div class="wrapper">
        <app-header :title="title">
            <span slot="right">...</span>
        </app-header>

        <h2>{{$t("application.title")}}</h2>
        <router-link :to="{name:'detail'}">go to detail</router-link>
    </div>
</template>

<script>
import AppHeader from '../components/common/header'

export default {
    data(){
        return {
            title: this.$t('application.title')
        }
    },
    components:{
        AppHeader,
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            // init
        }
    }
}
</script>

<style scoped>
    .wrapper{
        margin: 0 20px;
    }
    h2{
        font-size: 22px;
    }
    a{
        color: rgb(152, 164, 241);
        font-size: 14px;
        text-decoration: none;
    }
</style>

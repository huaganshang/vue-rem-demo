<template>
    <router-view></router-view>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import * as types from './store/storage/mutations_types'

export default {
    name: 'app',
    data() {
        return {
            
        }
    },
    created(){
        this.init();
    },
    methods:{
        ...mapMutations({
            updateStorage: types.UPDATE_STORAGE
        }),
        ...mapActions({
            setUserInfo: 'setUserInfo'
        }),
        init(){
            this.updateStorage()
            this.setUserInfo({ vue: this }).then(rs => {
                this.hasUserInfo = true
            }).catch(error => {
                console.log(error)
            })
        }
    },
}
</script>

<style scoped>
</style>

<style scoped lang="less">
.header {
    color: #333;
    height: 88px;
    display: flex;
    background: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    font-size: 30px;
}
.item {
    flex: 1;
}
.left {
    text-align: left;
    .icon-arrow-left {
        color: #333 !important;
    }
}
.center {
    flex: 2;
    width: 100%;
    height: 100%;
    line-height: 100%;
    font-size: 0px;
    font-weight: 400;
    text-align: center;
    overflow: hidden;    
    text-overflow: ellipsis;
    white-space: nowrap;
    .title{
        display: block;
        width: 100%;
        height: 100%;
        line-height:  88px;
        font-size: 32px;
    }
}
.right {
    text-align: right;
}
.header-close {
    padding-left: 10px;
}
</style>

<template>
    <div class="header">
        <div class="item left">
            <slot name="left" slot-scope="props">
                <icon cls-name="arrow-left" @click.native="onClickBack"></icon>
            </slot>
        </div>
        <div class="item center">
            <slot name="center" slot-scope="props">
                <span class="title" v-text="title"></span>
            </slot>
        </div>
        <div class="item right">
            <slot name="right" slot-scope="props"></slot>
        </div>
    </div>
</template>

<script>
import Icon from '../../common/icon/index'
export default {
    components: {
        Icon
    },
    props: {
        title: {
            default: '标题'
        }
    },
    data() {
        return {}
    },
    methods: {
        onClickBack() {
            window.history.go(-1)
        }
    }
}
</script>

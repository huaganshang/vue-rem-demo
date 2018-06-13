<template>
    <transition :name="transition">
        <div class="loading" v-if="show">
            <div :class="classObject" class="maincontent">
                    <div class="loadingimg"></div>
                    <p class="content" v-if="!!text">{{text}}</p>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    props: {
        text: {
            type: String,
            default: ''
        }
    },
    computed: {
        classObject() {
            return {
                toast: true,
                'toast-default': !this.text,
                'toast-text': !!this.text
            }
        }
    }
}
</script>

<style lang="less" scoped>
.pos() {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.loading {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0,0);
    .pos();
    .mask {
        .pos();
        width: 100%;
        height: 100%;
    }
    .toast {
        .pos();
        top: 45%;
        left: 50%;
        z-index: 1001;
        width: 150px;
        height: 150px;
        font-size: 0;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0,0.75);
        text-align: center;
        color: #fff;
        border-radius: 10px;
        .icon {
            width: 50px;
            height: 50px;
            stroke-width: 0;
            stroke: currentColor;
            fill: currentColor;
            animation: animation-loading 1s steps(12, end) infinite;
        }
    }
    .toast-default {
        .icon {
            margin-top: 25px;
        }
    }
    .toast-text {
        // width: 80px;
        // height: 80px;
        .icon {
            margin-top: 30px;
        }
        .content {
            font-size: 24px;
            margin-top: 18px;
        }
    }
    .maincontent{
        padding:26px 0;
        .loadingimg{
            width: 60px;
            height: 60px;
            margin: 0 auto;
            animation: Loading 1s steps(12, end) infinite;
            background: transparent url("data:image/png;base64,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") no-repeat;
            background-size: 100%;
        }
    
    }
    @keyframes Loading{
        0% {
            transform: rotate3d(0, 0, 1, 0deg);
        }
        100% {
            transform: rotate3d(0, 0, 1, 360deg);
        }
    }
}
</style>

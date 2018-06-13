<template>
    <div class="wrapper">
        <app-header :title="title">
            <span slot="right">...</span>
        </app-header>
    </div>
</template>

<script>
import AppHeader from '../components/common/header'

export default {
    data() {
        return {
            title: 'abc'
        }
    },
    components: {
        AppHeader,
    },
    methods: {

    }
}
</script>

<style scoped>
</style>

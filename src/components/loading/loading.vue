<template>
    <div class="loading" v-if="isShow">
        loading...
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

let isShow = ref<boolean>(false)

const show = ()=>{
    isShow.value = true
}

const hide = ()=>{
    isShow.value = false
}

defineExpose({
    show,
    hide
})

</script>

<style lang='scss' scoped>
.loading {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #134857;
    opacity: 0.93;
    z-index: 10;
    color: #fff;
    font-size: 1.5em;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
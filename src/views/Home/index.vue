<template>
    <div class="app">
        Home
    </div>
    <el-button type="primary">click me</el-button>
</template>

<script setup lang='ts'>

import { ElMessage } from 'element-plus';
import { ref, reactive } from 'vue'

setTimeout(() => {
    ElMessage.error('hello world')
}, 2000);

</script>

<style lang='scss' scoped>
.app {
    width: 200px;
    height: 200px;
    background-color: $DIANQING;
    margin: 10px;
    color: #fff;
    text-align: center;
    line-height: 200px;
}
</style>
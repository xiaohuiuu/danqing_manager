<template>
    <el-container id="home">
        <!-- 侧边栏 -->
        <el-aside width="200px" class="aside">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical" background-color="#2b333e"
                text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
                <el-menu-item index="1">Processing Center</el-menu-item>
                <el-menu-item index="2">test</el-menu-item>
                <el-menu-item index="3">Info</el-menu-item>
                <el-menu-item index="4">Orders</el-menu-item>
            </el-menu>
        </el-aside>

        <el-container>
            <!-- 导航栏的区域 -->
            <el-header class="header">

            </el-header>
            <!-- 内容区 -->
            <el-main class="main">
                Main
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'


const activeIndex = ref('1')


const handleSelect = () => {
    console.log(233)
}

</script>

<style lang='scss' scoped>
#home {
    //color: $yinbai;
    color: #000;
    height: 100%;
}
.aside{
    background-color: #2b333e;
}
</style>
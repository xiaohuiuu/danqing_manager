<template>
    <div class="container">
        <div class="left">
            <div class="title">
                后台管理
            </div>
            <div class="img">
                <img src="../../assets/img/海豚小女孩.png" alt="">
            </div>
        </div>
        <div class="right">
            
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()

const login_click = ()=>{
    
}

</script>

<style lang='scss' scoped>
.container{
    width: 100%;
    height: 100%;
    display: flex;
    
    

    .left{
        width:35%;
        height: 100%;
        background-color: $CANGLAN;
        color: #fff;
        display: inherit;
        flex-direction: column;
        justify-content: space-around;

        .title{
            font-size: 30px;
            margin: 15px;
            text-align: center;
        }

        .img{


            img{
                width: 100%;
            
            }
        }
    }
    .right{
        flex: 1;
        height: 100%;
    }
}
</style>
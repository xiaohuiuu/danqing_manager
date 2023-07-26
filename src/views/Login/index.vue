<template>
    <div class="container">
        <div class="login">
            <div class="left">
                <div class="top">
                    <div>
                        丹青数据后台管理
                    </div>
                </div>
                <div class="input_box">
                    <el-form :model="user_info" class="form" size="large" :rules="rules" ref="form_instance">
                        <el-form-item class="input_item_username" prop="username">
                            <div class="label">电子邮件或用户名或手机号</div>
                            <el-input type="text" v-model="user_info.username"></el-input>
                        </el-form-item>
                        <el-form-item class="input_item_password" prop="password">
                            <div class="label">密码</div>
                            <el-input type="password" v-model="user_info.password" :show-password="showpwd"></el-input>
                            <!-- <div class="label forget">忘记密码？</div> -->
                        </el-form-item>
                        <el-form-item class="input_item_button">
                            <div class="label forget">忘记密码？</div>
                            <el-button type="primary" @click="login_click" class="button">登陆</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="submit_box">
                    <div class="label">没有账号? &nbsp;<span class="forget" @click="toRegister">注册</span></div>
                </div>
            </div>
            <div class="right">
                <div class="img">
                    <img src="../../assets/img/开通服务成功.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import http from '@/Api/http'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'


const form_instance = ref<FormInstance>()
interface UserInfo {
    username: string
    password: string
}
let user_info = reactive<UserInfo>({
    username: '',
    password: ''
})
//element plus校验规则
const rules = reactive<FormRules<UserInfo>>({
    username: [
        { required: true, message: '请输入账号', type: 'string' },
        { min: 3, max: 10, message: '账号长度3-10', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', type: 'string' },
    ]
})

let showpwd = ref(true)

const router = useRouter()




const login_click = () => {
    form_instance.value?.validate(async (validate) => {
        let res = await http({
            url: '/user/login',
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data:{
                username:user_info.username,
                password:user_info.password
            }
        })
        if(res.data.status == 'success'){
            ElMessage.success(res.data.message)
        }else{
            ElMessage.error(res.data.message)
        }
    })
}

const toRegister = () => {
    console.log('register')
    router.push('/register')
}

</script>

<style lang='scss' scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('http://localhost:3000/upload/1690351560614.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    color: $yinbai;
    user-select: none;



    .login {
        width: 900px;
        height: 470px;
        background-color: $gelan;
        display: flex;
        border-radius: 5px;
        overflow: hidden;
        opacity: 0.99;

        .left {
            width: 60%;
            height: 100%;
            display: inherit;
            flex-direction: column;

            .top {
                height: 25%;
                font-size: 28px;
                display: flex;
                justify-content: center;
                align-items: center;

                div {
                    font-family: '华文新魏';
                    text-align: center;
                }
            }

            .input_box {
                height: 50%;
                display: flex;
                justify-content: center;
                align-items: center;

                .form {
                    width: 85%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;

                    //align-items: center;
                    // .input_item_username {

                    // }

                    // .input_item_password {

                    // }

                    .input_item_button {
                        .button {
                            width: 100%;
                            font-size: 16px;
                        }
                    }
                }
            }

            .submit_box {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;

            }
        }

        .right {
            flex: 1;
            height: 100%;
            background-color: $qinghui;
            display: flex;
            justify-content: center;
            align-items: center;

            .img {
                width: 100%;

                img {
                    width: 100%;
                }
            }
        }
    }
}

.label {
    color: #baccd9;
}

.forget {
    color: $QINGLAN;
    transition: all 0.3s linear;

    &:hover {
        color: red;
        cursor: pointer;
    }
}
</style>
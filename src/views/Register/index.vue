<template>
  <div class="register">
    <div class="input_box">
      <el-form :model="registerInfo" class="form" size="large" ref="form_instance">
        <el-form-item class="input_item_username">
          <div class="label">请输入用户名</div>
          <el-input type="text" v-model="registerInfo.username"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="label">请输入密码</div>
          <el-input type="password" v-model="registerInfo.password" :show-password="showpwd"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="label">请确认密码</div>
          <el-input type="password" v-model="registerInfo.password2" :show-password="showpwd"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="label">请输入邮箱</div>
          <el-input type="text" v-model="registerInfo.email"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="label">请输入手机号</div>
          <el-input type="text" v-model="registerInfo.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import http from '@/Api/http'
import {ElMessage} from 'element-plus'

//是否显示密码
const showpwd = ref(false)

interface RegisterInfo {
  username: string,
  password: string,
  password2: string,
  email: string,
  phone: string
}

let registerInfo = reactive<RegisterInfo>({
  username: '',
  password: '',
  password2: '',
  email: '',
  phone: ''
})


const register = async()=>{
  //判断  如果两次密码输入不一致
  if(registerInfo.password != registerInfo.password2){
    ElMessage.error('密码不一致')
    return
  }
  const {username,password,email,phone} = registerInfo
  let res = await http({
    url:'/user/register',
    method:'POST',
    headers:{
      "Content-Type":"application/x-www-form-urlencoded"
    },
    data:{
      username,
      password,
      email,
      phone
    }
  })

  console.log(res)
  if(res.data.status == 'success'){
    ElMessage.success(res.data.message)
  }else{
    ElMessage.error(res.data.message)
  }

}

</script>

<style lang="scss" scoped>
.register {
  height: 100%;
  background-image: url('http://localhost:3000/upload/1690351560614.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $yinbai;

  .input_box {
    width: 600px;
    height: 800px;
    background-color: $qinghui;
  }
}
</style>
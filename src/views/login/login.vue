<template>
    <div style="display:flex; justify-content:center;">
       
        <div class="login-container">
             <img src="../../assets/logo.png">
             <br>
            <el-input placeholder="请输入用户名" v-model="username" clearable>
            </el-input>
            <el-input placeholder="请输入密码" v-model="password" clearable>
            </el-input>
            <el-button type="primary" @click="handleLogin">登录</el-button>
            <el-button type="primary" @click="handleLogin">忘记密码</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        handleLogin() {
            this.$router.push({ path: "home" });
        }
    }
};
</script>


<style scoped>
.login-container {
    width: 25%;
    align: center;
    margin-top:10%
}
.el-input {
    
    height: 47px;
    width: 100%;

    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 5px;
}
</style>

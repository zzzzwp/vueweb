<template>
    <div>
        <img src="../../assets/logo.png">
        <el-input placeholder="请输入用户名" v-model="username" clearable>
        </el-input>
        <el-input placeholder="请输入密码" v-model="password" clearable>
        </el-input>
         <el-button type="primary" @click="handleLogin" >登录</el-button>
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
    methods:{
        handleLogin(){
            this.$router.push({path: 'home'})
        }
    }
};
</script>


<style scoped>


</style>

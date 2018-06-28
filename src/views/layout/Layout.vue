<template>
    <el-container    >
        <el-header >
            <Header></Header>
           
        </el-header>
        <el-container style=" position: absolute; top:60px; bottom:0;width:100%;">

            <el-aside style="width: 200px;">
                <Sidebar></Sidebar>
            </el-aside>

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Header from "./components/header/header";


export default {
    components: {
        Sidebar,
        Header
    }
};
</script>


<style scoped >
.el-header {
    background-color:#409EFF;
    color: #333;
    /* text-align: center; */
    line-height: 60px;
    padding: 0 0px;

}

.el-aside {
    background-color: #fff;
    color: #409EFF;
    height:auto !important;
    border: none;
    /* text-align: center; */
    /* line-height: 200px; */
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    /* text-align: center; */
    /* line-height: 160px; */
    height: 100%;
}
</style>

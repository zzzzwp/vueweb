<template>
    <el-container>
        <el-header>Header</el-header>
        <el-container>

            <el-aside style="width: 200px;">
                <Sidebar></Sidebar>
            </el-aside>
            
            
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
    components:{
        Sidebar
     
    }


};
</script>


<style >
.el-header{
    background-color: rgb(182, 179, 209);
    color: #333;
    /* text-align: center; */
    line-height: 60px;
    padding: 0 0px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    /* text-align: center; */
    /* line-height: 200px; */

}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
   
}



</style>

<template>
    <div style="width:100%;height:60px;" class="boxdiv" >
        <div class="leftdiv">
            <img src="../../../../assets/logo.png">

        </div>
        <div class="rightdiv">
            
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <el-button size="small">操作</el-button>
                    <i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item class="clearfix">
                        Home
                        <el-badge class="mark" :value="12" />
                    </el-dropdown-item>
                    <el-dropdown-item class="clearfix">
                        LogOut
                        <el-badge class="mark" :value="3" />
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

        </div>

    </div>

</template>

<script>
export default {};
</script>


<style scoped>
.boxdiv{
    display: flex;
    justify-content: flex-end;
}

img {
    height: 60px;
    margin-left: 10px;
}

.leftdiv {
    height: 60px;
    width: 30%;
    /* float: left; */

}
.rightdiv {
    height: 60px;
    width: 70%;
    /* float: left; */
    
}

.el-dropdown{
    margin-left: 90%;;
}

.item {
  margin-top: 10px;
  margin-right: 40px;
}


</style>

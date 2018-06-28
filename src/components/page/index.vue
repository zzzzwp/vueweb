<template>
    <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" 
            :current-page="currentPage4" :page-sizes="[10, 20, 50, 100]" 
            :page-size="10" layout="total, sizes, prev, pager, next, jumper" 
            :total="100">
            </el-pagination>
    </div>

</template>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        //console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        //console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage4: 1
      };
    }
  }
</script>
<style scoped>
.el-pagination{
    padding-top: 2%;
    /* margin-left: 50%; */
    /* margin-right: 5%; */
    /* display: inline; */
}
</style>

<template>

  <div class="max">
    <div class="top">

      <!--<router-link to="/list/addad" class="left">您的地址 </router-link>-->
      <div class="left">您的地址</div>
      <!--<router-link to="/list/add">-->
        <!--<div class="el-icon-plus"></div>-->
      <!--</router-link>-->
    </div>
    <el-table
      :data="arr"
      style="width: 100%">

      <el-table-column
        label="省份"
        width="100"
        align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.provice }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="市"
        width="100"
        align="center">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{scope.row.city}}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="县区"
        width="100"
        align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.town}}</span>

        </template>
      </el-table-column>

      <el-table-column
        label="具体地址"
        width="250"
        align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.address}}</span>

        </template>
      </el-table-column>

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="del(scope.row.id)">删除
          </el-button>
        </template>
      </el-table-column>


    </el-table>
  </div>
</template>
<script>
  export default{
    name: 'list-address',
    data(){
      return {
        arr: [],
      }
    },

    created(){
      if (!localStorage.users) {
        return
      }
      let users = JSON.parse(localStorage.users)
      let id = users.id;
      this.$http.get('/api/index/list/address?id=' + id).then(res => {
//        console.log(res);
        this.arr = res.body;
//        console.log(this.arr);


      })


    },
    methods: {
      del(id){
        this.$http.get('api/index/list/del?id=' + id).then(res => {
          if (res.body == 'ok') {
            this.$message({
              message: '删除成功',
              type: 'success',
              center: true
            });
          } else {
            this.$message.error('删除失败')
          }
          this.arr.forEach((val, index) => {
            if (val.id == id) {
              this.arr.splice(index, 1)
            }

          })


        })
      }

    },

  }
</script>
<style scoped lang='scss'>
  .max {
    .top {
      width: 100%;
      height: 50px;
      box-sizing: border-box;
      padding: 0 37px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        font-size: 18px;
        font-weight: 600;
        color: #A3A5A3;
        text-align: center;
      }
      .el-icon-plus{
        font-size: 20px;
        font-weight: 600;
      }
      .right {
        font-weight: bold;
        font-size: 20px;
      }
    }

  }
</style>

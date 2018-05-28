<template>

  <div class="max">
    <div class="top">

      <a class="left">您的地址 </a>
      <div     class="el-icon-plus"> </div>
    </div>
    <el-table
      :data="arr"
      style="width: 100%">

      <el-table-column
        label="省份"
        width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.provice }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="市"
        width="100">
        <template slot-scope="scope">

          <span style="margin-left: 10px">{{scope.row.city}}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="县区"
        width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px" >{{scope.row.town}}</span>

        </template>
      </el-table-column>

      <el-table-column
        label="具体地址"
        width="250">
        <template slot-scope="scope">
          <span style="margin-left: 10px" >{{scope.row.address}}</span>

        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="del(scope.row.id)">删除</el-button>
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
        arr:[]
      }
    },

    created(){
      if (!localStorage.users) {
        return
      }
      let users = JSON.parse(localStorage.users)
      let id =users.id;
      this.$http.get('/api/index/list/address?id='+id).then(res=>{
//        console.log(res);
        this.arr=res.body;
      })
    },
    methods:{
      del(id){
        this.$http.get('api/index/list/del?id='+id).then(res=>{
          if(res.body=='ok'){
            alert('删除成功')
          }else{
            alert('删除失败')
          }
          this.arr.forEach((val,index)=>{
            if(val.id==id){
              this.arr.splice(index,1)
            }

          })


        })
      }

    }
  }
</script>
<style scoped lang='scss'>
  .max{
    .top{
      width:100%;
      height:50px;
      box-sizing: border-box;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left{
        font-size: 25px;
        font-weight: bold;

      }
      .right{
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
</style>

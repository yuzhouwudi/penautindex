<template>
  <div class="container">
    <div class="top-img">
      <img src="../assets/img/2.png" alt="">
    </div>

    <div class="jin">
      <el-steps :active="active" finish-status="success">
        <el-step title="查看购物车"></el-step>
        <el-step title="查看订单"></el-step>
        <el-step title="付款完成购买"></el-step>
      </el-steps>

    </div>

    <div class="jiage">
      <ul v-if="arr.length">

        <li :key="item.id" v-for="item in arr">
          <span>

          </span>
          <span>
             <img :src="item.img" alt="">
          </span>
          <span>
            <p>{{item.name}}</p>
            <p>种类：坚果 重量：300g</p>
          </span>
          <span>RMB  {{item.price}}</span>
          <span>
              <el-input-number v-model="item.count" @change="handleChange" :min="1" :max="10" label="描述文字"
                               :key="item.id"></el-input-number>
            </span>
          <span>RMB  {{(item.count * item.price).toFixed(2)}}</span>
          <div class="x" @click="del(item)">x</div>
        </li>


      </ul>

      <div class="none" v-else>暂无添加的商品，去添加购物车吧</div>

      <div class="fu" v-if="arr.length">
        <span>商品价格总计{{total.price}}</span>
        <span>共选择{{total.sum}}件商品</span>
        <div class="anniu">
          <el-row>
            <el-button type="success" round @click="next">提交订单</el-button>
          </el-row>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
  export default {
    name: "car",
    data() {
      return {
        name: '',
        active: 0,
        num1: 1,
        checked: true,
        arr: [],
        all: '',
        checkAll: false,
        checkedCities: [],
        isIndeterminate: true
      };
    },
    created(){
      if (!localStorage.users) {
        return
      }
      let users = JSON.parse(localStorage.users)
      let uid = users.id;
      this.$http.get('/api/index/buycar/display?uid=' + uid).then(res => {
        this.arr = res.body;
//        console.log(res.body)
      })
    },
    updated(){
      let total = 0;
      this.arr.forEach(function (val, index) {
        total += val.count * val.price
      });
      this.all = total;
    },
    computed: {
      total(){
        let sum = 0;
        let price = 0;
        this.arr.forEach(function (val, index) {
          price += Number((val.price * val.count))
          sum += val.count
        })
        price = price.toFixed(2)
        return {sum, price}
      }
    },


    methods: {
      next() {
//        console.log(this.arr);
        if(!this.arr.length){
          this.$message({
            message: '购物车没有商品',
            type: 'warning'
          });
          return
        }
        let obj = JSON.stringify(this.arr)
        this.$http.post('/api/index/list/addlist', obj, {
          headers: {
            "content-type": "application/json"
          }
        }).then(res => {
//          console.log(res);
          if (res.body == 'ok') {
            this.$message({
              message: '提交成功',
              type: 'success'
            });
            this.arr.splice(0,this.arr.length);

            let users = JSON.parse(localStorage.users)
            let uid = users.id;

            this.$http.get('/api/index/list/delbuycar?id=' + uid).then(res => {
//              console.log(res);
//              if (res.body.affectedRows === 1) {
//                this.$message({
//                  message: '删除成功',
//                  type: 'success'
//                });
//              } else {
//                this.$message.error('删除失败')
//              }
            })

          } else {
            this.$message.error('提交失败')
          }
        })
//        this.$router.push('/list/right')
      },
      del(item){
        let index = this.arr.findIndex(val => val.id === item.id)
        let id = (this.arr.find((val, ind) => ind == index)).id
//        console.log(index,id);
        this.arr.splice(index, 1)

        this.$http.get('/api/index/buycar/delbuycar?id=' + id).then(res => {
          if (res.body.affectedRows === 1) {
            this.$message({
              message: '删除成功',
              type: 'success'
            });
          } else {
            this.$message.error('删除失败')
          }
        })
      },

      handleChange(value) {
//        console.log(value);
        this.num1 = value
      },

    },


//        这个别瞎删，是session存上了之后的判断
//    beforeRouteEnter(to, from, next){
//      next(vm => {
//        fetch('/api/index/sign/session').then(res=>res.text()).then(res => {
//          console.log(res);
//          if (res == 'n') {
//            vm.$message.error('请先登录')
////           vm.$router.push('/')
//          } else {
//            vm.name = res
//          }
//        })
//      })
//    }
  }
</script>

<style scoped lang="scss">

  .container {
    width: 1200px;
    height: auto;
    margin: 0 auto;
    .top-img {
      width: 100%;
      height: auto;
    }
    .jin {
      width: 80%;
      height: 150px;
      margin-left: 10%;
      margin-top: 50px;
    }
    .jiage {
      width: 100%;
      height: auto;

      ul {
        width: 100%;
        height: 100%;
        li {
          width: 1000px;
          height: 150px;
          margin: 0 auto;
          span:nth-child(1) {
            display: block;
            width: 100px;
            float: left;
            margin-top: 60px;
            /*margin-left: 20px;*/
          }
          span:nth-child(2) {
            display: block;
            width: 100px;
            overflow: hidden;
            float: left;
            margin-top: 30px;
            margin-left: 10px;
            img {
              width: 100%;
            }
          }
          span:nth-child(3) {
            display: block;
            width: 200px;
            float: left;
            margin-top: 59px;
            margin-left: 20px;
          }
          span:nth-child(4) {
            display: block;
            width: 100px;
            float: left;
            margin-top: 60px;
            margin-left: 20px;
          }
          span:nth-child(5) {
            display: block;
            width: 200px;
            float: left;
            margin-top: 50px;
            margin-left: 30px;
          }
          span:nth-child(6) {
            display: block;
            width: 100px;
            float: left;
            margin-top: 60px;
            margin-left: 30px;
          }
          .x {
            width: 20px;
            height: 20px;
            float: left;
            font-size: 15px;
            text-align: center;
            line-height: 18px;
            border-radius: 50%;
            border: lightcoral 1px solid;
            margin-top: 55px;
            margin-left: 40px;
          }
        }
      }
      .none{
        width: 100%;
        height: 180px;
      }
      .fu {
        width: 100%;
        height: 150px;
        margin-bottom: 20px;
        margin-top: 150px;
        /*background: #ccc;*/
        text-align: right;
        span:nth-child(1) {
          display: block;
          width: 300px;
          float: right;
          font-size: 25px;
          margin-right: 50px;
        }
        span:nth-child(2) {
          display: block;
          width: 300px;
          float: right;
          font-size: 25px;
        }
        .anniu {
          width: 1000px;
          height: 50px;
          float: right;
          margin-top: 40px;
          margin-right: 60px;
        }
      }
    }

    .tou {
      width: 1200px;
      height: 150px;
      margin: 20px auto 0;
      position: relative;
      .pic {
        width: 251px;
        margin: 0 auto;
        position: relative;
        img {
          width: 100%;
        }
        h1 {
          position: absolute;
          top: 45px;
          left: 124px;
          color: #fff;
          font-size: 20px;
        }
      }
    }

    .nuts {
      width: 1200px;
      height: auto;
      margin: 80px auto 50px;
      display: flex;
      li {
        width: calc(100% / 4);
        height: 437px;
        img {
          width: 100%;
        }
        h1 {
          font-size: 20px;
          color: #393535;
        }
        p {
          font-size: 18px;
          color: #787070;
        }
        h2 {
          margin-top: 10px;
          font-size: 22px;
          color: #c30827;
          span {
            font-size: 16px;
            color: #000;
            margin-left: 10px;
          }
        }
      }
      li:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 10px 10px rgba(217, 217, 217, 0.5);
        transition: 0.5s;
      }
    }
  }


</style>

<template>
  <div class="container">
    <div class="top-img">
      <img src="../assets/img/2.png" alt="">
    </div>

    <div class="jin">
      <el-steps :active="active" finish-status="success">
        <el-step title="查看清单"></el-step>
        <el-step title="填写订单"></el-step>
        <el-step title="付款完成购买"></el-step>
      </el-steps>

    </div>

    <div class="jiage">
      <ul>
        <li v-for="item in arr">
          <span>
            <template>
              <el-checkbox v-model="checked"></el-checkbox>   <!-- `checked` 为 true 或 false -->
            </template>
          </span>
          <span>
            <img src="../assets/img/5_03.png" alt="">
          </span>
          <span>
            <p>{{item.name}}</p>
            <p>种类：坚果 重量：300g</p>
          </span>
          <span>RMB  {{item.price}}</span>
          <span>
            <template>
                <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            </template>
          </span>
          <span>RMB  {{item.count * item.price}}</span>
          <div class="x">x</div>
        </li>

      </ul>
      <div class="fu">
        <!--<span>商品价格总计109.00</span>-->
        <!--<span>共选择3件商品</span>-->
        <div class="anniu">
          <el-row>
            <el-button type="success" round @click="next">去结账</el-button>
          </el-row>
        </div>
      </div>
    </div>

    <div class="tou">
      <div class="pic">
        <img src="../assets/img/pic.png" alt="">
        <h1>坚果专区</h1>
      </div>
    </div>

    <ul class="nuts">
      <li>
        <img src="../assets/img/4_03.png" alt="">
        <h1>奶油腰果</h1>
        <p>双重美味浓郁奶香</p>
        <h2>66<span>RMB</span></h2>
      </li>
      <li>
        <img src="../assets/img/4_05.png" alt="">
        <h1>奶油腰果</h1>
        <p>双重美味浓郁奶香</p>
        <h2>66<span>RMB</span></h2>
      </li>
      <li>
        <img src="../assets/img/4_07.png" alt="">
        <h1>奶油腰果</h1>
        <p>双重美味浓郁奶香</p>
        <h2>66<span>RMB</span></h2>
      </li>
      <li>
        <img src="../assets/img/4_09.png" alt="">
        <h1>奶油腰果</h1>
        <p>双重美味浓郁奶香</p>
        <h2>66<span>RMB</span></h2>
      </li>
    </ul>

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
        arr: []
      };
    },
    created(){
      let uid = 1;
      this.$http.get('/api/index/buycar/display?uid=' + uid).then(res => {
        this.arr = res.body;
//        console.log(res.body)
      })
    },


    methods: {
      next() {
        if (this.active++ > 1) this.active = 0;
      },
      handleChange(value) {
        console.log(value);
      },

    },

//        这个别瞎删，是session存上了之后的判断
//    beforeRouteEnter(to, from, next){
//      next(vm => {
//        fetch('/api/index/sign/session').then(res=>res.text()).then(res => {
//          console.log(res);
//          if (res == 'n') {
//            vm.$message.error('请先登录')
////                        vm.$router.push('/')
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
            float: left;
            margin-top: 30px;
            margin-left: 10px;
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
      .fu {
        width: 100%;
        height: 150px;
        margin-bottom: 20px;
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
          top: 145px;
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

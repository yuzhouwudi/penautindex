<template>
  <div class="box">
    <div class="bread">
      <router-link to="/" class="h1">首页 / </router-link>
      <span>个人中心</span>
    </div>
    <div class="big">
      <div class="big_left">
        <p class="first">交易管理</p>
        <ul class="mine">
          <li>
            <router-link to="/list/right" class="active">我的订单</router-link>
          </li>
          <li class="first">个人信息管理</li>
          <li>
            <router-link to="/list/person">编辑个人资料</router-link>
          </li>
          <li>
            <router-link to="/list/address" ref="address">地址管理</router-link>
          </li>
          <li>
            <router-link to="/list/add" >新增地址</router-link>
          </li>
        </ul>
      </div>
      <div id="right">
        <router-view></router-view>
      </div>

    </div>


  </div>
</template>
<script>
  export default {
    data(){
      return {
        active: 0,

      }
    },
    created(){


    },
    methods: {
//      mine(e){
//        let mine = this.$refs.mine.querySelectorAll('a')
//        mine.forEach(val => {
//          val.classList.remove('active')
//          e.target.classList.add('active')
//        })
//      },

    },


  }
</script>
<style lang="scss">
  .box {
    width: 1200px;
    height: auto;
    margin: 0 auto;
    #right {
      min-height: 500px;
    }
    .bread {
      width: 1100px;
      margin: 0 auto;
      height: 60px;
      line-height: 60px;
      text-align: left;
      font-weight: 400;

      .h1 {
        font-size: 18px;
        color: #9d9d9d;
      }
      span {
        font-size: 16px;
        color: #bcbcbc;
        font-weight: 400;
      }

    }

    .big {
      width: 1100px;
      height: auto;
      margin: 20px auto 60px;
      display: flex;

      .big_left {
        width: 15%;
        height: 300px;
        border: 1px solid #000;
        margin-right: 30px;
        p {
          width: 132px;
          height: 35px;
          margin: 20px auto 10px;
          background: #ef4e4e;
          color: #fff;
          line-height: 35px;
          font-size: 15px;

        }
        .mine {
          width: 132px;
          height: auto;
          /*background: pink;*/
          margin: 0 auto 20px;
          .first {
            width: 100%;
            height: 35px;
            background: #ef4e4e;
            font-size: 16px;
            color: #fff;
            line-height: 35px;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          li > a {
            width: 100%;
            height: 40px;
            background: #fff;
            font-size: 16px;
            color: #585858;
            line-height: 35px;
          }
          a.router-link-active {
            color: #ef4e4e;
          }
        }
      }
      #right {
        width: 80%;
      }

    }

    .tou {
      width: 1200px;
      height: 150px;
      margin: 100px auto 0;
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
          top: 44px;
          left: 124px;
          color: #fff;
          font-size: 20px;
        }
      }
    }

    .nuts {
      width: 1200px;
      height: auto;
      margin: 0 auto 50px;
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

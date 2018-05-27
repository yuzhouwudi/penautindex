<template>
  <div class="big_right">
    <div class="right_top">
      <ul class="xuan" ref="xuan">
        <li @click="xuan($event)">
          <router-link to="" class="active">现有订单</router-link>
        </li>
        <li @click="xuan($event)">
          <router-link to="">成功订单</router-link>
        </li>
        <li @click="xuan($event)">
          <router-link to="">已取消订单</router-link>
        </li>
      </ul>
      <div class="top_col">
        <p>商品信息</p>
        <ul class="col_right">
          <li>单价（元）</li>
          <li>数量</li>
          <li>实付款</li>
          <li>订单状态</li>
          <li>编辑</li>
        </ul>
      </div>
    </div>
    <div class="right_bot" v-if="flag">
      <div class="time">
        <p>订单编号: 1769816226</p>
        <p>下单时间：2017-12-01 10:09:53</p>
      </div>
      <div class="goods">
        <div class="tu">
          <img src="../assets/img/goods1.png" alt="">
        </div>
        <div class="desc">
          <p>坚果核桃</p>
          <p>MEI HUO YILP</p>
          <div class="taste">奶油味</div>
        </div>
        <ul class="goods_li">
          <li>56.00</li>
          <li>*1</li>
          <li>56.00</li>
          <!--<li>交易取消<br>交易详情</li>-->
          <!--<li>删除订单</li>-->
        </ul>
      </div>
    </div>
    <div class="none" v-if="!flag">
      暂无此类订单
    </div>
  </div>
</template>
<script>
    export default{
        name: 'list-right',
        data(){
            return {
              flag:true
            }
        },
      methods:{
        xuan(e){
          let xuan = this.$refs.xuan.querySelectorAll('a')
          xuan.forEach(val => {
            val.classList.remove('active')
            e.target.classList.add('active')
          })
        },
      }
    }
</script>
<style scoped lang='scss'>
  .big_right {
    width: 976px;
    height: auto;
    .right_top {
      width: 100%;
      height: 130px;
      overflow: hidden;
      position: relative;
      .xuan {
        margin-top: 20px;
        margin-left: 96px;
        display: flex;
        li > a {
          display: block;
          width: 120px;
          height: 57px;
          background: #ef4e4e;
          margin-right: 5px;
          border-radius: 10px;
          color: #fff;
          font-size: 18px;
          text-align: center;
          line-height: 57px;
          cursor: pointer;
        }
        a:hover {
          transform: translateY(-10px);
          transition: 0.5s;
        }
        a.active {
          margin-top: -20px;
          transition: 0s;
          transform: translateY(10px)
        }
      }
      .top_col {
        width: 100%;
        height: 57px;
        background: #000;
        position: absolute;
        top: 65px;
        left: 0;
        /*z-index: 300;*/
        p {
          font-size: 18px;
          color: #c2c2c2;
          text-align: left;
          line-height: 57px;
          margin-left: 30px;
        }
        .col_right {
          width: 600px;
          height: 57px;
          float: right;
          position: absolute;
          top: 0;
          right: 0;
          /*z-index: 999;*/
          display: flex;
          li {
            width: 120px;
            height: 57px;
            line-height: 57px;
            color: #c2c2c2;
            font-size: 18px;
          }
        }
      }
    }
    .right_bot {
      width: 100%;
      height: auto;
      .time {
        width: 100%;
        height: 64px;
        p {
          font-size: 16px;
          color: #9d9d9d;
          line-height: 64px;
          text-align: left;
          margin-left: 30px;
          float: left;
        }
      }
      .goods {
        display: flex;

        .tu {
          width: 157px;
          img {
            width: 100%;
          }
        }
        .desc {
          margin-left: 20px;
          width: 200px;
          height: 100%;
          p {
            margin-top: 54px;
            text-align: left;
            font-size: 18px;
          }
          p:nth-child(2) {
            margin-top: 12px;
            font-size: 16px;
          }
          .taste {
            margin-top: 16px;
            width: 70px;
            height: 26px;
            font-size: 18px;
            color: #000;
            border: 1px solid #ef4e4e;
          }
        }
        .goods_li {
          width: 600px;
          height: 57px;
          float: right;
          display: flex;
          li {
            width: 120px;
            height: 172px;
            /*line-height: 178px;*/
            color: #000;
            font-size: 16px;
            margin-top: 90px;
          }
          li:nth-child(3) {
            color: #fd87ae;
          }
        }
      }
      .goods:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 5px 5px rgba(217, 217, 217, 0.5);
        transition: 0.5s;
      }
    }
    .none{
      margin: 50px;
      font-size: 20px;
      font-weight: 600;
    }
  }
</style>

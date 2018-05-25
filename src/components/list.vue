<template>
<div class="box">
   <div class="bread">
      <h1>首页/所有商品/<span>个人中心</span></h1><span></span>
   </div>
  <div class="big">
     <div class="big_left">
        <p>交易管理</p>
        <ul class="mine">
           <div>我的订单</div>
           <li>我的订单</li>
           <li>我的购物车</li>
        </ul>
       <ul class="mine">
         <div>个人信息管理</div>
         <li>编辑个人资料</li>
         <li>账号安全</li>
         <li>地址管理</li>
       </ul>
     </div>
    <div class="big_right">
      <div class="right_top">
        <ul class="xuan">
          <li>现有订单</li>
          <li>成功订单</li>
          <li>已取消订单</li>
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
      <div class="right_bot">
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
            <li>交易取消<br>交易详情</li>
            <li>删除订单</li>
          </ul>
        </div>
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
        data(){
            return {}
        },
        created(){

        }
    }
</script>
<style lang="scss">
.box{
  width: 1200px;
  height: auto;
  margin: 0 auto;
  .bread{
    width: 100%;
    height: 60px;
    h1{
      font-size: 20px;
      color: #9d9d9d;
      line-height: 60px;
      text-align: left;
      font-weight: 400;
      span{
        font-size: 20px;
        color: #bcbcbc;
        font-weight: 400;
      }
    }
  }

  .big{
    width: 100%;
    height: auto;
    margin-top: 20px;
    display: flex;
    .big_left{
      width: 182px;
      height: auto;
      border: 1px solid #000;
      margin-right: 30px;
      p{
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 15px;
        color: #797979;
      }
      .mine{
        width: 132px;
        height: auto;
        background: pink;
        margin: 0 auto 20px;
        div{
          width: 100%;
          height: 35px;
          background: #ef4e4e;
          font-size: 16px;
          color: #fff;
          line-height: 35px;
        }
        li{
          width: 100%;
          height: 40px;
          background: #fff;
          font-size: 16px;
          color: #585858;
          line-height: 35px;
        }
      }
    }
    .big_right{
      width: 976px;
      height: auto;
      .right_top{
        width: 100%;
        height: 130px;
        overflow: hidden;
        position: relative;
        .xuan{
          margin-top: 20px;
          margin-left: 96px;
          display: flex;
          li{
            width: 120px;
            height: 57px;
            background: #ef4e4e;
            margin-right: 5px;
            border-radius: 10px;
            color: #fff;
            font-size: 18px;
            text-align: center;
            line-height: 57px;
          }
          li:hover{
            transform: translateY(-10px);
            transition: 0.5s;
          }
        }
        .top_col{
          width: 100%;
          height: 57px;
          background: #000;
          position: absolute;
          top: 65px;
          left: 0;
          /*z-index: 300;*/
          p{
            font-size: 18px;
            color: #c2c2c2;
            text-align: left;
            line-height: 57px;
            margin-left: 30px;
          }
          .col_right{
            width: 600px;
            height: 57px;
            float: right;
            position: absolute;
            top: 0;
            right: 0;
            /*z-index: 999;*/
            display: flex;
            li{
              width: 120px;
              height: 57px;
              line-height: 57px;
              color: #c2c2c2;
              font-size: 18px;
            }
          }
        }
      }
      .right_bot{
        width: 100%;
        height: auto;
         .time{
           width: 100%;
           height: 64px;
           p{
             font-size: 16px;
             color: #9d9d9d;
             line-height: 64px;
             text-align: left;
             margin-left: 30px;
             float: left;
           }
         }
        .goods{
          display: flex;

           .tu{
             width: 157px;
             img{
               width: 100%;
             }
           }
           .desc{
              margin-left: 20px;
              width: 200px;
              height: 100%;
             p{
               margin-top: 54px;
               text-align: left;
               font-size: 18px;
             }
             p:nth-child(2){
               margin-top: 12px;
               font-size: 16px;
             }
             .taste{
               margin-top: 16px;
               width: 70px;
               height: 26px;
               font-size: 18px;
               color: #000;
               border: 1px solid #ef4e4e;
             }
           }
          .goods_li{
            width: 600px;
            height: 57px;
            float: right;
            display: flex;
            li{
              width: 120px;
              height: 172px;
              /*line-height: 178px;*/
              color: #000;
              font-size: 16px;
              margin-top: 90px;
            }
            li:nth-child(3){
              color: #fd87ae;
            }
          }
        }
        .goods:hover{
          transform: translateY(-5px);
          box-shadow: 0 5px 5px 5px rgba(217,217,217,0.5);
          transition: 0.5s;
        }
      }
    }
  }

  .tou{
    width: 1200px;
    height: 150px;
    margin: 100px auto 0 ;
    position: relative;
    .pic{
      width: 251px;
      margin: 0 auto;
      position: relative;
      img{
        width: 100%;
      }
      h1{
        position: absolute;
        top:44px;
        left: 124px;
        color: #fff;
        font-size: 20px;
      }
    }
  }

  .nuts{
    width: 1200px;
    height: auto;
    margin: 0 auto 50px;
    display: flex;
    li{
       width: calc(100%/4);
       height: 437px;
      img{
        width: 100%;
      }
      h1{
        font-size: 20px;
        color: #393535;
      }
      p{
        font-size: 18px;
        color: #787070;
      }
      h2{
        margin-top: 10px;
        font-size: 22px;
        color: #c30827;
        span{
          font-size: 16px;
          color: #000;
          margin-left: 10px;
        }
      }
    }
    li:hover{
      transform: translateY(-10px);
      box-shadow: 0 10px 10px 10px rgba(217,217,217,0.5);
      transition: 0.5s;
    }
  }
}
</style>

<template>
  <div class="max">
    <div class="banner">
    </div>
    <div class="mianbao">
      <router-link to="">首页</router-link>
      <span>/</span>
      <router-link to="">产品详情</router-link>
    </div>
    <div class="img">
      <img src="../assets/img/3_03.png" alt="">
    </div>
    <div class="detail">
      <div class="left">
        <div class="tu1">
          <img :src="img2.url" alt="">
        </div>
        <div class="tu2">
          <img :src="img3.url" alt="">
        </div>
      </div>
      <div class="mid">
        <div class="tupian">
          <img :src="img.url" alt="">
        </div>

      </div>
      <div class="right">

        <div class="righttop">
          <div class="top1"> 【官网】{{data.name}}</div>
          <div class="top2">
            <p>{{data.des}}</p>
          </div>

          <div class="top3">
            {{data.price}} <span>RMB</span>
          </div>
          <div class="top4">本店99包邮</div>
          <div class="top5">
            <div class="top51">
              月销量： <span>19087</span>
            </div>
            <div class="shu">|</div>
            <!--<div class="top52">-->
            <!--累计评价： <span>19087</span>-->
            <!--</div>-->
          </div>
        </div>
        <div class="rightbot">
          <div class="a">
            <span> 请选择商品数量</span>
            <button @click="count--">-</button>
            <div v-model="count"> {{count}}  </div>
            <button @click="count++">+</button>
          </div>
          <div class="b">
            <a class="buycar" @click="addbuycar(data)"> 加入购物车 </a>
            <a class="buy"> 立即购买 </a>
          </div>
        </div>
      </div>
    </div>

    <div class="img">
      <img src="../assets/img/3_03.png" alt="">
    </div>


    <div class="detaila">
      <img src="../assets/img/111.png" alt="">
    </div>


    <div class="img">
      <img src="../assets/img/3_03.png" alt="">
    </div>

    <div class="detaila">
      <img src="../assets/img/222.png" alt="">
    </div>


    <div class="img">
      <img src="../assets/img/3_03.png" alt="">
    </div>

    <div class="detaila">
      <img src="../assets/img/333.png" alt="">
    </div>

    <div class="img">
      <img src="../assets/img/3_03.png" alt="">
    </div>

    <div class="detaila">
      <img src="../assets/img/444.png" alt="">
    </div>
    <div class="iimg">
      <img src="../assets/img/3_03.png" alt="">
    </div>


    <ul class="bottom">
      <li>
        <div class="imgtop">
          <img src="../assets/img/555_11.png" alt="">
        </div>
        <div class="imgbot">
          <span> 奶油腰果</span>
          <p>双重美味浓醇奶香</p>
          <div>
            <div> 66<span>RMB </span></div>
            <button> BUY</button>
          </div>
        </div>
      </li>
      <li>
        <div class="imgtop">
          <img src="../assets/img/555_11.png" alt="">
        </div>
        <div class="imgbot">
          <span> 奶油腰果</span>
          <p>双重美味浓醇奶香</p>
          <div>
            <div> 66<span>RMB </span></div>
            <button> BUY</button>
          </div>
        </div>
      </li>
      <li>
        <div class="imgtop">
          <img src="../assets/img/555_11.png" alt="">
        </div>
        <div class="imgbot">
          <span> 奶油腰果</span>
          <p>双重美味浓醇奶香</p>
          <div>
            <div> 66<span>RMB </span></div>
            <button> BUY</button>
          </div>
        </div>
      </li>
    </ul>

  </div>


</template>
<script>
  export default {
    data(){
      return {

        count: 0,
        data: '',
        img: {},
        img2: {},
        img3: {}
      }
    },

    created(){
      let id = this.$route.query.id
      this.$http.get('/api/index/hot/new?id=' + id).then(res => {
        let aa = res.body [0]
        aa.img = JSON.parse(aa.img)
        this.img = aa.img[0]
        this.img2 = aa.img[1]
        this.img3 = aa.img[2]
        this.data = aa
      })
    },

    methods: {
      addbuycar(data){
        if (!localStorage.users) {
          this.$message.error('请先登录')
          return
        }
        let users = JSON.parse(localStorage.users)

        let obj = {
          name: data.name,
          count: this.count,
          pid: data.id,
          img: data.img[0].url,
          uid: users.id,
          price: data.price
        }

        this.$http.post('/api/index/buycar/addbuycar', obj, {
          headers: {
            "content-type": "application/json"
          }
        }).then(res => {
          if (res.body=='ok') {
            this.$message({
              message: '添加成功',
              type: 'success'
            });
          }else{
            this.$message.error('添加失败')
          }
        })

      }

    }

  }
</script>

<style scoped lang="scss">
  .max {
    margin: 0 auto;
    width: 1200px;
    height: auto;
    .banner {
      width: 100%;
      height: 320px;
      background-image: url("../assets/img/banner(2)_03.png");
      background-size: cover;
    }
    .mianbao {
      height: 96px;
      line-height: 96px;
      font-size: 14px;
      color: #9d9d9d;
      display: flex;
      a {
        font-size: 15px;
        color: #9d9d9d;
      }
      span {
        font-size: 15px;
        color: #9d9d9d;
        font-family: '宋体';
      }

    }
    .img {
      width: 250px;
      height: 80px;
      margin: 0 auto 50px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .detail {
      display: flex;
      height: 430px;
      width: 100%;
      margin-top: 100px;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
      }
      .left {
        margin-left: 94px;
        height: 100%;
        width: 102px;
        .tu1 {
          width: 100px;
          height: 100px;
          margin-top: 30px;
          margin-bottom: 30px;
          padding: 10px;
          img {
            width: 100%;
          }
        }
        .tu2 {
          width: 100px;
          height: 100px;
          border: 1px solid #000;
          padding: 10px;
          img {
            width: 100%;
          }
        }
      }
      .mid {
        width: 436px;
        height: 225px;
        margin-left: 43px;
        .tupian {
          width: 336px;
          height: 225px;
          margin: 0 auto;
          background: #fff;
          img {
            width: 100%;
          }
        }

      }
      .right {
        height: 400px;
        flex-grow: 1;
        .righttop {
          margin-left: 75px;
          .top1 {
            font-size: 27px;
            color: #000;
            text-align: left;
            margin-left: -15px;
          }
          .top2 {
            width: 334px;
            height: 32px;
            display: flex;
            margin-left: -15px;
            justify-content: space-between;
            align-items: center;
            p {
              font-size: 14px;
              color: #c9c7c7;
              margin-left: 15px;
              margin-top: 20px;
              text-align: left;
            }
            a {
              color: #ee3030;
              font-size: 14px;
              display: flex;
              div {
                margin-left: 10px;
                width: 14px;
                height: 14px;
                line-height: 14px;
                background: #ee3030;
                color: #222;
                font-size: 10px;
                text-align: center;
                font-family: '宋体';
              }
            }
          }
          .top3 {
            color: #fa282e;
            font-size: 40px;
            text-align: left;
            margin-top: 26px;
            span {
              color: #27272a;
              font-weight: bold;
              font-size: 14px;
            }
          }
          .top4 {
            font-size: 14px;
            color: #161414;
            text-align: left;
            margin-top: 5px;
          }
          .top5 {
            margin-left: 15px;
            /*width:218px;*/
            height: 23px;
            border-bottom: 1px solid #e9dfdf;
            border-top: 1px solid #e9dfdf;
            display: flex;
            align-items: center;
            margin-top: 20px;
            margin-bottom: 15px;
            .shu {
              font-size: 11px;
              color: #e9dfdf;
              margin: 0 10px;
            }
            .top51 {
              display: flex;
              font-size: 11px;
              color: #666;
              align-items: center;
              span {
                font-size: 11px;
                color: #fa282e;
              }
            }

            .top52 {
              display: flex;
              font-size: 11px;
              color: #666;
              align-items: center;
              span {
                font-size: 11px;
                color: #fa282e;
              }
            }
          }
        }
        .rightbot {
          height: auto;
          width: 100%;
          .a {
            height: 21px;
            margin-left: 75px;
            display: flex;
            align-items: center;
            span {
              font-size: 16px;
              color: #716d6d;
              margin-right: 50px;
            }
            button {
              width: 17px;
              height: 14px;
              border: 1px solid #959595;
              background: #f9f1f1;
              font-size: 2px;
              text-align: center;
              line-height: 10px;
            }
            div {
              width: 44px;
              height: 20px;
              border-bottom: 1px solid #c9c7c7;
              margin: 0 16px;
              font-size: 16px;;
              color: #666161;
            }
          }
          .b {
            display: flex;
            margin-left: 75px;
            margin-top: 20px;
            .buy {
              display: block;
              width: 132px;
              height: 35px;
              border: 1px solid #000;
              background: #f3ecec;
              text-align: center;
              line-height: 35px;
              margin-right: 36px;
              color: #000;
              font-size: 15px;
            }
            .buycar {
              display: block;
              width: 132px;
              height: 35px;
              border: 1px solid #000;
              background: #000;
              text-align: center;
              line-height: 35px;
              margin-right: 36px;
              color: #fff;
              font-size: 15px;
            }
          }
        }
      }

      /*background: red;*/
      margin-bottom: 70px;
    }
    .detaila {
      height: auto;
      width: 1200px;
      overflow: hidden;
      margin-bottom: 100px;
      img {
        width: 100%;
      }
    }
    .iimg {
      width: 250px;
      height: 80px;
      overflow: hidden;
      margin-bottom: 30px;
    }

    ul {
      width: 1200px;
      height: 480px;
      display: flex;
      margin: 0 auto 67px;
      li {
        flex-grow: 1;
        height: 100%;
        overflow: hidden;
        & li:hover {
          box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.7);
        }
        .imgtop {
          width: 100%;
          height: 339px;
        }
        .imgbot {
          width: 100%;
          height: auto;
          box-sizing: border-box;
          padding: 0 80px;
          text-align: left;
          span {
            font-size: 18px;
            color: #000;
            font-weight: bold;
          }
          p {
            font-size: 15px;
            margin-top: 10px;
            color: #a09b9b;
          }
          div {
            margin-top: 10px;
            display: flex;
            div {
              font-size: 20px;
              color: #c30827;
              margin-right: 100px;
              span {
                font-size: 12px;
                color: #363633;
                line-height: 30px;
                margin-left: 8px;
              }
            }
            button {
              margin-top: 10px;
              width: 61px;
              height: 25px;
              background: #0b0806;
              border-radius: 13px;
              font-size: 12px;
              color: #fff;
              border: none;
            }
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

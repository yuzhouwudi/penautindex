<template>
  <div class="box">
    <div class="banner">
      <img src="../assets/img/banner.png" alt="">
      <div class="little">
        <img src="../assets/img/banner1.png" alt="">
        <router-link to="/classify">
           <button>more</button>
        </router-link>
      </div>
    </div>

    <div class="sale">
      <div class="lit_box">
        <div class="quan">
          <img src="../assets/img/aa_03.png" alt="">
        </div>
        <div class="quan">
          <img src="../assets/img/aa_04.png" alt="">
        </div>
        <div class="quan">
          <img src="../assets/img/aa_05.png" alt="">
        </div>
      </div>
    </div>

    <div class="tou">
      <div class="pic">
        <img src="../assets/img/pic.png" alt="">
        <h1>新品上市</h1>
      </div>
    </div>

    <div class="xinpin" v-for="item in data" :key="item.id">
      <div class="xin_left">
        <h1>TWO WHEELED</h1>
        <h2>ANALL LA</h2>
        <h3>品质生活每天一把坚果</h3>
        <h4>全网坚果销量遥遥领先</h4>
        <h5>Quality life one nut per day</h5>
        <h6>RMB<span>{{item.price}}</span></h6>
        <p>RMB:110</p>
        <button @click="addbuycar(item)">BUY NOW</button>
      </div>
      <div class="xin_right">
        <router-link :to="'/new?id='+item.id">
           <img :src="item.img[0].url" alt="">
           <!--<img src="../assets/img/xinpin.png" alt="">-->
        </router-link>
      </div>
    </div>

    <div class="xiangxi">
      <div class="xi_box" v-for="item in arr" :key="item.id">
        <router-link :to="'/new?id='+item.id">
          <img :src="item.img[2].url" alt="">
        </router-link>
        <p>{{item.name}}</p>
        <h1>RMB<span>{{item.price}}</span></h1>
        <button @click="addbuycar(item)">BUY</button>
      </div>

    </div>

    <div class="tou">
      <div class="pic">
        <img src="../assets/img/pic.png" alt="">
        <h1>热销产品</h1>
      </div>
    </div>

    <div class="hot">
      <div class="hot_left">
        <img src="../assets/img/ren1.png" alt="">
      </div>
      <div class="hot_right">
        <h1>TASTY</h1>
        <h2>SHDE</h2>
        <h3>坚果分类<span>CATEGDRY</span></h3>
        <h4>TOWN<span>SHOP</span></h4>
        <div class="hot_box" v-for="item in brr" :key="item.id">
          <img :src="item.img[2].url" alt="">
          <!--<img src="../assets/img/ren2.png" alt="">-->
          <h1>最新上新</h1>
          <p>{{item.name}}</p>
          <router-link :to="'/new?id='+item.id">
            MORE
          </router-link>
        </div>
      </div>
    </div>

    <div class="tou">
      <div class="pic">
        <img src="../assets/img/pic.png" alt="">
        <h1>折扣商品</h1>
      </div>
    </div>

    <div class="count">
      <div class="cou_top" v-for="item in err" :key="item.id">
        <div class="cou_top_box">
          <div class="pic_left">
            <img src="../assets/img/zhekou1.png" alt="">
          </div>
          <div class="pic_right">
            <router-link :to="'/new?id='+item.id">
              <img :src="item.img[2].url" alt="">
            </router-link>
            <!--<img src="../assets/img/s1.png" alt="">-->
            <div class="xin_left">
              <h6>RMB<span>{{item.price}}</span></h6>
              <p>RMB:110</p>
              <button @click="addbuycar(item)">BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div class="con_bot">
        <div class="cou_top" v-for="item in frr" :key="item.id">
          <div class="cou_top_box">
            <div class="pic_right">
              <router-link :to="'/new?id='+item.id">
                <img :src="item.img[2].url" alt="">
              </router-link>
              <!--<img src="../assets/img/s2.png" alt="">-->
              <div class="xin_left bot">
                <h6>RMB<span>{{item.price}}</span></h6>
                <p>RMB:110</p>
                <button @click="addbuycar(item)">BUY NOW</button>
              </div>
            </div>
            <div class="pic_left">
              <img src="../assets/img/zhekou3.png" alt="">
            </div>
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

    <ul class="bottom">
      <li v-for="item in crr" :key="item.id">
        <div class="imgtop">
          <router-link :to="'/new?id='+item.id">
            <img :src="item.img[0].url" alt="">
          </router-link>
        </div>
        <div class="imgbot">
          <span> {{item.name}}</span>
          <div>
            <div> {{item.price}}<span>RMB </span><button @click="addbuycar(item)"> BUY</button></div>
          </div>
        </div>
      </li>
    </ul>

    <ul class="bottom">
      <li v-for="item in drr" :key="item.id">
        <div class="imgtop">
           <router-link :to="'/new?id='+item.id">
             <img :src="item.img[0].url" alt="">
           </router-link>
        </div>
        <div class="imgbot">
          <span> {{item.name}}</span>
          <div>
            <div> {{item.price}}<span>RMB </span><button @click="addbuycar(item)"> BUY</button></div>
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
          data:[],
          arr:[],
          brr:[],
          crr:[],
          drr:[],
          err:[],
          frr:[],
          count: 0,
      }
    },

    created(){
      this.$http.get('/api/index/home/home').then(res => {
        res.body.forEach(val => val.img = JSON.parse(val.img))
        this.data = res.body;
//        console.log(res);
      });

      this.$http.get('/api/index/home/xinpin').then(res => {
        res.body.forEach(val => val.img = JSON.parse(val.img))
        this.arr = res.body;
//        console.log(res);
      });

      this.$http.get('/api/index/home/rexiao').then(res => {
        res.body.forEach(val => val.img = JSON.parse(val.img))
        this.brr = res.body;
//        console.log(res);
      });

      this.$http.get('/api/index/home/nuts').then(res => {
        res.body.forEach(val => val.img = JSON.parse(val.img))
        this.crr = res.body;
//        console.log(res);
      });

      this.$http.get('/api/index/home/nutss').then(res => {
        res.body.forEach(val => val.img = JSON.parse(val.img))
        this.drr = res.body;
//        console.log(res);
      })

      this.$http.get('/api/index/home/zhe').then(res => {
        res.body.forEach(val => val.img = JSON.parse(val.img))
        this.err = res.body;
//        console.log(res);
      })

      this.$http.get('/api/index/home/kou').then(res => {
        res.body.forEach(val => val.img = JSON.parse(val.img))
        this.frr = res.body;
//        console.log(res);
      })

    },



    methods: {
      addbuycar(data){
//        console.log(data);
        if (!localStorage.users) {
          this.$message.error('请先登录')
          return
        }
        let users = JSON.parse(localStorage.users)

        let obj = {
          name: data.name,
          count: 1,
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

  .box {
    width: 100%;

    .banner {
      width: 100%;
      /*height: 462px;*/
      position: relative;
      img {
        width: 100%;
      }
      .little {
        width: 306px;
        height: 215px;
        position: absolute;
        top: 120px;
        left: 850px;
        img {
          width: 100%;
        }
        button {
          width: 40px;
          height: 17px;
          background: #ecc829;
          font-size: 12px;
          border: none;
          border-radius: 30px;
          line-height: 17px;
          position: absolute;
          top: 134px;
          left: 43px;
          outline: none;
          cursor: pointer;
        }
        button:hover {
          background: #ef4e4e;
          color: #fff;
        }
      }
    }

    .sale {
      width: 100%;
      height: 143px;
      position: relative;
      .lit_box {
        height: 143px;
        display: flex;
        position: absolute;
        top: -47px;
        left: 150px;
        /*z-index: 200;*/
        .quan {
          width: 350px;
          img {
            width: 100%;
          }
        }
      }
    }

    .tou {
      width: 1200px;
      height: 150px;
      margin: 0 auto;
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

    .xinpin {
      width: 1200px;
      height: 392px;
      margin: 0 auto;
      display: flex;
      .xin_left {
        width: 335px;
        height: 392px;
        margin-left: 253px;
        h1 {
          text-align: left;
          font-size: 26px;
          font-weight: 500;
        }
        h2 {
          text-align: left;
          font-size: 24px;
          font-weight: 500;
        }
        h3 {
          margin-top: 30px;
          text-align: left;
          font-size: 18px;
          font-weight: 500;
          color: #4f4e44;
        }
        h4 {
          text-align: left;
          font-size: 24px;
          font-weight: 500;
          color: #4f4e44;
        }
        h5 {
          text-align: left;
          font-size: 16px;
          font-weight: 500;
          color: #4f4e44;
        }
        h6 {
          text-align: left;
          font-size: 16px;
          color: #4f4e44;
          margin-top: 20px;
          span {
            font-size: 20px;
            margin-left: 15px;
            color: #c30827;
          }
        }
        p {
          font-size: 14px;
          color: #999091;
          margin-left: -30px;
          margin-top: -20px;
          text-decoration: line-through
        }
        button {
          width: 78px;
          height: 25px;
          background: #242420;
          color: #fff;
          border-radius: 30px;
          border: none;
          font-size: 12px;
          margin-top: 20px;
          margin-left: -255px;
          outline: none;
          cursor: pointer;
        }
        button:hover {
          background: #ef4e4e;
        }
      }
      .xin_right {
        width: 655px;
        height: 392px;
        img {
          width: 100%;
        }
      }
    }

    .xiangxi {
      width: 1200px;
      height: 430px;
      margin: 0 auto;
      display: flex;
      .xi_box {
        p {
          font-size: 22px;
          color: #4f4e44;
          span {
            margin-left: 10px;
            color: #4f4e44;
          }
        }
        h1 {

          font-size: 16px;
          text-align: center;
          /*margin-left: 68px;*/
          margin-top: 10px;
          span {
            font-size: 22px;
            color: #c30827;
            margin-left: 10px;
          }
        }
        button {
          width: 62px;
          height: 20px;
          background: #242420;
          color: #fff;
          border-radius: 30px;
          border: none;
          font-size: 12px;
          margin-top: 10px;
          text-align: center;
          outline: none;
          cursor: pointer;
        }
        button:hover {
          background: #ef4e4e;
        }
      }
      .xi_box:first-child {
        width: 283px;
        height: 355px;
        margin-left: 180px;
        img{
          width: 100%;
        }
      }
      .xi_box:nth-child(2) {
        width: 283px;
        height: 355px;
        margin-left: 40px;
        img{
          width: 100%;
        }
      }
      .xi_box:nth-child(3) {
        width: 283px;
        height: 355px;
        margin-left: 40px;
        img{
          width: 100%;
        }
      }
      .xi_box:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 10px 10px rgba(217, 217, 217, 0.5);
        transition: 0.5s;
      }
    }

    .hot {
      width: 100%;
      height: 455px;
      margin-bottom: 30px;
      display: flex;
      .hot_left {
        width: 579px;
        img {
          width: 100%;
        }
      }
      .hot_right {
        width: 700px;
        height: 430px;
        margin-left: 20px;
        h1 {
          font-size: 51px;
          color: #e3e2d7;
          text-align: left;
        }
        h2 {
          font-size: 34px;
          color: #3f3f3b;
          text-align: left;
          margin-top: 10px;
        }
        h3 {
          font-size: 20px;
          color: #1e1e1a;
          text-align: left;
          font-weight: 500;
          span {
            color: #90908a;
            font-size: 20px;
            margin-left: 15px;
          }
        }
        h4 {
          font-size: 18px;
          color: #1e1e1a;
          text-align: left;
          margin-top: 6px;
          span {
            color: #5d5858;
            font-size: 18px;
            margin-left: 15px;
          }
        }
        .hot_box {
          width: 200px;
          height: 220px;
          float: left;
          margin-top: 20px;
          margin-right: 20px;
          img {
            width: 100%;
          }
          h1 {
            font-size: 16px;
            color: #c5c1c1;
            margin-top: 6px;
            margin-left: 65px;
          }
          p {
            font-size: 14px;
            color: #000;
          }
          a {
            width: 100px;
            height: 35px;
            background: #181717;
            border: none;
            color: #fff;
            font-size: 12px;
            outline: none;
            cursor: pointer;
          }
          a:hover {
            background: #ef4e4e;
          }
        }
      }
    }

    .count {
      width: 1200px;
      height: 900px;
      margin: 0 auto 50px;
      .cou_top {
        width: 100%;
        height: 450px;
        .cou_top_box {
          width: 796px;
          height: 450px;
          margin: 0 auto;
          overflow: hidden;
          display: flex;
          .pic_left {
            width: 426px;
            height: 245px;
            margin-top: 100px;
            img {
              width: 100%;
            }

          }
          .pic_right {
            width: 360px;
            height: 450px;
            position: relative;
            img {
              width: 100%;
            }
            .xin_left {
              position: absolute;
              bottom: 30px;
              left: 50px;
              h6 {
                text-align: left;
                font-size: 16px;
                color: #4f4e44;
                span {
                  font-size: 20px;
                  margin-left: 12px;
                  color: #c30827;
                }
              }
              p {
                font-size: 14px;
                color: #999091;
                margin-left: 123px;
                margin-top: -20px;
                text-decoration: line-through
              }
              button {
                width: 78px;
                height: 25px;
                background: #fff;
                color: #000;
                border-radius: 30px;
                border: none;
                font-size: 12px;
                margin-top: 15px;
                margin-left: -110px;
                outline: none;
                cursor: pointer;
              }
              button:hover {
                background: #ef4e4e;
                color: #fff;
              }
            }
            .xin_left.bot {
              bottom: 110px;
              left: 50px;
            }
          }
        }
      }
      .cou_bot {
        width: 100%;
        height: 450px;
        /*background: skyblue;*/
      }
    }

    ul {
      width: 1000px;
      height: 310px;
      display: flex;
      margin: 0 auto 67px;
      li {
        width: 200px;
        flex-grow: 1;
        height: 100%;
        overflow: hidden;
        & li:hover {
          box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.7);
        }
        .imgtop {
          width: 230px;
          height: 209px;
          margin: 0 auto;
          img{
            width: 100%;
            margin: 0 auto;
          }
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
              margin-top: 3px;
              margin-left: 20px;
              width: 45px;
              height: 20px;
              background: #0b0806;
              border-radius: 13px;
              font-size: 12px;
              color: #fff;
              border: none;
              outline: none;
              cursor: pointer;
            }
            button:hover {
              background: #ef4e4e;
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

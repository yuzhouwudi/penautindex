<template>
  <div class="big_right">
    <div class="right_top">
      <ul class="xuan" ref="xuan">
        <li @click="xuan($event)">
          <router-link to="" class="active">现有订单</router-link>
        </li>
        <!--<li @click="xuan($event)">-->
          <!--<router-link to="">成功订单</router-link>-->
        <!--</li>-->
        <!--<li @click="xuan($event)">-->
          <!--<router-link to="">已取消订单</router-link>-->
        <!--</li>-->
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
    <template v-if="arr.length">
      <div class="right_bot" v-for="(item,index) in arr">
        <div class="time">
          <p>订单编号: 1769816226</p>
          <p>下单时间：2017-12-01 10:09:53</p>
        </div>
        <div class="goods">
          <div class="tu">
            <img :src="img[index]" alt="">
          </div>
          <div class="desc">
            <p>{{name[index]}}</p>
            <p>MEI HUO YILP</p>
            <div class="taste">奶油味</div>
          </div>
          <ul class="goods_li">
            <li>￥{{price[index]}}</li>
            <li>*{{count[index]}}</li>
            <li>{{(price[index] * count[index]).toFixed(2)}}</li>
            <li v-if="item.status==0">{{status.a}}</li>
            <li v-if="item.status==1">{{status.b}}</li>
            <li v-if="item.status==2">{{status.c}}</li>
            <!--<li>删除订单</li>-->
          </ul>
        </div>
      </div>
    </template>

    <div class="none" v-else>
      暂无此类订单
    </div>
  </div>
</template>
<script>
  export default{
    name: 'list-right',
    data(){
      return {
        arr: [],
        list: [],
        name: [],
        price: [],
        img: [],
        count: [],
        status: {
          a: '未完成',
          b: "已发货",
          c: "已完成"
        }

      }
    },
    created(){

      if (!localStorage.users) {
        return
      }
      let users = JSON.parse(localStorage.users)
      let uid = users.id;

      this.$http.get('/api/index/list/user?uid=' + uid).then(res => {
//        let brr=[]
//        console.log(this.arr);
        res.body.forEach(val => {
//          if (val.status !== 2) {
            this.arr.push(val)   //user的订单
//          }
        })
//        this.arr=brr
          this.arr.forEach(val => {
          this.$http.get('/api/index/list/find?dingdanid=' + val.id).then(res => {
            this.count.push(res.body[0].count);    //user的每个商品的数量
//        console.log(res.body)
          })
          this.$http.get('/api/index/list/display?dingdanid=' + val.id).then(res => {
//            this.count.push(res.body[0]);
//            console.log(res.body)
            let gid=[]
            gid.push(res.body[0].goodsid)
            gid.forEach(val=>{
              this.$http.get('/api/index/list/product?id=' + val).then(res => {
//              console.log(res.body)
                res.body[0].img = JSON.parse(res.body[0].img);
                this.img.push(res.body[0].img[0].url)   //user的每个商品的单价，图片...
                this.name.push(res.body[0].name)   //user的每个商品的单价，图片...
                this.price.push(res.body[0].price)   //user的每个商品的单价，图片...
              })
            })

          })

        })
//        console.log(this.price);
//        console.log(this.arr)
      })


    },
    methods: {
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
        padding: 0 10px 20px;
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
    .none {
      margin: 50px;
      font-size: 20px;
      font-weight: 600;
    }
  }
</style>

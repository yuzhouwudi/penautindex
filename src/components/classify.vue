<template>
  <div class="container">
    <div class="top-img">
      <img src="../assets/img/2.png" alt="">
    </div>
    <div class="size">
      <p>首页&nbsp;/&nbsp;产品分类</p>
    </div>
    <div class="content">
      <div class="left">
        <div class="left-img">
          <img src="../assets/img/21.png" alt="">
        </div>
        <ul class="left-content">
          <span>产品分类 Product classification</span>
          <li v-for="(item,index) in arr" :key="item.id" @click="show(item.id);active=index"
              :class="{active:index==active}">
            {{item.name}}
          </li>
        </ul>


      </div>
      <div class="right">

        <div class="top-jia">
          按照价格
          <div class="select">
            <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link" style="margin-left: 10px">
              排序方式<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="desc">倒序</el-dropdown-item>
                <el-dropdown-item command="asc" divided>升序</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <!--<span>按照销量</span>-->
          <!--<div class="select">-->
            <!--<el-dropdown @command="handleCommand">-->
            <!--<span class="el-dropdown-link" style="margin-left: 10px">-->
              <!--排序方式<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
            <!--</span>-->
              <!--<el-dropdown-menu slot="dropdown">-->
                <!--<el-dropdown-item command="a">倒序</el-dropdown-item>-->
                <!--<el-dropdown-item command="e" divided>升序</el-dropdown-item>-->
              <!--</el-dropdown-menu>-->
            <!--</el-dropdown>-->
          <!--</div>-->

        </div>
        <div class="right-content">
          <ul>
            <li v-for="item in data" :key="item.id">
              <div class="content-img">
                <div class="tupian">
                  <router-link :to="'/new?id='+item.id">
                    <img :src="item.img[0].url" alt="">
                  </router-link>
                </div>

                <span>Papyrus nut</span>
                <span></span>
                <p>{{item.name}}</p>
                <h6>RMB<span>{{item.price}}</span></h6>
                <div class="xiaoguo">
                  <a @click="addbuycar(item)">
                    <div class="go">购买</div>
                  </a>
                  <router-link :to="'/new?id='+item.id">
                    <div class="shou">查看</div>
                  </router-link>
                </div>
              </div>
            </li>

          </ul>


          <div class="fen">
            <div class="block">
              <el-pagination
                class="page"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-size="size"
                layout="total , prev, pager, next, jumper"
                :total="total">
              </el-pagination>
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

    <ul class="nuts">
      <li v-for="item in brr" :key="item.id">
        <router-link :to="'/new?id='+item.id">
          <img :src="item.img[0].url" alt="">
        </router-link>
        <h1>{{item.name}}</h1>
        <h2>{{item.price}}<span>RMB</span></h2>
        <button>BUY</button>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "classify",
    data() {
      return {
        data: [],
        arr: [],
        active: 0,
        brr:[],

        total: 0,
        currentPage: 1,
        size:6,
        id:1,
        count: 0,
      };
    },
    created(){
      this.$http.get('/api/index/classify/count?id=1').then(res => {
        this.total = res.body[0].total;
//        console.log(res);
      })

      this.$http.get('/api/index/classify/show?id=1&nub=1&size='+this.size).then(res => {
        res.body.forEach(val => val.img = JSON.parse(val.img))
        this.data = res.body;
//        console.log(res);
      })

//
      this.$http.get('/api/index/classify/list').then(res => {
        this.arr = res.body
//        console.log(res);
      })

      this.$http.get('/api/index/classify/nut').then(res => {
        res.body.forEach(val => val.img = JSON.parse(val.img))
        this.brr = res.body;
//          console.log(res);
      })

    },


    methods: {
      handleCurrentChange(val) {
        this.currentPage = val
        this.$http.get('/api/index/classify/show?id='+this.id+'&nub=' + val+'&size='+this.size).then(res => {
          res.body.forEach(val => val.img = JSON.parse(val.img))
            this.data = res.body;
        })
      },

      show(id){
        this.$http.get('/api/index/classify/count?id='+id).then(res => {
          this.total = res.body[0].total;
        })

        this.id=id
        this.$http.get('/api/index/classify/show?id=' + id+'&nub=1&size='+this.size).then(res => {
          res.body.forEach(val => val.img = JSON.parse(val.img))
          this.data = res.body
//        console.log(res);
        })
      },

      handleCommand(command) {
        if(command=='asc'){
          this.data.sort((a,b)=>{
                return a.price-b.price
          })
        }else{
          this.data.sort((a,b)=>{
            return b.price-a.price
          })
        }
      },


      addbuycar(data){
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





    },



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
    .size {
      width: 100%;
      height: 75px;
      p {
        font-size: 16px;
        padding-top: 20px;
        text-align: left;
        color: #737373;
      }
    }
    .content {
      width: 100%;
      height: 920px;
      .left {
        width: 252px;
        height: 350px;
        border: 1px #8f82bc solid;
        float: left;
        .left-img {
          width: 100%;
          height: 61px;
          border-bottom: 1px yellow solid;
        }
        .left-content {
          width: 100%;
          height: auto;
          margin-top: 15px;
          span {
            display: block;
            width: 100%;
            height: 30px;
            font-size: 16px;
            line-height: 30px;
            margin-bottom: 20px;
          }
          li {
            width: 100%;
            height: 50px;
            font-size: 18px;
            font-weight: 600;
            line-height: 50px;
            cursor: pointer;
          }
          li.active {
            background: #F8F986;
          }
        }
      }
      .right {
        width: 900px;
        height: auto;
        float: right;
        .top-jia {
          width: 100%;
          height: 25px;
          text-align: left;
          line-height: 25px;
          display: flex;
          .select {
            border-radius: 50px;
            width: 100px;
            font-size: 12px;
            margin-left: 30px;
            border: 1px solid #000;
            .el-dropdown-link {
              cursor: pointer;
              font-size: 15px;
            }
          }
          span {
            margin-left: 40px;
          }
        }
        .right-content {
          width: 100%;
          height: auto;
          ul {
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            li {
              width: 246px;
              height: 305px;
              box-shadow: 1px 1px 3px 2px rgba(216, 216, 216, 0.4);
              margin-top: 30px;
              margin-right: 54px;

              .tupian {
                width: 175px;
                height: 125px;
                background: #fff;
                margin: 20px auto 0;
                img {
                  height: 100%;
                }
              }
              /*.content-img{*/
              /*width: 200px;*/
              /*margin-left: 21px;*/
              /*}*/
              span:nth-child(2) {
                display: block;
                width: 100%;
                height: 30px;
                font-size: 19px;
                margin-top: 10px;
              }
              span:nth-child(3) {
                display: block;
                width: 120px;
                height: 2px;
                background: yellow;
                margin-left: 60px;
              }
              p {
                width: 100%;
                height: 30px;
                font-size: 17px;
                line-height: 30px;
              }
              h6 {
                text-align: left;
                font-size: 16px;
                color: #4f4e44;
                margin-top: 8px;
                margin-left: 70px;

                span {
                  font-size: 20px;
                  margin-left: 10px;
                  color: #c30827;
                }
              }
              .xiaoguo {
                width: 100px;
                height: 20px;
                border: yellow 1px solid;
                border-radius: 50px;
                overflow: hidden;
                margin-left: 70px;
                margin-top: 10px;
                opacity: 0;
                .go {
                  width: 50%;
                  height: 100%;
                  background: yellow;
                  font-size: 14px;
                  float: left;
                }
                .shou {
                  width: 50%;
                  height: 100%;
                  /*background: yellow;*/
                  font-size: 14px;
                  float: left;
                }
              }
              &:hover .xiaoguo {
                opacity: 1;
                transition: 1s;
              }
            }
            li:hover {
              transform: translateY(-10px);
              box-shadow: 0 10px 10px 10px rgba(217, 217, 217, 0.5);
              transition: 0.5s;
            }
          }
          .fen {
            width: 100%;
            height: 200px;
            float: left;
            .block {
              margin-top: 60px;
            }
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

    .nuts {
      width: 1200px;
      height: auto;
      margin: 5px auto 50px;
      display: flex;
      li {
        padding-top: 20px;
        width: calc(100% / 4);
        height: 350px;
        img {
          width: 200px;
          margin: 0 auto;
          height: 200px;
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
      button{
        margin-top: 10px;
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

</style>

<template>
  <div class="container">
    <div class="top-img">
      <img src="../assets/img/2.png" alt="">
    </div>
    <div class="bread">
      <router-link to="/" class="h1">首页 / </router-link>
      <span>折扣专区</span>
    </div>
    <div class="content">
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
                <h5>RMB:110</h5>
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
      <li v-for="item in arr" :key="item.id">
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
    name: "commodity",
    data() {
      return {
        data: [],
        total: 0,
        currentPage: 1,
        size: 8,
        arr:[],
        count: 0,
      };
    },
    created(){
      this.$http.get('/api/index/discount/count').then(res => {
        this.total = res.body.total;
//        console.log(res);
      });

      this.$http.get('/api/index/discount/discount?nub=1&size=' + this.size).then(res => {
        let hot = [];
        res.body.forEach(val => {
          let aa = JSON.parse(val);
          aa.img = JSON.parse(aa.img);
          hot.push(aa);
        });
        this.data = hot;
//        console.log(hot);
      });


      this.$http.get('/api/index/discount/nut').then(res => {
        res.body.forEach(val => val.img = JSON.parse(val.img))
        this.arr = res.body;
//        console.log(res);
      })
    },

    methods: {
      handleCurrentChange(val) {
        this.$http.get('/api/index/discount/discount?nub=' + val + '&size=' + this.size).then(res => {
          let hot = [];
          res.body.forEach(val => {
            let aa = JSON.parse(val);
            aa.img = JSON.parse(aa.img);
            hot.push(aa);
          });
          this.data = hot;
//          console.log(hot);
        })
      },
      handleCommand(command) {
        if (command == 'asc') {
          this.data.sort((a, b) => {
            return a.price - b.price
          })
        } else {
          this.data.sort((a, b) => {
            return b.price - a.price
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
    .bread {
      width: 100%;
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
    .content {
      width: 100%;
      height: auto;
      .right {
        width: 1200px;
        height: auto;
        margin: 0 auto;
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
            overflow: hidden;
            margin-top: 40px;
            li {
              width: 246px;
              height: 305px;
              float: left;
              box-shadow: 1px 1px 3px 2px rgba(216, 216, 216, 0.4);
              margin: 30px 20px 20px 30px;
              .tupian {
                width: 175px;
                height: 125px;
                background: #fff;
                margin: 20px auto 0;
                img {
                  height: 100%;
                }
              }
              span:nth-child(2) {
                display: block;
                width: 100%;
                height: 30px;
                font-size: 19px
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
                margin-top: 10px;
                margin-left: 30px;
                span {
                  font-size: 20px;
                  margin-left: 10px;
                  color: #c30827;
                }
              }
              h5 {
                font-size: 14px;
                color: #999091;
                margin-left: 100px;
                margin-top: -20px;
                text-decoration: line-through
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
                  cursor: pointer;
                }
                .shou {
                  width: 50%;
                  height: 100%;
                  /*background: yellow;*/
                  font-size: 14px;
                  float: left;
                  color: #000;
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
          top: 144px;
          left: 124px;
          color: #fff;
          font-size: 20px;
        }
      }
    }

    .nuts {
      width: 1200px;
      height: auto;
      margin: 100px auto 50px;
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

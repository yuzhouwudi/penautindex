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
                <el-dropdown-item command="a">倒序</el-dropdown-item>
                <el-dropdown-item command="e" divided>升序</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <span>按照销量</span>
          <div class="select">
            <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link" style="margin-left: 10px">
              排序方式<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">倒序</el-dropdown-item>
                <el-dropdown-item command="e" divided>升序</el-dropdown-item>
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
                <div class="xiaoguo">
                  <router-link to="">
                    <div class="go">购买</div>
                  </router-link>
                  <router-link to="">
                    <div class="shou">收藏</div>
                  </router-link>
                </div>
              </div>
            </li>

          </ul>


          <div class="fen">
            <div class="block">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
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
    name: "classify",
    data() {
      return {
        data: [],
        arr: [],
        active: 0,
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    },
    methods: {
      handleSizeChange(val) {
//        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
//        console.log(`当前页: ${val}`);
      },

      show(id){
        this.$http.get('/api/index/classify/show?id=' + id).then(res => {
          res.body.forEach(val => val.img = JSON.parse(val.img))
          this.data = res.body
//        console.log(res);
        })
      },

      handleCommand(command) {
        this.$message('click on item ' + command);
      }

    },


    created(){
      this.$http.get('/api/index/classify/show?id=1').then(res => {
        res.body.forEach(val => val.img = JSON.parse(val.img))
        this.data = res.body
//        console.log(res);
      })

      this.$http.get('/api/index/classify/list').then(res => {
//        res.body.forEach(val=>val.img=JSON.parse(val.img))
        this.arr = res.body
//        console.log(res);
      })

    }
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
      height: 1580px;
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

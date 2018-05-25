<template>
  <section>

    <div id="zhezhao" v-if="flag==true"></div>


    <div id="enter" class="animated" ref="login">
      <a @click="none"><span class="iconfont icon-shachu-xue"></span></a>
      <img src="../assets/img/song.png" alt="">
      <div class="sin"><h1>登录</h1></div>
      <label>账号：</label>
      <input type="text" class="input"><br>
      <label>密码：</label>
      <input type="text" class="input">
      <button class="deng">马上登录</button>
      <p>还不是会员？<span>立马去注册！</span></p>
    </div>

    <div id="login" class="animated zoomIn" ref="zhu">
      <a @click="nono"><span class="iconfont icon-shachu-xue"></span></a>
      <img src="../assets/img/song.png" alt="">
      <div class="sin"><h1>注册</h1></div>
      <input type="text" class="input" placeholder="请输入手机号"><br>
      <input type="text" class="input" placeholder="短信校验码" style="width: 105px">
      <button class="yan">获取短信校验码</button>
      <br>
      <input type="text" class="input" placeholder="请输入您的密码"><br>
      <input type="text" class="input" placeholder="请再次输入您的密码">
      <button class="deng">马上登录</button>
    </div>

    <div class="top">
      <div class="left">
        <a @click="login">登录</a>
        <a @click="zhu">注册</a>
      </div>

      <div class="mid">
        <img src="../assets/img/logo.png" alt="">
      </div>

      <div class="right">
        <router-link :to="item.to" v-for="item in data " :key="item.id">{{item.name}}</router-link>

        <router-link to="/car"><span class="iconfont icon-gouwuche"></span></router-link>

        <div class="user"></div>
        <p>name</p>
      </div>
    </div>

    <div class="middom">
      <ul class="main">
        <li v-for="(item,index) in arr " :ref="'li'+index" :class="{active:index==active}" @click="active=index">
          <router-link :to="item.to">{{item.name}}</router-link>
        </li>
        <!--<router-link to="" class="find"><span class="iconfont icon-fangdajing"></span></router-link>-->
        <div class="slide" :style="{width:arr[active].w+'px',left:arr[active].x+'px'}"></div>
      </ul>
    </div>
  </section>


</template>
<script>
  import "../assets/icon/iconfont.css"
  import "../assets/css/animate.css"
  import "../assets/js/jquery.min"
  export default {
    data(){
      return {
        data: [
          {name: "我的订单", to: "/list"},

        ],
        arr: [
          {name: "首页", to: "/"},
          {name: "每周上新", to: "/upnew"},
          {name: "热门推销", to: "/hot"},
          {name: "产品分类", to: "/classify"},
          {name: "折扣专区", to: "/discount"},

        ],
        active: 0,

        flag: false,
        flag1: false,
      }
    },

    mounted(){
//    处理滑块的位置
      this.arr.forEach((val, index) => {
        val.x = this.$refs['li' + index][0].offsetLeft;
        val.w = this.$refs['li' + index][0].offsetWidth;
      })
    },

    beforeRouteUpdate(to, from, next){
      let path = to.fullPath;
      let index = this.items.findIndex(val => val.to === path);
      if (index == -1) {
        this.active = 0;
      } else {
        this.active = index;
      }
      next();

    },

    beforeRouteEnter(to, from, next){
      let path = to.fullPath;
      next(vm => {
        let index = vm.items.findIndex(val => val.to === path);
        if (index == -1) {
          vm.active = 0;
        } else {
          vm.active = index;
        }
      })
    },

    methods: {
      login(){
        this.flag = true
        this.$refs.login.style.display = 'block'
        this.$refs.login.classList.add('zoomIn')
        this.$refs.login.classList.remove('zoomOut')
      },
      none(){
//              console.log(this.$refs.login);
        this.$refs.login.classList.remove('zoomIn')
        this.$refs.login.classList.add('zoomOut')
        setTimeout(()=>{
          this.$refs.login.style.display = 'none'
        },200)
        this.flag = false
//              console.log(this.flag);
      },

      zhu(){
        this.flag = true
        this.$refs.zhu.style.display = 'block'
        this.$refs.zhu.classList.add('zoomIn')
        this.$refs.zhu.classList.remove('zoomOut')
      },
      nono(){
//        console.log(this.$refs.zhu);
        this.$refs.zhu.classList.remove('zoomIn')
        this.$refs.zhu.classList.add('zoomOut')
        setTimeout(()=>{
          this.$refs.zhu.style.display = 'none'
        },200)
        this.flag = false
//              console.log(this.flag);
      }
    }
  }

</script>

<style scoped lang="scss">
  #zhezhao {
    width: 100%;
    height: 100%;
    background: rgba(246, 242, 241, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }


  #enter {
    width: 496px;
    height: 354px;
    background: #f2f42a;
    position: absolute;
    top: 30%;
    left: 35%;
    z-index: 300;
    border-radius: 15px;
    display: none;
    a {
      position: absolute;
      top: -60px;
      left: 440px;
      font-size: 100px;
      color: #fff;
      span {
        font-size: 40px;
      }
    }
    img {
      width: 330px;
      position: absolute;
      top: -90px;
      left: -210px;
    }
    .sin {
      width: 0;
      height: 0;
      border-left: 70px solid transparent;
      border-right: 70px solid transparent;
      border-bottom: 100px solid #f42a42;
      position: absolute;
      top: -100px;
      left: 60px;
      h1 {
        color: #fff;
        font-size: 22px;
        margin-top: 25px;
        margin-left: -10px;
      }
    }
    label {
      margin-top: 50px;
      margin-right: 10px;
    }
    input {
      margin-top: 50px;
      width: 278px;
      height: 37px;
      border-radius: 30px;
      border: 1px solid #c1c0c0;
      outline: none;
      padding-left: 15px;
    }
    .deng {
      width: 290px;
      height: 40px;
      background: #000;
      border-radius: 35px;
      margin-top: 50px;
      margin-left: 60px;
      color: #fff;
      border: none;
      outline: none;
    }
    p {
      margin-top: 10px;
      font-size: 14px;
      color: #aaab9f;
      margin-left: 60px;
      span {
        font-size: 16px;
        color: #c5885c;
      }
    }
  }

  #login {
    width: 496px;
    height: 364px;
    background: #f2f42a;
    position: absolute;
    border-radius: 15px;
    top: 30%;
    left: 35%;
    z-index: 300;
    display: none;
    a {
      position: absolute;
      top: -60px;
      left: 440px;
      font-size: 100px;
      color: #fff;
      span {
        font-size: 40px;
      }
    }
    img {
      width: 330px;
      position: absolute;
      top: -90px;
      left: -210px;
    }
    .sin {
      width: 0;
      height: 0;
      border-left: 70px solid transparent;
      border-right: 70px solid transparent;
      border-bottom: 100px solid #f42a42;
      position: absolute;
      top: -100px;
      left: 60px;
      h1 {
        color: #fff;
        font-size: 22px;
        margin-top: 25px;
        margin-left: -10px;
      }
    }
    input {
      margin-top: 30px;
      width: 278px;
      height: 37px;
      border-radius: 25px;
      border: 1px solid #c1c0c0;
      padding-left: 20px;
      outline: none;
    }
    .yan {
      width: 168px;
      height: 37px;
      background: #d6d6d6;
      border-radius: 25px;
      /*border: none;*/
      margin-top: 25px;
      color: #000;
      border: 1px solid #c1c0c0;
      outline: none;
    }
    .deng {
      width: 300px;
      height: 40px;
      background: #000;
      border-radius: 35px;
      margin-top: 25px;
      color: #fff;
      border: none;
      outline: none;
    }
  }

  .top {
    width: 1200px;
    height: 115px;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
    .left {
      position: absolute;
      left: 257px;
      top: 35px;
      width: 156px;
      height: 23px;
      display: flex;
      justify-content: space-between;
      a {
        display: block;
        width: 69px;
        height: 21px;
        border: 1px solid #ffff00;
        border-radius: 100px;
        overflow: hidden;
        color: #9f8f8f;
        font-size: 15px;
      }
      & a:hover {
        background: #ffff00;
        color: #000;
      }

    }

    .mid {
      width: 100px;
      height: 88px;
      overflow: hidden;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    .right {
      width: 550px;
      height: 88px;
      display: flex;
      box-sizing: border-box;
      padding-left: 58px;
      align-items: center;
      position: absolute;
      right: 15px;
      top: 0;

      a {
        display: block;
        font-size: 15px;
        color: #9f8f8f;
        margin-right: 30px;
        span {
          font-size: 25px;
          color: #8A7A7A;
        }
      }
      p {
        font-size: 25px;
      }
      .user {
        width: 50px;
        height: 50px;
        background: pink;
        border-radius: 50%;
        margin-left: 30px;
      }
      p {
        color: #000;
        font-size: 22px;
        font-weight: 200;
        margin-left: 30px;
      }

    }
  }

  .middom {
    width: 100%;
    height: 76px;
    background: #fef103;
    .main {
      margin: 0 auto;
      height: 100%;
      width: 1200px;
      box-sizing: border-box;
      padding: 0 163px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      .slide {
        width: 4px;
        height: 2px;
        background: #000;
        position: absolute;;
        left: 0;
        bottom: 10px;
        transition: left 0.5s;
      }
      li {
        a {
          display: block;
          color: #1e1f1b;
          font-size: 17px;
        }
      }
      li.active {
        a {
          color: red;
        }
      }

      .find {
        width: 176px;
        height: 19px;
        border: 1px solid #000;
        border-radius: 7px;
        overflow: hidden;
        position: relative;
        span {
          color: #1e1f1b;

        }
      }
    }
  }
</style>

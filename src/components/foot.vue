<template>
    <footer>
        <div class="zhezhao">
      <ul class="left">
          <span> SERVICE</span>
          <li>购物流程</li>
          <li>退货流程</li>
          <li>配送说明</li>
          <li>在线客服</li>
      </ul>
        <ul class="mid">
            <span>FIND US</span>
            <li>THRNED GLOBAL</li>
            <li>微信公众号</li>
            <li>购物官方APP</li>
            <li>热线：400-880-0086</li>
        </ul>
        <div class="right">
            <div class="topset"> CONTACT US
            </div>
            <input type="text">
            <input type="text">
            <input type="text">
            <button class="send">SEND</button>
        </div>
        </div>
    </footer>
</template>
<script>
    export default {
        data(){
            return {}
        }
    }
</script>

<style scoped lang="scss">


    footer{
        margin: 0 auto;
        width:1200px;
        height:460px;
        /*background: rgba(0,0,0,0.5);*/
        display: flex;
        background-image: url("../assets/img/foot.jpg");
        background-size: cover;
        position: relative;
        .zhezhao{
            background: rgba(0,0,0,0.7);
            width:100%;
            height:100%;
            position: absolute;
            left: 0;
            top:0;
            display: flex;
        .left{
            width:180px;
            height: 100%;
            box-sizing: border-box;
            padding: 136px 0;
            margin-left: 100px;
           span{
               display: block;
               font-size: 18px;
               color: #ffffff;
               margin-bottom: 20px;
           }
            li{
                margin-bottom: 10px;
                color:#fff ;
                font-size: 18px;
                text-align: center;
            }
        }
          .mid{
              width: 300px;
              height:100px;
              box-sizing: border-box;
              padding:130px 0 ;

              span{
                  display: block;
                  font-size: 18px;
                  color: #ffffff;
                  margin-bottom: 20px;
              }
              li{
                  margin-left: 112px;
                  margin-bottom: 10px;
                  color:#fff ;
                  font-size: 18px;
                  text-align: left;
              }
          }
              .right{
                  width: 418px;
                  text-align: left;
                  padding: 0 8px;
                  box-sizing: border-box;
                  .topset{
                      color: #fff;
                      height: 100px;
                      line-height: 100px;
                  }
                input{
                    height:48px;
                    width:396px;
                    border: 2px solid #fff;
                    background: none;
                    margin-bottom: 18px;
                }
                  .send{
                      display: block;
                      width:130px;
                      height:40px;
                      background: #d9d9d9;
                      text-align: center;
                      line-height: 38px;
                      font-size: 20px;
                      color: #2e2e2e;
                      float: right;
                  }
              }

        }
    }
</style>
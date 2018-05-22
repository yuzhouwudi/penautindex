<template>
    <section>
        <div class="top">
            <div class="left">
                <a>登录</a>
                <a>注册</a>
            </div>
            <div class="mid">
                <img src="../assets/img/logo.png" alt="">
            </div>

               <div class="right">
<router-link to=""  v-for="item in data"> {{item.name}}</router-link>
           <span class="iconfont gouwuche"></span>
               </div>
        </div>
        <div class="middom">
            <div class="main">
                <router-link to=""  v-for="item in arr ">{{item.name}}</router-link>
                <router-link to="" class="find"></router-link>
            </div>
        </div>
    </section>


</template>
<script>
    export default {
        data(){
            return {
                data:[
                    {name:"我的订单",to:"" },
                    {name:"我的收藏",to:"" },
                    {name:"个人中心",to:"" },
                ],
                arr:[
                    {name:"首页",to:"" },
                    {name:"每周上新",to:"" },
                    {name:"热门推销",to:"" },
                    {name:"产品分类",to:"" },
                    {name:"折扣分类",to:"" },

                ]
            }
        }
    }
</script>

<style scoped lang="scss">
.top{
    width:1200px;
    height:115px;
    /*background: #aacdef;*/
    position: relative;
    margin:0 auto;
.left{
    position: absolute;
    left: 157px;
    top:30px;
    width:156px;
    height:23px;
    display: flex;
    justify-content: space-between;
    a{
        display: block;
        width:69px;
        height:21px;
        border: 1px solid #ffff00;
        border-radius:100px;
        overflow: hidden;
        color: #9f8f8f;
        font-size: 15px;
    }
    & a:hover{
        background: #ffff00;
        color: #000;
    }
 }
    .mid{
        width:100px;
        height:88px;
        overflow: hidden;
        position: absolute;
        left: 0;
        right: 0;
        top:0;
        margin: 0 auto;
        img{
            width:100%;
        }
    }
    .right{
        width:550px;
        height:88px;
        display: flex;
        box-sizing: border-box;
        padding-left: 58px;
        align-items: center;
        position: absolute;
        right: 0;
        top: 0;
        a{
            display: block;
            font-size: 15px;
            color: #9f8f8f;
            margin-right: 12px;
        }
    }
}
    .middom{
        width:100%;
        height:76px;
        background: #fef103;
        .main{
            margin: 0 auto;
            height: 100%;
            width:1200px;
            box-sizing: border-box;
            padding: 0   163px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            a{
                display: block;
                color: #1e1f1b;
                font-size: 17px;
            }
            .find{
                width:176px;
                height:19px;
                border: 1px solid #000;
                border-radius: 7px;
                overflow: hidden;
                position: relative;
                span{
                    color: #1e1f1b;

                }
            }
        }
    }
</style>
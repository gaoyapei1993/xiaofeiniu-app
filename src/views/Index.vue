<template class="body">
<el-container>
<!--头部标签-->
 
  <el-header>
  <!--头部logo-->
  <el-row>
    <el-col :span="8">
      <div class="grid-content"><img class="logo" src="../../img/logo.png"></div>
    </el-col>
    <!--头部导航-->
  <el-col :span="16">
    <div class="grid-content">
       <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">小肥牛</el-menu-item>
      <el-submenu index="2">
        <template slot="title">美食与服务</template>
        <el-menu-item index="2-1">沸腾汤底</el-menu-item>
        <el-menu-item index="2-2">涮菜</el-menu-item>
        <el-menu-item index="2-3">蘸料</el-menu-item>
        <el-menu-item index="2-3">小吃</el-menu-item>
      </el-submenu>

     <el-submenu index="3">
        <template slot="title">食品安全与供应链</template>
        <el-menu-item index="3-1">食品安全</el-menu-item>
        <el-menu-item index="3-1">蜀海餐饮供应链</el-menu-item>
      </el-submenu>

    <el-submenu index="4">
        <template slot="title">用户服务</template>
        <el-menu-item index="4-1">小肥牛外卖</el-menu-item>
        <el-menu-item index="4-1">国际店铺</el-menu-item>
      </el-submenu>

     <el-submenu index="5">
        <template slot="title">加入我们</template>
        <el-menu-item index="5-1">双手改变命运</el-menu-item>
        <el-menu-item index="5-1">福利薪酬</el-menu-item>
        <el-menu-item index="5-1">社会招聘</el-menu-item>
      </el-submenu>
     <el-menu-item>INNESTOR RELATIONS</el-menu-item>
    </el-menu>
    </div></el-col>
  </el-row>
</el-header>

<!--2.主体部标签-->
<el-main class="main">

  <!--2.1主体轮播图-->
  <el-carousel :interval="5000" arrow="always" height="600px">
    <el-carousel-item v-for="item in 4" :key="item">
    </el-carousel-item>
  </el-carousel>
    <!--2.2主体产品图片-->
       <el-row class="row1">
          <el-col :span="12" class="product">
             <el-card shadow="hover">
               <img class="bg_img" src="../../img/001.jpg">
               <div class="bg">
                <span><a href="">沸腾汤底</a></span>
                <p><a href="">当一阵风潮吹过，留下的只是经典</a></p>
               </div>
             </el-card>
          </el-col>
          <el-col :span="12">
             <el-card shadow="hover">
               <img class="bg_img" src="../../img/002.jpg">
               <div class="bg">
                <span><a href="">春季新品</a></span>
                <p><a href="">高原深水罗非鱼 宠幸的方式不止一种</a></p>
               </div>
             </el-card>
          </el-col>
       </el-row>
        <!--2.2主体部标签-->
      <el-row class="row2">
          <el-col :span="6">
             <el-card shadow="hover">
              <img class="card_img" src="../../img/003.jpg">
              <span class="card_sp"><a href="" class="a_fount">小肥牛店铺</a></span>
              </el-card>
          </el-col>
          <el-col :span="6">
             <el-card shadow="hover">
              <div class="card_img1">
               <img src="../../img/004.jpg">
               <span class="card_sp1"><a href="" class="a_fount">特殊捞派菜</a></span>
               <p class="card_sp2_1">上亿人用消费选出的经典菜单</p>
               </div>
             </el-card>
          </el-col>
          <el-col :span="6">
             <el-card shadow="hover">
               <div class="card_img2" >
               <img src="../../img/005.jpg">
               <span class="card_sp2"><a href="" class="a_fount">蘸料</a></span>
               <p class="card_sp2_1">我们不是网红，是上网创造的我</p>
               </div>
             </el-card>
          </el-col>
          <el-col :span="6">
             <el-card shadow="hover">
               <div class="card_img3">
               <img  src="../../img/006.png">
               <span class="card_sp3"><a href="" class="a_fount">特色服务</a></span>
                <p class="card_sp3_3">零食 | 变脸 | 美甲 | 舞面</p>
               </div>
             </el-card>
          </el-col>
        </el-row>
        <!--2.3主体部标签-->
       <el-row class="row3">
          <el-col :span="6">
             <el-card shadow="hover">
              <img class="card_img" src="../../img/007.jpg">
              <span class="card_sp"><a href="" class="a_fount">积分到期提醒</a></span>
              </el-card>
          </el-col>
          <el-col :span="6">
             <el-card shadow="hover">
              <div class="card_img8">
                 <img src="../../img/008.jpg">
                 <span class="card_sp8"><a href="" class="a_fount1">储蓄额查询</a></span>
              </div>
             </el-card>
          </el-col>
          <el-col :span="6">
             <el-card shadow="hover">
               <div class="card_img8" >
                <img src="../../img/009.jpg">
                <span class="card_sp8"><a href="" class="a_fount1">随时随地</a></span>
                <p class="card_sp2_2">我们不用出门，就可以享受美食</p>
               </div>
             </el-card>
          </el-col>
          <el-col :span="6">
             <el-card shadow="hover">
               <div class="card_img3">
                <img  src="../../img/010.jpg">
                <span class="card_sp3"><a href="" class="a_fount">安全公告</a></span>
              </div>
             </el-card>
          </el-col>
        </el-row>
        
 
</el-main>

<!--尾部部标签-->
<el-footer>
<img src="../../img/dingwei.jpg">
<div class="father">
   <div class="chird1">
     <span>关注我们</span>
     <p>社交媒体平台</p>
   </div>
   <div class="chird2">
     <a href="" class="weibo_a"><img class="weibo" src="../../img/weibo.png"></a>
     <a href="" class="weixin_a"><img class="weixin" src="../../img/weixin.png"></a>
   </div>
</div>
  <p class="font_size">©2019 版权所有 海鸿达（北京）餐饮管理有限公司</p>
</el-footer>


</el-container>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss">
.body{
  background-color:#eeeeee;
}
 /*header*/
 el-menu-demo .active{
     color:#e50112;
 }
 .logo{
   height:54px;
   width:153px;
   padding-top:2px;
   padding-left:400px;
 }
/*main 轮播 */
el-main .main{
  margin:center center;
}
 .el-carousel__item:nth-child(2n) {
    background-image: url("../../img/banner001.jpg");
    background-position:center; 
    background-repeat:no-repeat;
    width:1920px;
    height:600px;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-image: url("../../img/banner002.jpg");
    background-position:center; 
    background-repeat:no-repeat;
    width:1920px;
    height:600px;
  }
  .el-carousel__item:nth-child(2n+2) {
    background-image: url("../../img/banner003.jpg");
    background-position:center; 
    background-repeat:no-repeat;
    width:1920px;
    height:600px;
  }
  .el-carousel__item:nth-child(2n+3) {
    background-image: url("../../img/banner004.jpg");
    background-position:center; 
    background-repeat:no-repeat;
    width:1920px;
    height:600px;
  }

  
 /*main 轮播 */

  /*main 产品图片 */
  .row1{
    width:66%;
    margin:0 auto;
  }
  .row2{
    width:66%;
    margin:0 auto;
  }
  .row3{
    width:66%;
    margin:0 auto;
  }
.product{
  margin:auto 0;
}
.bg_img{
  position:relative;
}
.bg{
  padding-top:15px;
  width:550px;
  height:60px;
  background-color:rgba(229,1,18,0.8);
  position:absolute;
  bottom:0;
  margin-bottom:24px;
}
.bg a{
  color:#fff;
  text-decoration:none;
}
.bg span{
  padding-top:30px;
  padding-left:30px;
  color:#fff;
  font-size:18px;
}
.bg p{
  margin-top:0;
  padding-left:30px;
  color:#fff;
  font-weight:none;
 }

 .card_img{
   position:relative;
 }
 .card_sp{
   position:absolute;
   top:18%;
   left:95px;
   color:#fff;
   font-size:20px;
 }
 .card_img1{
   position:relative;
 }
 .card_sp1{
   position:absolute;
   top:13%;
   left:29%; 
   color:#fff;
   font-size:20px;
 }
 .card_img2{
   position:relative;
 }
 .card_sp2{
   position:absolute;
   top:13%;
   left:40%;
   color:#fff;
   font-size:20px;
 }
 .card_sp2_1{
   position:absolute;
   top:19%;
   left:13%;
   color:#fff;
   font-size:14px;
 }
  .card_img3{
   position:relative;
 }
 .card_sp3{
   position:absolute;
   top:13%;
   left:92px;
   color:#fff;
   font-size:20px;
 }
 .card_sp3_3{
   position:absolute;
   top:19%;
   left:23%;
   color:#fff;
   font-size:14px;
 }
 .a_fount{
   color:#fff;
  text-decoration:none;
  }
  .card_img8{
   position:relative;
 }
 .card_sp8{
   position:absolute;
   top:13%;
   left:92px;
   color:#000;
   font-size:20px;
 }
 .a_fount1{
   color:#000;
  text-decoration:none;
 }
 .card_sp2_2{
   position:absolute;
   top:19%;
   left:13%;
   color:#000;
   font-size:14px;
 }
/*footer 轮播 */
.father{
  width:1920px;
  height:100px;
  background-color:#e50112;
  position:relative;
}
.chird1{
  position:absolute;
  top:15px;
  left:350px;
  bottom:10px;
  span{
    color:#fff;
    font-size:30px;
  }
  p{
    margin:0;
    padding:0;
   color:#fff; 
   padding-bottom:30px;
  }
}


.chird2{
  position:absolute;
  top:30px;
  left:1200px;
 
}
 .weibo_a :hover{
    height:7%;
    width:7%;
  }
   .weixin_a :hover{
    height:7%;
    width:7%;
  }
.weibo{
  height:6%;
  width:6%;
}
.weixin{
  margin-left:50px;
  height:6%;
  width:6%;
}
.font_size{
  font-size:12px;
  margin-left:350px;
}
</style>

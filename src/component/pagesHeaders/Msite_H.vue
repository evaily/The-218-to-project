<template>
  <div id="msiteHeader" class="cleanfix">
    <div class="top">
        <div class="boxer-1">
            <img src="../../../public/wangyi.webp" alt="">
            <div class="searchInput">
                <i class="iconfont icon-sousuo">
                </i>
                <span class="placeholder">
                    搜索商品, 共20413款好物
                </span>
            </div>
            <div class="login_H">
                登录
            </div>
        </div>
    </div>
    <div class="bottom">
        <div class="boxer-2">
          <div class="bottom-left wrapper" id="MsiteBScroll">
            <ul class="content">
              <li class="active"><span class="active">推荐</span></li>
              <li class=""><span class="">居家生活</span></li>
              <li class=""><span class="">服饰鞋包</span></li>
              <li class=""><span class="">美食酒水</span></li>
              <li class=""><span class="">个护清洁</span></li>
              <li class=""><span class="">母婴亲子</span></li>
              <li class=""><span class="">运动旅行</span></li>
              <li class=""><span class="">数码家电</span></li>
              <li class=""><span class="">全球特色</span></li>
            </ul>
          </div>
          <div class="bottom-right">
            <span class="iconfont icon-jiantou8"></span>
          </div>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
  export default {
    mounted() {
      // this.$nextTick(() => {
        this.scroll = new BScroll('.wrapper', {
          scrollX: true
        })
      // })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#msiteHeader
  width 100%
  height 148px
  margin-top 0px
  overflow hidden  
  
  .top
    width (100%-16px)
    height 88px
    padding  16px 30px
    box-sizing border-box
    .boxer-1
      width 690px
      height 56px
      // background #007ACC
      line-height 56px
      display flex
      flex-wrap nowrap
      align-items center
      img 
        display block
        float left
        width 138px
        height 40px
        margin-right 20px
      .searchInput
        float left
        width 442px
        height 56px
        background #EDEDED
        text-align center
        i 
          width 28px
          height 28px
          margin-right 10px
        .placeholder
          width 317px
          height 41px
          color #666
          font-size 28px
      .login_H
        float left
        width 74px
        height 40px
        border 1px solid #EE8C90
        line-height 40px
        text-align center
        border-radius 8px
        margin-left 16px
        box-sizing border-box
  .bottom
    width 100%
    height 60px
    // background #007ACC
    .boxer-2
      display flex
      .bottom-left
        width 650px
        height 60px
        display flex
        overflow hidden
        .content
          height 60px
          display flex
          padding 0 30px
          li
            white-space nowrap
            // background pink
            height 60px
            margin-left 20px
            &:first-child
              margin-left 0px
            span 
              font-family  PingFangSC-Light,helvetica,'Heiti SC'
              display inline-block
              height 60px
              line-height 60px
              text-align center
              font-size 28px
              padding 0 16px
              color #333
              position relative
            .active
              color #DD1A21
            .active::after
              content ''
              display block
              width 100%
              height 5px
              position: absolute;
              left: 0;
              bottom: 0;
              background-color: #DD1A21;
      .bottom-right
        width 100px
        height 60px
        // background green
        overflow hidden
        z-index 5
        line-height 60px
        text-align center
        span 
          width 30px
          height 30px        

  
 
</style>
<template>
  <div id="FooterGuide">
      <ul>
          <li :class="{ative: $route.path ==='/msite'}" @click="goPath('/msite')"><i class="iconfont icon-shouye"></i><span>首页</span></li>
          <li :class="{ative: $route.path ==='/systematic'}" @click="goPath('/systematic')"><i class="iconfont icon-chuangtougui"></i><span>分类</span></li>
          <li :class="{ative: $route.path ==='/goodshopping'}" @click="goPath('/goodshopping')"><i class="iconfont icon-hot"></i><span>值得买</span></li>
          <li :class="{ative: $route.path ==='/shoppingcar'}" @click="goPath('/shoppingcar')"><i class="iconfont icon-gouwuche"></i><span>购物车</span></li>
          <li :class="{ative: $route.path ==='/personal'}" @click="goPath('/personal')"><i class="iconfont icon-geren"></i><span>个人</span></li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {data() {
      return {
          title:'',
          icon:''

      }
  },
    methods: {
        goPath(path){
            path !== this.$route.path && this.$router.push(path)
        }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#FooterGuide
  position fixed
  left 0
  bottom 0
  width 100%
  height 98px
  ul
    display flex
    height 100%
    li
      width 20%
      height 98px
      text-align center
      display flex
      flex-direction column
      &.ative
        color #B4282D
      .iconfont
        font-size 40px
        line-height 55px


    
</style>
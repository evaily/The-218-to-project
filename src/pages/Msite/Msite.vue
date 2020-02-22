<template>
  <div id="msiteContainer">
    <div class="Msite_H">
        <Msite_H />
    </div>
    <tuijian/>
  </div>
</template>

<script type="text/ecmascript-6">
import Msite_H from '../../component/pagesHeaders/Msite_H'
import tuijian from '../MsiteContent/tuijian'
  export default {
    components:{
      Msite_H,
      tuijian
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
#msiteContainer
  width 100%
  .Msite_H
    width 100%
    height 148px


 
</style>
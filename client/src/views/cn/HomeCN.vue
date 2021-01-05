<template>
  <div class="cn-font-overwriter">
    <BannerMainCN v-bind:mainText="mainText" v-bind:subTexts="subTexts"  />
    <DisplaySectionCN />
  </div>
</template>

<script>
// @ is an alias to /src
import BannerMainCN from '@/components/cn/BannerMainCN.vue'
import DisplaySectionCN from '@/components/cn/DisplaySectionCN.vue'

export default {
  name: 'HomeCN',
  components: {
    BannerMainCN,
    DisplaySectionCN
  },
  data () {
    return {
      mainText: '你好，我是 favblue。',
      subTexts: [
        '一名 Web 开发者及技术博主',
        '偶尔在 B 站上传一些视频'
      ]
    }
  }
}
</script>

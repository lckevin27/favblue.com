<template>
  <div class="about cn-font-overwriter about-cn">
    <BannerMainCN v-bind:mainText="mainText" v-bind:subTexts="subTexts" />
    <div class="text-section">
      <h2>关于我</h2>
      <p>我是一个来名深圳的 Web 开发者，现居住且就职于澳大利亚西部城市珀斯。</p>
      <p><router-link to="/cn/ife">洞察前端</router-link> 项目的灵感来源于前端求职者在面试大厂后上传到网络上的面经中的各种常见面试题。这些题目之所以出现频率高，就是因为它们是前端的核心知识 - 每个大厂都想让招揽对这些核心知识非常了解的人才。所以我想：为什么不做一系列以此为出发点的教学呢？</p>
      <p>如果你是为此项目来到这里，那么我希望你可以有一个愉快的学习经历；如果你有一些宝贵的建议想告知我，请不要犹豫联系我。让我们一起进步吧！</p>
    </div>
  </div>
</template>

<script>
import BannerMainCN from '@/components/cn/BannerMainCN.vue'

export default {
  name: 'AboutCN',
  components: {
    BannerMainCN
  },
  data () {
    return {
      mainText: '关于我',
      subTexts: [
        '这些是关于我的一些信息'
      ]
    }
  }
}
</script>

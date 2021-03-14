<template>
  <div class="about">
    <BannerMain v-bind:mainText="mainText" v-bind:subTexts="subTexts" />
    <div class="text-section">
      <h2>About Me</h2>
      <p>I am a Web Developer/Software Engineer with more than 3 years of experience who live and work in Perth, Australia.</p>
      <p>Besides work, I am also a freelancer of building websites for a couple of companies and my self interests using frameworks such as React.JS and Vue.JS along with Node.JS Back-End, and also deeply involved in projects that used React-Native for mobile development.</p>
      <p>If you have any requirements of having a personal website, a website to promote your business or company, mobile apps for iOS or/and Android, or even a whole system of business involving all the products mentioned above which can interact with each other, please feel free to contact me by <a id="contact-email" target="_blank" href="mailto:me@kevin27.cl@gmail.com">kevin27.cl@gmail.com</a>.</p>
      <p><strong>Some of my work:</strong>
        <ul>
          <li><a href="http://chuanwudashi.com">Traditional Wushu Masters | 传武大师</a></li>
          <li><a href="http://jmaxwell.com.au">Jmaxwell Pty Ltd</a></li>
          <li><a href="http://favblue.com:8888">United Funds</a></li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
import BannerMain from '@/components/BannerMain.vue'

export default {
  name: 'About',
  components: {
    BannerMain
  },
  data () {
    return {
      mainText: 'About Me',
      subTexts: [
        'These are some facts about me.'
      ]
    }
  }
}
</script>

<template>
  <div class="about">
    <BannerMain v-bind:mainText="mainText" v-bind:subTexts="subTexts" />
    <div class="text-section">
      <h2>About Me</h2>
      <p>I am a web developer from Shenzhen, China and currently live and work in Perth, Australia.</p>
      <p>The <router-link to="/ife">Insightful Front-End Program</router-link> was inspired by a series of popular interview questions that posted by tech giants' interviewees as I was preparing for my own. I was thinking that these questions were asked frequently because they were important skills or knowledges that every front-end developer should master. So why don't I just use these points as the core and integrate essential knowledges into a series of tutorials that come salong with videos that can help other learners to better understand front-end development?</p>
      <p>If you are coming for the program, I hope you have a great experience learning with it. If you have any advices for me, please do not hesitate to contact me. Enjoy!</p>
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

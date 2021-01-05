<template>
  <div>
    <BannerMain v-bind:mainText="mainText" v-bind:subTexts="subTexts" />
    <DisplaySection />
  </div>
</template>

<script>
// @ is an alias to /src
import BannerMain from '@/components/BannerMain.vue'
import DisplaySection from '@/components/DisplaySection.vue'

export default {
  name: 'Home',
  components: {
    BannerMain,
    DisplaySection
  },
  data () {
    return {
      mainText: 'Hi, I am favblue.',
      subTexts: [
        'I am a web developer and technical blogger.',
        'I also do video tutorials.'
      ]
    }
  }
}
</script>

<template>
    <div class="banner-main">
        <div class="hero-text hero-text-cn">
            <p class="main-text">{{ mainText }}</p>
            <p v-for="subText in subTexts" v-bind:key="subText" class="sub-text">{{ subText }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    mainText: {
      type: String,
      required: true
    },
    subTexts: {
      type: Array
    }
  }
}
</script>

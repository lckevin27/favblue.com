<template>
    <footer v-if="!hideLinks">
        <p id="footer-logo" class="logo">favblue</p>
        <div class="social-links">
            <a href="https://github.com/lckevin27"><img src="../../public/img/icons/github.png"></a>
            <a href="#"><img src="../../public/img/icons/youtube-colored.png"></a>
            <a href="#"><img src="../../public/img/icons/bilibili-colored.png"></a>
        </div>
        <a target="_blank" href="mailto:me@favblue.com">me@favblue.com</a>
    </footer>
</template>

<script>
export default {
  props: {
    hideLinks: {
      type: Boolean,
      required: true
    }
  }
}
</script>

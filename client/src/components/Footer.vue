<template>
    <footer v-if="!hideLinks">
        <p id="footer-logo" class="logo">favblue</p>
        <div class="social-links">
            <a href="https://github.com/lckevin27"><img src="../../public/img/icons/github.png"></a>
            <a href="javascript:void(0)" class="disabled"><img src="../../public/img/icons/youtube-colored.png"></a>
            <a href="javascript:void(0)" class="disabled"><img src="../../public/img/icons/bilibili-colored.png"></a>
        </div>
        <a id="contact-email" target="_blank" href="mailto:me@kevin27.cl@gmail.com">kevin27.cl@gmail.com</a>
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

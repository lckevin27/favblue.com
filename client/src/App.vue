<template>
  <div id="app">
    <TopNav v-bind:hideLinks="hideLinks" v-bind:lang="lang" />
    <router-view v-on:hideTopNav="updateHideLinks" />
    <Footer v-bind:hideLinks="hideLinks" />
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    TopNav,
    Footer
  },
  data () {
    return {
      hideLinks: false,
      lang: 'en'
    }
  },
  methods: {
    updateHideLinks: function (hide) {
      this.hideLinks = hide
    }
  },
  watch: {
    $route (to, from) {
      this.lang = to.path.startsWith('/cn') ? 'cn' : 'en'
      document.title = to.meta.title !== undefined ? `favblue | ${to.meta.title}` : 'favblue'
      if (to.path === '/tocn') {
        this.$router.push('/cn' + from.path)
      } else if (to.path === '/toen') {
        if (from.path === '/cn') {
          this.$router.push('/')
        } else {
          this.$router.push(from.path.replace('/cn', ''))
        }
      }
    }
  },
  /* eslint-disable func-call-spacing */
  mounted () {
    window.addEventListener ('hashchange', () => {
      var currentPath = window.location.hash.slice(1)
      if (this.$router.path !== currentPath) {
        this.$router.push(currentPath)
      }
    }, false)
  }
}
</script>

<template>
    <nav class="top-nav" v-if="!hideLinks">
      <div v-if="lang === 'en'">
        <div class="logo-main logo">
            <router-link to="/">favblue<!--img src="../../public/img/logo-main.png" alt=""--></router-link>
        </div>
          <ul class="nav-links">
              <li><router-link to="/cn/ife">Insightful Front-End</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><a href="javascript:void(0)" v-on:click="gotoFooter">Contacts</a></li>
              <li class="lang-switch"><router-link to="/tocn">中文</router-link></li>
              <li class="open-nav" >
                <a href="javascript:void(0)" v-on:click="openNav()">
                  <div></div>
                  <div></div>
                  <div></div>
                </a>
              </li>
          </ul>
      </div>
      <div v-else class="top-nav-cn">
        <div class="logo-main logo">
            <router-link to="/cn">favblue</router-link>
        </div>
          <ul class="nav-links">
              <li><router-link to="/cn/ife">洞察前端</router-link></li>
              <li><router-link to="/cn/about">关于</router-link></li>
              <li><a href="javascript:void(0)" v-on:click="gotoFooter">联系我</a></li>
              <li class="lang-switch"><router-link to="/toen">EN</router-link></li>
              <li class="open-nav">
                <a href="javascript:void(0)" v-on:click="openNav()">
                  <div></div>
                  <div></div>
                  <div></div>
                </a>
              </li>
          </ul>
      </div>
    </nav>
</template>

<script>
export default {
  props: {
    hideLinks: {
      type: Boolean,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  methods: {
    gotoFooter () {
      const footer = document.getElementById('footer-logo')
      footer.scrollIntoView()
    }
  }
}
</script>

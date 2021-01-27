<template>
  <div class="insightful-front-end cn-font-overwriter">
    <nav class="IFENavbar">
      <router-link class="navbar-logo logo" to="/cn"><img src="@/../public/img/icon-IFE.png" alt="logo" title="首页"></router-link>
      <h4>洞察前端 - Insightful Front End</h4>
      <ul class="outer-list">
          <a class="btn-edit" v-if="loggedIn" v-on:click="displaying = 'editing'">编辑模式</a>
          <li><a v-on:click="loadToScreen(intro[0].url)">0. {{ intro[0].title }}</a><a v-if="displaying === 'editing'" v-on:click="editPost(intro[0])" class="btn-del">编辑</a></li>
          <li><a v-on:click="showHTML = !showHTML">1. HTML</a></li>
            <ul v-show="showHTML">
                <li v-for="HTML in HTMLs" v-bind:key="HTML.id"><a v-on:click="loadToScreen(HTML.url)">{{ HTML.num }} - {{ HTML.title }}</a><a v-if="displaying === 'editing'" v-on:click="delPost(HTML._id)" class="btn-del">删除</a><a v-if="displaying === 'editing'" v-on:click="editPost(HTML)" class="btn-del">编辑</a></li>
            </ul>
          <li><a v-on:click="showCSS = !showCSS">2. CSS</a></li>
            <ul v-show="showCSS">
                <li v-for="CSS in CSSs" v-bind:key="CSS.id"><a v-on:click="loadToScreen(CSS.url)">{{ CSS.num }} - {{ CSS.title }}</a><a v-if="displaying === 'editing'" v-on:click="delPost(CSS._id)" class="btn-del">删除</a><a v-if="displaying === 'editing'" v-on:click="editPost(CSS)" class="btn-del">编辑</a></li>
            </ul>
          <li><a v-on:click="showJS = !showJS">3. JavaScipt</a></li>
            <ul v-show="showJS">
                <li v-for="JS in JSs" v-bind:key="JS.id"><a v-on:click="loadToScreen(JS.url)">{{ JS.num }} - {{ JS.title }}</a><a v-if="displaying === 'editing'" v-on:click="delPost(JS._id)" class="btn-del">删除</a><a v-if="displaying === 'editing'" v-on:click="editPost(JS)" class="btn-del">编辑</a></li>
            </ul>
          <li><a v-on:click="showVue = !showVue">4. Vue.JS</a></li>
            <ul v-show="showVue">
                <li v-for="Vue in Vues" v-bind:key="Vue.id"><a v-on:click="loadToScreen(Vue.url)">{{ Vue.num }} - {{ Vue.title }}</a><a v-if="displaying === 'editing'" v-on:click="delPost(Vue._id)" class="btn-del">删除</a><a v-if="displaying === 'editing'" v-on:click="editPost(Vue)" class="btn-del">编辑</a></li>
            </ul>
      </ul>
    </nav>
    <div class="IFEContent">
      <div v-if="displaying === 'loading'" class="loading-screen">
      </div>
      <Editor v-if="displaying === 'editing'" v-bind:toEdit="toEdit"></Editor>
      <div class="text-display" v-else>
        <h3 class="title-IFE">{{ displaying.num }} - {{ displaying.title }}</h3>
        <p class="date-IFE">最后更新于 {{ `${(new Date(displaying.createdAt)).getFullYear()} 年 ${(new Date(displaying.createdAt)).getMonth() + 1} 月` }}</p>
        <p v-html="displaying.text"></p>
        <div id="back-to-top" v-on:click="backToTop">
          <p>TOP</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostServiceIFE from '@/PostServiceIFE'
import LoginService from '@/LoginService'
import Editor from '@/components/Editor'

export default {
  name: 'InsightfulFrontEnd',
  components: {
    Editor
  },
  data: function () {
    return {
      intro: [{ title: '前言' }],
      HTMLs: [],
      CSSs: [],
      JSs: [],
      Vues: [],
      posts: [],
      displaying: '',
      error: '',
      showHTML: true,
      showCSS: true,
      showJS: true,
      showVue: true,
      loggedIn: false,
      toEdit: null
    }
  },
  methods: {
    hideTopNav: function (hide) {
      this.$emit('hideTopNav', hide)
    },
    loadToScreen: async function (url) {
      try {
        this.displaying = 'loading'
        this.displaying = await PostServiceIFE.getPost(`${url}`)
      } catch (err) {
        this.error = err
      }
    },
    delPost: function (id) {
      PostServiceIFE.deletePost(id)
      this.$router.go(0)
    },
    editPost: function (post) {
      this.toEdit = post
    },
    backToTop: function () {
      window.scrollTo(0, 0)
    }
  },
  async created () {
    try {
      [this.intro, this.HTMLs, this.CSSs, this.JSs, this.Vues] = await PostServiceIFE.getPosts()
      this.loggedIn = await LoginService.isLoggedIn()
    } catch (err) {
      this.error = err
    }
  },
  mounted () {
    this.loadToScreen('intro')
    this.hideTopNav(true)
  },
  unmounted () {
    this.hideTopNav(false)
  }
}
</script>

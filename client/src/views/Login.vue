<template>
  <div class="login">
    <h1>Login</h1>
    <input type="text" name="username" v-model="auth.username" placeholder="Username" />
    <input type="password" name="password" v-model="auth.password" placeholder="Password" />
    <button type="button" v-on:click="login">Login</button>
    <button type="button" v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import LoginService from '@/LoginService'

export default {
  name: 'Login',
  data: function () {
    return {
      auth: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login: function () {
      LoginService.login(this.auth)
    },
    logout: function () {
      LoginService.clear()
    }
  }
}
</script>

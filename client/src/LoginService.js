import axios from 'axios'

const baseURL = '/loginAPI/'

class LoginService {
  static async login (loginData) {
    const res = await axios({
      method: 'post',
      url: `${baseURL}login/`,
      data: loginData
    })

    const token = res.data.token ? res.data.token : null

    if (token) {
      localStorage.setItem('bearer-token', 'Bearer ' + token)
    }
  }

  static async isLoggedIn () {
    if (!localStorage.getItem('bearer-token')) {
      return false
    }
    const res = await axios({
      method: 'get',
      url: `${baseURL}validateToken`,
      headers: { Authorization: localStorage.getItem('bearer-token') }
    })
    const data = res.data

    if (data.name === 'JsonWebTokenError') {
      localStorage.removeItem('bearer-token')
      return false
    } else {
      return true
    }
  }

  static clear () {
    localStorage.removeItem('bearer-token')
  }
}

export default LoginService

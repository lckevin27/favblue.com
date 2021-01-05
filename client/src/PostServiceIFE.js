import axios from 'axios'

const url = 'http://localhost:3000/IFE/'

/* eslint-disable no-async-promise-executor */
/* eslint-disable func-call-spacing */

class PostServiceIFE {
  static getPosts () {
    return new Promise (async (resolve, reject) => {
      try {
        const res = await axios.get(url)
        const data = res.data

        resolve (
          data
        )
      } catch (err) {
        reject(err)
      }
    })
  }

  static getPost (targetURL) {
    return new Promise (async (resolve, reject) => {
      try {
        const res = await axios.get(targetURL)
        const data = res.data[0]

        resolve (
          data
        )
      } catch (err) {
        reject(err)
      }
    })
  }

  static getIntro () {
    return new Promise (async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}intro`)
        const data = res.data

        resolve (
          data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        )
      } catch (err) {
        reject(err)
      }
    })
  }

  static insertPost (IFEObj) {
    return axios({
      method: 'post',
      url: url,
      data: IFEObj,
      headers: { Authorization: localStorage.getItem('bearer-token') }
    })
  }

  static editPost (IFEObj, id) {
    return axios({
      method: 'post',
      url: `${url}edit/${id}`,
      data: IFEObj,
      headers: { Authorization: localStorage.getItem('bearer-token') }
    })
  }

  static deletePost (id) {
    return axios({
      method: 'delete',
      url: `${url}${id}`,
      headers: { Authorization: localStorage.getItem('bearer-token') }
    })
  }
}

export default PostServiceIFE

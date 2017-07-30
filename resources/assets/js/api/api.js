import Axios from 'axios'

export default class {
  get (url, params) {
    return Axios.get(url, {params})
  }

  post (url, payload) {
    return Axios.post(url, payload)
  }

  patch (url, payload) {
    return Axios.patch(url, payload)
  }

  deleteCall (url) {
    return Axios.delete(url)
  }
}
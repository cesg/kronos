import Api from './api'

export default class extends Api {

  index (params) {
    return this.get('/api/v1/tasks', params)
  }

  update (id, payload) {
    return this.patch(`/api/v1/tasks/${id}`, payload)
  }

  store (payload) {
    return this.post('/api/v1/tasks', payload)
  }

  destroy (id) {
    return this.deleteCall(`/api/v1/tasks/${id}`)
  }
}

<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-4">
          <div class="card">
            <div class="card-content">
              <p class="title has-text-centered">
                Login
              </p>
              <a
                class="button is-fullwidth is-success"
                :href="githubUrl"
              >
            <span class="icon">
              <i class="fa fa-github" aria-hidden="true"></i>
            </span>
                <span>
              Github
            </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import Axios from 'axios'

  export default {
    data () {
      return {
        githubUrl: ''
      }
    },
    created () {
      Axios.get('/login/github')
        .then(({data}) => {
          this.githubUrl = data
        })
    },
    methods: {}
  }
</script>
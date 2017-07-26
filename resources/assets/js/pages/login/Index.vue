<template>
  <div class="columns">
    <div class="column is-3">
      <div class="card">
        <div class="card-content">
          <p class="title">
            Login
          </p>
          <a
            class="button"
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
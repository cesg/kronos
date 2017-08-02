<template>
  <nav class="navbar" id="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="">
        Quid
      </a>
      <div class="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link
          class="navbar-item"
          :to="{name: 'today-view'}"
        >
          Home
        </router-link>
        <a
          class="navbar-item"
          v-show="authCheck"
          href="/logout"
        >
          Logout
        </a>
      </div>
    </div>
  </nav>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        authCheck: 'Auth/check'
      })
    }
  }
</script>
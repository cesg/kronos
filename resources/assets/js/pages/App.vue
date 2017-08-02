<template>
  <main>
    <navbar></navbar>
    <div class="tabs is-centered">
        <ul>
          <router-link tag="li" :to="{name: 'today-view'}">
            <a>Today</a>
          </router-link>
          <router-link tag="li" :to="{name: 'yesterday-view'}">
            <a>Yerterday</a>
          </router-link>
          <router-link tag="li" :to="{name: 'week-view'}">
            <a>Week</a>
          </router-link>
        </ul>
    </div>
    <section id="router-view">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </main>
</template>
<script>
  import Navbar from '../components/Navbar.vue'
  export default {
    components: {
      Navbar
    }
  }
</script>
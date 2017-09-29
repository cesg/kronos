<template>
  <main>
    <navbar v-if="showNavbar"></navbar>
    <div
      v-if="showMenu"
      class="tabs is-centered"
    >
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
        <router-view></router-view>
    </section>
  </main>
</template>
<script>
  import Navbar from '../components/Navbar.vue'
  export default {
    components: {
      Navbar
    },
    computed: {
      showNavbar () {
        return !this.$route.meta.hideNavbar
      },

      showMenu () {
        return !this.$route.meta.hideMenu
      }
    }
  }
</script>
<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <div class="container">

        <nuxt-link to="/" class="navbar-brand">JWTAUTH</nuxt-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/dashboard" class="nav-link">Dashboard</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/login" class="nav-link">Login</b-nav-item>
            <b-nav-item to="/register" class="nav-link">Register</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
    export default {
        name: "TopNav"
    }
</script>

<style scoped>

</style>

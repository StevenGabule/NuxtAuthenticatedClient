<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <div class="container">

        <nuxt-link to="/" class="navbar-brand">JWTAUTH</nuxt-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/dashboard" v-if="authenticated" class="nav-link">Dashboard</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <template v-if="authenticated">
              <b-nav-item-dropdown>
                <template slot="button-content">{{ user.name}}</template>
                <b-dropdown-item @click.prevent="SignOut">Sign-out</b-dropdown-item>
              </b-nav-item-dropdown>

            </template>
            <template v-else>
              <b-nav-item to="/auth/login" class="nav-link">Login</b-nav-item>
              <b-nav-item to="/auth/register" class="nav-link">Register</b-nav-item>
            </template>

          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
    export default {
        name: "TopNav",
        methods: {
            SignOut() {
                this.$auth.logout();
            }
        }
    }
</script>


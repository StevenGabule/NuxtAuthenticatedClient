<template>
  <div class="container">
    <h1>Welcome to the dashboard {{ user.name }}</h1>
  </div>
</template>

<script>
    export default {
        middleware: 'auth',
        name: "Dashboard"
    }
</script>

<style scoped>

</style>

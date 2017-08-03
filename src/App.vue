<template>
  <div id="app">
    <mt-header fixed title="Ripple Wallet"></mt-header>
    <div class="app-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app-wrapper {
  padding-top: 40px;
}
.form-control {
  margin-top: 10px;
}
</style>

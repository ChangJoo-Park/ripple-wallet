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
html {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.app-wrapper {
  margin-top: 50px;
}
.form-control {
  margin-top: 10px;
}
</style>

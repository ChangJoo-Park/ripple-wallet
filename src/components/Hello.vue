<template>
  <div id="main-page">
    <div class="form-control">
      <mt-button type="default" size="large">Create Wallet</mt-button>
    </div>
    <div class="form-control">
      <mt-button type="primary" size="large">Get the Wallet</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      active: null
    }
  }
}
</script>

<style scoped>
#main-page {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>

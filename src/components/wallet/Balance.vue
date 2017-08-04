<template lang="html">
  <div class="container-wrapper">
    <header class="header">
      <h1>Balance</h1>
    </header>
    <div class="balance-information">
      <span class="number">0</span>
      <span class="unit">XRP</span>
      <br>
      <mt-button type="primary">Reload</mt-button>
    </div>
    <div class="wallet-information">
      <span>Public Address </span>
      <strong>XXXXXXXXXXXXXXXXXXXXXXXXXXX</strong>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.balance-information {
  text-align: center;
  .number {
    font-size: 3rem;
  }
  .unit {
    font-size: 1rem;
  }
}
</style>

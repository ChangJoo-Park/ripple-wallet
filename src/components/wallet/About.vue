<template lang="html">
  <div class="container-wrapper">
    <mt-button type="danger" size="large" @click="handleRemoveWallet">Remove Wallet</mt-button>
  </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui'

export default {
  methods: {
    handleRemoveWallet () {
      const message = 'Are You Sure?'
      const title = 'Remove Wallet'
      MessageBox.confirm(message, title, {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel'
      }).then(action => {
        if (action === 'confirm') {
          this.removeWallet()
        }
      })
    },
    removeWallet () {
      const duration = 1000
      Toast({ message: 'Remove Success', duration })
      setTimeout(() => {
        this.backToMain()
      }, duration)
    },
    backToMain () {
      this.$router.push({
        name: 'no-wallet-page'
      })
    }
  }
}
</script>

<style lang="css">
</style>

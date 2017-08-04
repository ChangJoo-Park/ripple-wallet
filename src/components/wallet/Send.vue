<template lang="html">
  <div class="container-wrapper">
    <mt-field label="Receive" placeholder="XRP Address" v-model="send.receive"></mt-field>
    <mt-switch v-model="send.useDestinationTag">
      Use Destination Tag
    </mt-switch>
    <mt-field label="Destination" placeholder="Tag" v-model="send.destination" v-if="send.useDestinationTag"></mt-field>
    <mt-field label="XRP" placeholder="Amount" v-model="send.xrp"></mt-field>
    <mt-field label="Money" placeholder="Amount" v-model="send.money"></mt-field>
    <div class="form-control">
      <mt-button type="default" size="large" @click="resetSendForm">Reset</mt-button>
    </div>
    <div class="form-control">
      <mt-button type="primary" size="large" @click="handleSendXRP">Send</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui'

export default {
  data () {
    return {
      send: {
        receive: null,
        useDestinationTag: false,
        destination: null,
        xrp: 0,
        money: 0
      }
    }
  },
  methods: {
    handleSendXRP () {
      const message = 'Are You Sure?'
      const title = 'Send'
      MessageBox.confirm(message, title, {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel'
      }).then(action => {
        if (action === 'confirm') {
          const duration = 1000
          Toast({ message: 'Send Success', duration })
          setTimeout(() => {
            this.resetSendForm()
          }, duration)
        }
      })
    },
    resetSendForm () {
      this.send = {
        receive: null,
        useDestinationTag: false,
        destination: null,
        amount: 0,
        money: 0
      }
    }
  }
}
</script>

<style lang="css">
</style>

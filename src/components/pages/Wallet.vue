<template lang="html">
  <div class="wallet-page">
    <mt-tabbar v-model="selected">
      <mt-tab-item id="balance">
        <img slot="icon" src="http://via.placeholder.com/100x100">
        Balance
      </mt-tab-item>
      <mt-tab-item id="send">
        <img slot="icon" src="http://via.placeholder.com/100x100">
        Send
      </mt-tab-item>
      <mt-tab-item id="about">
        <img slot="icon" src="http://via.placeholder.com/100x100">
        About
      </mt-tab-item>
    </mt-tabbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="balance">
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
      </mt-tab-container-item>
      <mt-tab-container-item id="send">
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
      </mt-tab-container-item>
      <mt-tab-container-item id="about">
        <div class="container-wrapper">
          <mt-button type="danger" size="large" @click="handleRemoveWallet">Remove Wallet</mt-button>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>


  </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui'

export default {
  data () {
    return {
      selected: 'send',
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
    },
    backToMain () {
      this.$router.push({
        name: 'no-wallet-page'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wallet-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  .header {
    text-align: center;
  }
}
.balance-information {
  text-align: center;
  .number {
    font-size: 3rem;
  }
  .unit {
    font-size: 1rem;
  }
}
.wallet-information {
  margin-top: 5px;
  text-align: center;
}

.container-wrapper {
  padding: 5px;
}
</style>

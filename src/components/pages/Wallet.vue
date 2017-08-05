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
    <transition
      name="tab-container-transition"
      enter-active-class="animated fadeIn"
      mode="out-in"
      appear
    >
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="balance">
          <balance-tab></balance-tab>
        </mt-tab-container-item>
        <mt-tab-container-item id="send">
          <send-tab></send-tab>
        </mt-tab-container-item>
        <mt-tab-container-item id="about">
          <about-tab></about-tab>
        </mt-tab-container-item>
      </mt-tab-container>
    </transition>
  </div>
</template>

<script>
import BalanceTab from '@/components/wallet/Balance'
import SendTab from '@/components/wallet/Send'
import AboutTab from '@/components/wallet/About'

export default {
  components: {
    BalanceTab,
    SendTab,
    AboutTab
  },
  data () {
    return {
      selected: 'balance'
    }
  },
  methods: {

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
.wallet-information {
  margin-top: 5px;
  text-align: center;
}

.container-wrapper {
  padding: 5px;
}
</style>

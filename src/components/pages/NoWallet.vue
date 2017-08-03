<template>
  <div id="main-page">
    <!-- Form -->
    <form @submit.prevent="handleSubmit" v-if="currentOption !== null">
      <div v-if="currentOption === 'create'">
        <mt-field @focus label="Crypto Key" placeholder="Input Salt" v-model="filed"></mt-field>
      </div>
      <div v-if="currentOption === 'get'">
        <mt-field @focus label="Wallet" placeholder="Input Wallet Id" v-model="filed"></mt-field>
      </div>
    </form>
    <!-- Actions -->
    <div class="">
      <!-- Select Actions -->
      <div class="" v-if="currentOption === null">
        <div class="form-control">
          <mt-button type="default" size="large" @click="currentOption = 'create'">
            Create Wallet
          </mt-button>
        </div>
        <div class="form-control">
          <mt-button type="primary" size="large" @click="currentOption = 'get'">
            Get the Wallet
          </mt-button>
        </div>
      </div>
      <!-- Form Actions -->
      <div class="form-control" v-else>
        <mt-button type="primary" size="large" @click.prevent="handleSubmit">
          Confirm
        </mt-button>
        <br>
        <mt-button type="danger" size="large" @click="currentOption = null">
          Cancel
        </mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addOptions: ['create', 'get'],
      currentOption: null,
      filed: ''
    }
  },
  methods: {
    handleSubmit () {
      switch (this.currentOption) {
        case 'create':
          break
        case 'get':
          break
        default:
          break
      }
      this.currentOption = null
      this.moveWallet()
      console.log('hello')
    },
    moveWallet () {
      // TODO: Add Parameters
      console.log(this.$router)
      this.$router.push({
        name: 'wallet-page'
      })
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

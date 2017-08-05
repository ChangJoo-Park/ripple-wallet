<template>
  <div id="main-page">
    <!-- Form -->

      <div class="upper-wrapper" v-if="currentOption === null">
        <transition
          name="logo-classes-transition"
          enter-active-class="animated tada"
          enter-leave-class="animated bounceOutRight"
          mode="out-in"
          appear
        >
          <h1 class="logo">&#128179;</h1>
        </transition>
      </div>
      <form class="upper-wrapper" @submit.prevent="handleSubmit" v-else>
        <transition
          name="form-classes-transition"
          enter-active-class="animated fadeIn"
          appear
        >
          <div v-if="currentOption === 'create'">
            <mt-field ref='createInput' label="Crypto Key" placeholder="Input Salt" v-model="field"></mt-field>
          </div>
          <div v-if="currentOption === 'get'">
            <mt-field ref='getInput' label="Wallet" placeholder="Input Wallet Id" v-model="field"></mt-field>
          </div>
        </transition>
      </form>

    <!-- Actions -->
    <div class="">
      <!-- Select Actions -->
      <transition
        name="form-classes-transition"
        enter-active-class="animated fadeIn"
        appear
      >
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
        <div v-else>
          <div class="form-control">
            <mt-button type="primary" size="large" @click.prevent="handleSubmit">
              Confirm
            </mt-button>
          </div>
          <div class="form-control">
            <mt-button type="danger" size="large" @click="currentOption = null">
              Cancel
            </mt-button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addOptions: ['create', 'get'],
      currentOption: null,
      field: ''
    }
  },
  watch: {
    currentOption (newVal, oldVal) {
      if (oldVal !== null) {
        return
      }
      this.$nextTick(() => {
        this.field = ''
        const input = this.$refs[`${newVal}Input`]
                      .$el.querySelector('.mint-field-core')
        if (input) {
          input.focus()
        }
      })
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

.upper-wrapper {
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  font-size: 5rem;
}
</style>

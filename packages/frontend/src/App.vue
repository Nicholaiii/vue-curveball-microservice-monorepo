<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld :msg="abe.name"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import type { Person } from '../../common/src/structures/person'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup () {
    const abe: Person = {
      name: 'Example Stuff',
      pets: []
    }

    return {
      abe
    }
  }
})
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>

<template>
  <div id="app">
    <Nav>
      <router-link class="mx-4" to="/">Home</router-link>
      <router-link class="mx-4" to="/cv">CV</router-link>
      <!-- <router-link class="mx-4" to="/test">Contact</router-link> -->
    </Nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Nav from '@/components/Nav.vue'

@Component({
  components: {
    Nav,
  },
})
export default class App extends Vue {}
</script>
<style lang="scss">
@import './styles/global';
</style>



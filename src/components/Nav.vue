<template>
  <nav class="nav mb-3 py-2">
    <slot/>
  </nav>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Nav extends Vue {}
</script>
<style scoped>
.nav {
  /* position: -webkit-sticky; */
  position: sticky;
  top: 0;
  background-color: var(--color-navbar);
  display: inline-flex;
  width: 100%;
  justify-content: space-evenly;
  /* padding: 5px; */

  /* border: 2px solid #4caf50; */
}

.nav a {
  font-weight: bold;
  text-decoration: none;
  color: var(--color-black);
  transition: font-size 0.7s;
}

.nav a:hover {
  font-size: var(--bigger-font-size);
}

.nav a.router-link-exact-active {
  color: var(--color-active-link);
  text-decoration: underline;
}
</style>

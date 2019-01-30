<template>
  <nav class="nav py-2">
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
  position: sticky;
  top: 0;
  background-color: var(--primary-color);
  display: inline-flex;
  width: 100%;
  justify-content: flex-end;
}

.nav a {
  font-weight: bold;
  text-decoration: none;
  color: var(--background-color);
  transition: font-size 0.7s;
}

.nav a:hover {
  font-size: var(--bigger-font-size);
}

.nav a.router-link-exact-active {
  color: var(--active-color);
  text-decoration: underline;
}
</style>

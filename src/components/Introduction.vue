<template>
  <div class="introduction-container mb-1 py-2">
    <div class="introduction">
      <h1 class="greeting">Hello!</h1>
      <p>
        My name ist Martin Kireew. I live in Berlin and work as full stack
        developer.
      </p>
      <p>
        I'm a big entusiast of new tech. I always try to stay up-to-date by
        following all trends.
      </p>
      <p>
        Right now I'm more focusing on frontend tech because of its
        evolving.
      </p>
    </div>
    <div class="side-text-container pt-4">
      <h1 class="big-side-text">Martin</h1>
      <h1 class="big-side-text">Kireew</h1>
      <h1 class="big-side-text">Berlin</h1>
      <h1 class="big-side-text">Germany</h1>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class Introduction extends Vue {}
</script>
<style scoped>
.introduction-container {
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
}

.introduction-container::after {
  content: '';
  position: absolute;
  left: -10vw;
  top: 0;
  width: 100vw;
  height: 100%;
  z-index: -1;
  background-image: var(--primary-linear-gradient);
}

.introduction {
  display: block;
  text-align: left;
  width: 30vw;
  line-height: 2;
}

.greeting {
  font-size: var(--h1-font-size);
}
.side-text-container {
  /* width: 40%; */
  line-height: 0.4;
  text-align: right;
}
.big-side-text {
  font-size: 12vh;
  text-shadow: 5px 7px 20px var(--background-color);
}
</style>



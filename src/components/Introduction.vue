<template>
  <div class="introduction-container mb-1 py-2">
    <img
      class="introduction-image"
      src="../assets/nerd_2.jpg"
      alt="Picture of guy in front of computers"
    >
    <div class="side-text-container pt-4">
      <h1 class="big-side-text">Martin</h1>
      <h1 class="big-side-text">Kireew</h1>
      <h1 class="big-side-text">Berlin</h1>
    </div>
    <div class="introduction px-2">
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
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class Introduction extends Vue {}
</script>
<style lang="scss" scoped>
.introduction-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: var(--medium-space);
  grid-column-gap: var(--medium-space);

  position: relative;
  justify-items: center;
  @include media-query-phone {
    justify-items: left;
    grid-template-columns: 1fr;
    grid-column-gap: 0;
  }
}

.introduction-image {
  grid-column: 1;
  grid-row: 1 / 3;
  border-radius: var(--standard-border-radius);
  width: 38vw;
  height: 100%;

  @include media-query-phone {
    grid-row: 2;
    width: 80vw;
  }
}

.introduction {
  grid-column: 3;
  grid-row: 2;
  display: block;
  text-align: left;
  width: 40vw;
  line-height: 2;
  border: var(--primary-border);
  border-radius: var(--standard-border-radius);
  background-color: var(--background-color);
  transition: background-color 500ms ease-in-out, color 500ms ease-in-out;

  &:hover {
    background-color: var(--primary-color);
    color: var(--background-color);
  }
  @include media-query-phone {
    grid-column: 1;
    grid-row: 3;
    width: 60vw;
  }
}

.greeting {
  font-size: var(--h1-font-size);
}
.side-text-container {
  grid-column: 3;
  grid-row: 1;
  /* width: 40%; */
  line-height: 0.4;
  text-align: right;

  @include media-query-phone {
    grid-column: 1;
  }
}
.big-side-text {
  font-size: 12vh;
  letter-spacing: 2vh;
  text-shadow: 5px 7px 20px var(--background-color);

  @include media-query-phone {
    font-size: 8vh;
  }
}
</style>



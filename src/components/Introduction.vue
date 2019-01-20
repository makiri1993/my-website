<template>
  <div class="container mb-4">
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
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class Introduction extends Vue {
  @Prop() private testMessage: string = 'Hello World'
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.introduction {
  display: block;
  text-align: left;
  line-height: 2;
}

.greeting {
  font-size: var(--h1-font-size);
}
</style>



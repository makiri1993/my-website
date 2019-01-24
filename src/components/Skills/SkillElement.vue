<template>
  <div
    class="skill-element mr-3 mb-3 py-4 px-5"
    :style="getLevel"
    data-aos="zoom-in"
    :data-aos-delay="delay"
  >
    <p>{{skill.name}}</p>
    <p class="description">{{skill.description}}</p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Properties } from 'csstype'
import { SkillsData } from '@/components/Skills/Skills.vue'

@Component
export default class SkillElement extends Vue {
  @Prop() private skill!: SkillsData
  private delay: number = 0

  private created() {
    this.delay = this.skill.level * 30
  }

  private get getLevel(): Properties {
    return { backgroundColor: `rgb(66,185,128,${this.skill.level / 100})` }
  }
}
</script>
<style scoped>
.skill-element {
  display: block;
  border-radius: var(--standard-border-radius);
  border: var(--standard-border);
  background-color: var(--color-green);
  text-align: left;
}

.description {
  font-size: var(--smaller-font-size);
}
</style>

<template>
  <div
    class="skill-element mr-3 mb-3 py-4 px-5"
    :style="{'--background-opacity': getLevel,animationDelay: getDelay}"
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

  private get getLevel(): string {
    return `${this.skill.level}%`
  }

  private get getDelay(): string {
    return `${this.skill.level * 20}ms`
  }
}
</script>
<style scoped>
.skill-element {
  --background-opacity: 100%;
  display: block;
  position: relative;
  border: none;
  text-align: left;
  opacity: 0;
  animation: zoomIn 800ms;
  animation-fill-mode: forwards;
}

.skill-element::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: var(--standard-border-radius);
  background-color: var(--color-green);
  filter: opacity(var(--background-opacity));
}

.description {
  font-size: var(--smaller-font-size);
}

@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  100% {
    opacity: 1;
  }
}
</style>

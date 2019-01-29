<template>
  <div class="skill-grid mx-2 mt-2">
    <div
      class="skill-element px-3 py-2"
      data-aos="zoom-in"
      :data-aos-delay="getDelay"
      data-aos-once="true"
    >
      <p class="skill">{{skill.name}}</p>
      <p class="description">{{skill.description}}</p>
      <div class="skill-element-background" :style="{'--background-opacity': getLevel}"></div>
    </div>
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
    this.delay = (this.skill.level / 10) * 50
  }

  private get getLevel(): string {
    return `${this.skill.level}%`
  }

  private get getDelay(): number {
    return this.skill.level * 30
  }
}
</script>
<style scoped>
.skill-grid {
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: max-content;
  height: fit-content;
  align-items: center;
  --background-opacity: 100%;
}
.skill-element {
  grid-area: 1 / 1 / 1 / 1;
  border: none;
  text-align: left;
  opacity: 0;
  /* animation: zoomIn 800ms;
  animation-fill-mode: forwards; */
  color: var(--background-color);
}

.skill-element-background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  z-index: -1;
  border-radius: var(--standard-border-radius);
  background-color: var(--primary-color);
  filter: opacity(var(--background-opacity));
}

.skill {
  font-weight: 900;
}

.description {
  font-size: var(--smaller-font-size);
}

/* @keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  100% {
    opacity: 1;
  }
} */
</style>

<template>
  <div class="skill-container">
    <SkillElement v-for="(el,index) in skills" :key="index" :skill="el"/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import SkillElement from '@/components/Skills/SkillElement.vue'
import { Prop } from 'vue-property-decorator'

export enum SKillLevel {
  BEGINNER = '',
  INTERMEDIATE = '',
  HOBBY = '',
}

export interface SkillsData {
  name: string
  level: SKillLevel
}

@Component({
  components: {
    SkillElement,
  },
})
export default class Skills extends Vue {
  @Prop() private skills!: SkillsData[]
}
</script>
<style scoped>
.skill-container {
  display: flex;
  flex-direction: row;
  width: 100%;
}
</style>

<template>
  <div class="skill-element mx-3 py-4 px-5" :style="skill.level">{{skill.name}}</div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { SkillsData } from '@/components/Skills/Skills.vue'

@Component
export default class SkillElement extends Vue {
  @Prop() private skill!: SkillsData
}
</script>
<style scoped>
.skill-element {
  display: block;
  border-radius: var(--standard-border-radius);
  border: var(--standard-border);
}
</style>

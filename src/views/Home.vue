<template>
  <div class="home">
    <Introduction/>
    <Skills :skills="skills"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Introduction from '@/components/Introduction.vue'
import Skills, { SkillsData } from '@/components/Skills/Skills.vue'

@Component({
  components: {
    Introduction,
    Skills,
  },
})
export default class Home extends Vue {
  private skills: SkillsData[] = [
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
    { name: 'Test' },
  ]
}
</script>
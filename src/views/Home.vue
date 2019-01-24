<template>
  <div class="home">
    <Introduction/>
    <Skills :skills="skills"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Introduction from '@/components/Introduction.vue'
import Skills, { SkillsData, Category } from '@/components/Skills/Skills.vue'

@Component({
  components: {
    Introduction,
    Skills,
  },
})
export default class Home extends Vue {
  private skills: SkillsData[] = [
    { name: 'HTML', description: 'enough for every skeleton', level: 80, category: Category.PROGRAMMING },
    { name: 'CSS', description: 'in mastering', level: 70, category: Category.PROGRAMMING },
    { name: 'Javascript', description: 'new language features', level: 90, category: Category.PROGRAMMING },
    { name: 'Typescript', description: 'since version 2', level: 70, category: Category.PROGRAMMING },
    { name: 'Java', description: 'only java7', level: 90, category: Category.PROGRAMMING },
    { name: 'C++', description: 'basics', level: 20, category: Category.PROGRAMMING },
    { name: 'IntelliJ', description: 'nothing better for backend', level: 85, category: Category.IDE },
    { name: 'Swift 4', description: 'basics', level: 20, category: Category.PROGRAMMING },
    { name: 'Visual Studio Code', description: 'always and forever', level: 95, category: Category.IDE },
    { name: 'ReactJS', description: 'ready to build everything', level: 95, category: Category.FRAMEWORK },
    { name: 'VueJS', description: 'experiencing the learning cure', level: 70, category: Category.FRAMEWORK },
    { name: 'GatsbyJS', description: 'from the beginning', level: 80, category: Category.FRAMEWORK },
    { name: 'Jest', description: 'way to go', level: 40, category: Category.PROGRAMMING },
    { name: 'Webpack', description: 'better stay default', level: 55, category: Category.PROGRAMMING },
    { name: 'OOP', description: 'Since 2012', level: 100, category: Category.PROGRAMMING },
    { name: 'UI - Design', description: 'for different projects', level: 65, category: Category.DESIGN },
    { name: 'Node.js', description: 'private usage', level: 50, category: Category.PROGRAMMING },
    { name: 'KOA', description: 'private usage', level: 50, category: Category.FRAMEWORK },
    { name: 'REST', description: 'work experience', level: 70, category: Category.PROGRAMMING },
    { name: 'Spring', description: 'some time ago', level: 50, category: Category.FRAMEWORK },
    { name: 'UX - Design', description: 'for different projects', level: 65, category: Category.DESIGN },
    { name: 'Eclipse', description: 'in former time', level: 65, category: Category.IDE },
  ]
}
</script>
<template>
  <div class="skills-container">
    <div class="category-buttons-container mb-3">
      <button class="mr-2" @click="handleCategories('all')">All</button>
      <button class="mr-2" @click="handleCategories('programming')">Programming Languages</button>
      <button class="mr-2" @click="handleCategories('ide')">IDEs</button>
      <button class="mr-2" @click="handleCategories('framework')">Frameworks</button>
      <button class="mr-2" @click="handleCategories('design')">Design</button>
    </div>
    <div class="skill-container">
      <SkillElement
        v-for="(el,index) in skills"
        :key="index"
        :skill="el"
        v-show="getShowForCategory(el.category)"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import SkillElement from '@/components/Skills/SkillElement.vue'
import { Prop } from 'vue-property-decorator'

export enum Category {
  ALL = 'all',
  PROGRAMMING = 'programming',
  IDE = 'ide',
  FRAMEWORK = 'framework',
  DESIGN = 'design',
}

export interface SkillsData {
  name: string
  description: string
  level: number
  category: Category
}

@Component({
  components: {
    SkillElement,
  },
})
export default class Skills extends Vue {
  @Prop() private skills!: SkillsData[]
  private showProgramming: boolean = true
  private showIde: boolean = true
  private showFramework: boolean = true
  private showDesign: boolean = true

  private handleCategories(category: Category): void {
    switch (category) {
      case Category.ALL:
        this.showProgramming = true
        this.showIde = true
        this.showFramework = true
        this.showDesign = true
        break
      case Category.PROGRAMMING:
        this.showProgramming = true
        this.showIde = false
        this.showFramework = false
        this.showDesign = false
        break
      case Category.IDE:
        this.showProgramming = false
        this.showIde = true
        this.showFramework = false
        this.showDesign = false
        break
      case Category.FRAMEWORK:
        this.showProgramming = false
        this.showIde = false
        this.showFramework = true
        this.showDesign = false
        break
      case Category.DESIGN:
        this.showProgramming = false
        this.showIde = false
        this.showFramework = false
        this.showDesign = true
        break
    }
  }

  private getShowForCategory(category: Category): boolean {
    switch (category) {
      case Category.PROGRAMMING:
        return this.showProgramming
      case Category.IDE:
        return this.showIde
      case Category.FRAMEWORK:
        return this.showFramework
      case Category.DESIGN:
        return this.showDesign
    }
    return true
  }
}
</script>
<style scoped>
.skills-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.category-buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: start;
}

.skill-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>

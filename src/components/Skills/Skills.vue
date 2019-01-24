<template>
  <div class="skills-container pt-2">
    <div class="category-buttons-container mb-3">
      <button class="skill-button mr-1" @click="handleCategories('all')">All</button>
      <button
        class="skill-button mr-1"
        @click="handleCategories('programming')"
      >Programming Languages</button>
      <button class="skill-button mr-1" @click="handleCategories('ide')">IDEs</button>
      <button class="skill-button mr-1" @click="handleCategories('framework')">Frameworks</button>
      <button class="skill-button mr-1" @click="handleCategories('design')">Design</button>
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
  private showArray: boolean[] = [true, true, true, true]
  private showProgramming: boolean = true
  private showIde: boolean = true
  private showFramework: boolean = true
  private showDesign: boolean = true

  private handleCategories(category: Category): void {
    switch (category) {
      case Category.ALL:
        this.showArray = this.showArray.map(() => true)
        break
      case Category.PROGRAMMING:
        this.showArray = this.showArray.map((el, index) => (index === 0 ? true : false))
        break
      case Category.IDE:
        this.showArray = this.showArray.map((el, index) => (index === 1 ? true : false))
        break
      case Category.FRAMEWORK:
        this.showArray = this.showArray.map((el, index) => (index === 2 ? true : false))
        break
      case Category.DESIGN:
        this.showArray = this.showArray.map((el, index) => (index === 3 ? true : false))
        break
    }
  }

  private getShowForCategory(category: Category): boolean {
    switch (category) {
      case Category.PROGRAMMING:
        return this.showArray[0]
      case Category.IDE:
        return this.showArray[1]
      case Category.FRAMEWORK:
        return this.showArray[2]
      case Category.DESIGN:
        return this.showArray[3]
    }
    return true
  }
}
</script>
<style scoped>
.skills-container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.skills-container::after {
  content: '';
  position: absolute;
  left: -10vw;
  top: 0;
  width: 100vw;
  height: 100%;
  z-index: -1;
  background-color: var(--background-color);
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

.skill-button {
  border: none;
  background-color: var(--primary-color);
  transition: background-color 500ms;
}

.skill-button:hover {
  background-color: var(--active-color);
}
</style>

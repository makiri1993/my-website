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
    <img src="../../assets/minimal.jpg" alt="Image of technical stuff" class="skill-image">
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import SkillElement from '@/components/Skills/SkillElement.vue'
import { Prop } from 'vue-property-decorator'
import AOS from 'aos'
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

  private handleCategories(category: Category): void {
    AOS.refreshHard()
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
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, max-content);
  position: relative;
  width: 100%;
}

.category-buttons-container {
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: row;
  justify-content: start;
}

.skill-container {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 10;
}

.skill-button {
  border: var(--primary-border);
  border-radius: var(--standard-border-radius);
  background-color: transparent;
  color: var(--primary-color);
  transition: background-color 500ms ease-in-out, color 500ms ease-in-out;
}

.skill-button:hover {
  background-color: var(--primary-color);
  color: var(--background-color);
}

.skill-image {
  grid-area: 2/ 1 / 2 / 1;
  z-index: 1;
  border-radius: var(--standard-border-radius);
  width: 100%;
}
</style>

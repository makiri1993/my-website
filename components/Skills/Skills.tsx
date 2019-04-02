import Vue from 'vue'
import Component from 'vue-class-component'
import SkillElement from '@/components/Skills/SkillElement'
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

// tslint:disable-next-line: no-var-requires
const techImage = require('../../static/minimal.jpg')

@Component
export default class Skills extends Vue {
  @Prop() private skills!: SkillsData[]
  private showArray: boolean[] = [true, true, true, true]

  render() {
    return (
      <div class='skills-container pt-2'>
        <div class='category-buttons-container'>
          <button class='skill-button mr-1 mb-3' onClick={() => this.handleCategories(Category.ALL)}>
            All
          </button>
          <button class='skill-button mr-1 mb-3' onClick={() => this.handleCategories(Category.PROGRAMMING)}>
            Programming Languages
          </button>
          <button class='skill-button mr-1 mb-3' onClick={() => this.handleCategories(Category.IDE)}>
            IDEs
          </button>
          <button class='skill-button mr-1 mb-3' onClick={() => this.handleCategories(Category.FRAMEWORK)}>
            Frameworks
          </button>
          <button class='skill-button mr-1 mb-3' onClick={() => this.handleCategories(Category.DESIGN)}>
            Design
          </button>
        </div>
        <div class='skill-container'>{this.skills.map(el => (this.getShowForCategory(el.category) ? <SkillElement skill={el} /> : null))}</div>
        <img src={techImage} alt='Image of technical stuff' class='skill-image' />
      </div>
    )
  }
  private handleCategories(category: Category): void {
    AOS.refreshHard()
    switch (category) {
      case Category.ALL:
        this.showArray = this.showArray.map(() => true)
        break
      case Category.PROGRAMMING:
        this.showArray = this.showArray.map((_el, index) => (index === 0 ? true : false))
        break
      case Category.IDE:
        this.showArray = this.showArray.map((_el, index) => (index === 1 ? true : false))
        break
      case Category.FRAMEWORK:
        this.showArray = this.showArray.map((_el, index) => (index === 2 ? true : false))
        break
      case Category.DESIGN:
        this.showArray = this.showArray.map((_el, index) => (index === 3 ? true : false))
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

import { SkillsData } from '@/components/Skills/Skills'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class SkillElement extends Vue {
  @Prop() private skill!: SkillsData
  // private delay: number = 0

  // private created() {
  // this.delay = (this.skill.level / 10) * 50
  // }

  private get getLevel(): string {
    return `${this.skill.level}%`
  }

  private get getDelay(): number {
    return this.skill.level * 30
  }

  render() {
    return (
      <div class='skill-grid mx-2 mt-2'>
        <div class='skill-element px-3 py-2' data-aos='zoom-in' data-aos-delay={this.getDelay} data-aos-once='true'>
          <p class='skill'>{this.skill.name}</p>
          <p class='description'>{this.skill.description}</p>
          <div class='skill-element-background' style={`--background-opacity: ${this.getLevel}`} />
        </div>
      </div>
    )
  }
}

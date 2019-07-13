import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Properties } from 'csstype'
import TimelineElement from '@/components/Timeline/TimelineElement'

export enum Icon {
  EDUCATION = 'graduation-cap',
  PROJECT = 'project-diagram',
  TERMINAL = 'terminal',
}

export enum TimelineElementPosition {
  LEFT = 1,
  RIGHT = 3,
}

export interface TimelineElementData {
  id: number
  header: string
  subheader: string
  place: string
  time: string
  information: string
  position: TimelineElementPosition
  icon: Icon
}

@Component
export default class TimelineContainer extends Vue {
  @Prop() private timelineElements!: TimelineElement[]

  private get getGridRows(): Properties {
    return {
      gridTemplateRows: `repeat(${this.timelineElements.length}, max-content)`,
    }
  }
  render() {
    return (
      <div class='timeline-container mt-4' style={this.getGridRows}>
        <div class='timeline' />
        {this.timelineElements.map((el, index) => (
          <TimelineElement timelineData={el} index={index} />
        ))}
      </div>
    )
  }
}

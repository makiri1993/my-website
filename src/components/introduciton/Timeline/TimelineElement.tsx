import { TimelineElementData, TimelineElementPosition } from '@/components/Timeline/TimelineContainer'
import { Properties, TextAlignProperty } from 'csstype'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class TimelineElement extends Vue {
  @Prop() private timelineData!: TimelineElementData
  @Prop() private index!: number
  private contentAlignment: Properties | null = null
  private iconAlignment: Properties | null = { fontSize: 'var(--icon-font-size)' }
  private animationDirection: string = ''

  created() {
    this.getJustifying()
  }

  private get timelineElementPosition(): Properties {
    const column: number = this.timelineData.position
    const row: number = this.index + 1
    const textAlign: TextAlignProperty = TimelineElementPosition[column].toLowerCase() as TextAlignProperty

    return {
      gridColumn: column,
      gridRow: row,
      textAlign,
    }
  }

  private getJustifying(): void {
    const alignStart: Properties = { alignSelf: 'start' }
    const alignEnd: Properties = { alignSelf: 'end' }

    if (this.timelineData.position === TimelineElementPosition.LEFT) {
      this.contentAlignment = alignStart
      this.iconAlignment = { ...this.iconAlignment, ...alignEnd }
      this.animationDirection = 'zoom-out-right'
    } else {
      this.contentAlignment = alignEnd
      this.iconAlignment = { ...this.iconAlignment, ...alignStart }
      this.animationDirection = 'zoom-out-left'
    }
  }

  render() {
    return (
      <div class='timeline-element' style={this.timelineElementPosition} data-aos={this.animationDirection} data-aos-delay='400' data-aos-once='true'>
        <font-awesome-icon icon={this.timelineData.icon} class='mb-1' style={this.iconAlignment} />
        <div class='timeline-element-border' style={this.contentAlignment} />
        <h2 class='timeline-content' style={this.contentAlignment}>
          {this.timelineData.header}
        </h2>
        <h3 class='timeline-content' style={this.contentAlignment}>
          {this.timelineData.subheader}
        </h3>
        <h4 class='timeline-content mb-1' style={this.contentAlignment}>
          {this.timelineData.place} | {this.timelineData.time}
        </h4>
        <p class='timeline-content' style={this.contentAlignment}>
          {this.timelineData.information}
        </p>
      </div>
    )
  }
}

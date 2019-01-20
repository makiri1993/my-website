<template>
  <div
    class="timeline-element"
    :style="timelineElementPosition"
    :data-aos="animationDirection"
    data-aos-delay="400"
  >
    <font-awesome-icon :icon="timelineData.icon" class="mb-1" :style="iconAlignment"></font-awesome-icon>
    <div class="timeline-element-border" :style="contentAlignment"/>
    <h2 class="timeline-content" :style="contentAlignment">{{timelineData.header}}</h2>
    <h3 class="timeline-content" :style="contentAlignment">{{timelineData.subheader}}</h3>
    <h4
      class="timeline-content mb-1"
      :style="contentAlignment"
    >{{timelineData.place}} | {{timelineData.time}}</h4>
    <p class="timeline-content" :style="contentAlignment">{{timelineData.information}}</p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { Properties, TextAlignProperty } from 'csstype'
import { TimelineElementData, TimelineElementPosition } from '@/components/Timeline/TimelineContainer.vue'

@Component
export default class TimelineElement extends Vue {
  @Prop() private timelineData!: TimelineElementData
  @Prop() private index!: number
  private contentAlignment: Properties | null = null
  private iconAlignment: Properties | null = null
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
      this.iconAlignment = alignEnd
      this.animationDirection = 'zoom-out-right'
    } else {
      this.contentAlignment = alignEnd
      this.iconAlignment = alignStart
      this.animationDirection = 'zoom-out-left'
    }
  }
}
</script>
<style scoped>
.timeline-element {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  white-space: pre-line;
}

.timeline-element-border {
  border-top: solid;
  border-top-width: 2px;
  border-color: var(--color-black);
  width: 100%;
}
</style>

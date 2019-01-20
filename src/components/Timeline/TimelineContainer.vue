<template>
  <div class="timeline-container" :style="getGridRows()">
    <div class="timeline"/>
    <TimelineElement
      v-for="(el,index) in timelineElements"
      :key="el.id"
      :timelineData="el"
      :index="index"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import TimelineElement from '@/components/Timeline/TimelineElement.vue'

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

@Component({
  components: {
    TimelineElement,
  },
})
export default class TimelineContainer extends Vue {
  @Prop() private timelineElements!: TimelineElement[]

  private getGridRows(): string {
    return `grid-template-rows: repeat(${this.timelineElements.length}, max-content);`
  }
}
</script>
<style scoped>
.timeline-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: var(--large-space);
  grid-row-gap: var(--large-space);
  width: 100%;
}

.timeline {
  grid-column: 2;
  grid-row: 1 / end;
  justify-self: center;
  height: 100%;
  width: 4px;
  background: var(--color-black);
}

/* .timeline-element-marker-left {
  content: '\A';
  border-style: solid;
  border-width: 10px 15px 10px 0;
  border-color: transparent var(--color-black) transparent transparent;
  position: absolute;
  top: 30%;
  left: 30%;
}

.timeline-element-marker-right {
  content: '\A';
  border-style: solid;
  border-width: 10px 15px 10px 0;
  border-color: transparent var(--color-black) transparent transparent;
  transform: rotate(180deg);
  position: absolute;
  top: 30%;
  right: 30%;
} */
</style>

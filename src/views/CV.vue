<template>
  <TimelineContainer :timelineElements="timelineElements"/>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import TimelineContainer, {
  TimelineElementData,
  TimelineElementPosition,
  Icon,
} from '@/components/Timeline/TimelineContainer.vue'

@Component({
  components: {
    TimelineContainer,
  },
})
export default class CV extends Vue {
  private timelineElements: TimelineElementData[] = [
    {
      id: 1,
      header: 'Full Stack Developer',
      subheader: 'Schütze Consulting AG',
      place: 'Berlin',
      time: 'August 2018 - January 2019',
      information: 'Javascript, Typescript, Webpack, React, Java, Maven, Docker',
      position: TimelineElementPosition.LEFT,
      icon: Icon.PROJECT,
    },
    {
      id: 2,
      header: 'Website for immajung',
      subheader: 'Freelancing',
      place: 'Remote',
      time: 'August 2018',
      information: 'Another project with typescript, react, gatsby, netlifyCMS and styled-components.',
      position: TimelineElementPosition.RIGHT,
      icon: Icon.TERMINAL,
    },
    {
      id: 3,
      header: 'Website for Interkultureller Sozialdienst',
      subheader: 'Freelancing',
      place: 'Remote',
      time: 'June 2018',
      information: 'First project with typescript, react, gatsby and styled-components.',
      position: TimelineElementPosition.LEFT,
      icon: Icon.TERMINAL,
    },
    {
      id: 4,
      header: 'IT Consultant',
      subheader: 'ITP Nord GmbH',
      place: 'Hanover',
      time: 'February 2018 - July 2018',
      information:
        'Finanz Informatik GmbH:\n Worked with OSPlus Framework.Developing banking Proof of Concepts. Deep dive into market risk management',
      position: TimelineElementPosition.RIGHT,
      icon: Icon.PROJECT,
    },
    {
      id: 5,
      header: 'App for Testing Department (automotive industry)',
      subheader: 'Freelancing',
      place: 'Remote',
      time: 'March 2017',
      information: 'Developing an app to support quality testing by spoken commands.',
      position: TimelineElementPosition.LEFT,
      icon: Icon.TERMINAL,
    },
    {
      id: 6,
      header: 'Junior IT Consultant',
      subheader: 'ITP Nord GmbH',
      place: 'Different',
      time: 'February 2017 - February 2018',
      information:
        'Different projects in Berlin, Hanover and remote. Berlin: Supporting the organisation of a team. Working with linux-based Servers. Hanover: rking in a huge redesign project.Process modelling all banking sses in the market risk management and liquidity risk management. Remote: Developig a Proof of Concept (Historical Simulation)',
      position: TimelineElementPosition.RIGHT,
      icon: Icon.PROJECT,
    },
    {
      id: 7,
      header: "Bachelor's Degree",
      subheader: 'University of Hildesheim / Finanz Informatik GmbH',
      place: 'Hanover',
      time: 'October 2016 - January 2017',
      information:
        "Writing my bachelor's degree at Finanz Informatik GmbH about conception.Designing a new feature in the cms of the Sparkasse.",
      position: TimelineElementPosition.LEFT,
      icon: Icon.EDUCATION,
    },
  ]
}
</script>


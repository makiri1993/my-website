import React, { Component, ReactNode } from 'react'
import styled from '@emotion/styled'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import {
  ProjectIcon,
  TerminalIcon,
  GraduationIcon
} from '../components/Icon/index'
import { Border, Shadow, BackgroundColor } from 'src/definitions'

export default class SinglePage extends Component {
  render() {
    return (
      <SiteContainer>
        {this.renderHeader}
        {this.renderTimeline}
      </SiteContainer>
    )
  }
  private get renderHeader(): ReactNode {
    return (
      <IntroductionContainer>
        <Introduction>
          <h1>Hello!</h1>
          <p>
            My name ist Martin Kireew. I live in Berlin and work as full stack
            developer.
          </p>
          <p>
            I'm a big entusiast of new tech. I always try to stay up-to-date by
            following all trends.
          </p>
          <p>
            Right now I'm more focusing on frontend tech because of its
            evolving.
          </p>
        </Introduction>
      </IntroductionContainer>
    )
  }
  private get renderTimeline(): ReactNode {
    return (
      <TimelineBackground>
        <VerticalTimeline>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='August 2018 - present'
            iconStyle={{ background: '#2196F3', color: '#fff' }}
            icon={<ProjectIcon style={{ width: 24, marginLeft: -12 }} />}
          >
            <h3 className='vertical-timeline-element-title'>
              Full Stack Developer
            </h3>
            <h4 className='vertical-timeline-element-title'>
              Schütze Consulting AG
            </h4>
            <h5 className='vertical-timeline-element-subtitle'>Berlin, DE</h5>
            <p>Javascript, Typescript, Webpack, React</p>
            <p>Java, Maven, Docker</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='August 2018'
            iconStyle={{ background: '#34A853', color: '#fff' }}
            icon={<TerminalIcon style={{ width: 24, marginLeft: -12 }} />}
          >
            <h3 className='vertical-timeline-element-title'>
              Website for immajung
            </h3>
            <h4 className='vertical-timeline-element-title'>Freelancing</h4>
            <h5 className='vertical-timeline-element-subtitle'>Remote, DE</h5>
            <p>
              Another project with typescript, react, gatsby, netlifyCMS and
              styled-components.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='June 2018'
            iconStyle={{ background: '#34A853', color: '#fff' }}
            icon={<TerminalIcon style={{ width: 24, marginLeft: -12 }} />}
          >
            <h3 className='vertical-timeline-element-title'>
              Website for Interkultureller Sozialdienst
            </h3>
            <h4 className='vertical-timeline-element-title'>Freelancing</h4>
            <h5 className='vertical-timeline-element-subtitle'>Remote, DE</h5>
            <p>
              First project with typescript, react, gatsby and
              styled-components.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='February 2018 - July 2018'
            iconStyle={{ background: '#2196F3', color: '#fff' }}
            icon={<ProjectIcon style={{ width: 24, marginLeft: -12 }} />}
          >
            <h3 className='vertical-timeline-element-title'>IT Consultant</h3>
            <h4 className='vertical-timeline-element-title'>ITP Nord GmbH</h4>
            <h5 className='vertical-timeline-element-subtitle'>Potsdam, DE</h5>
            <p>Project in Hanover, DE at Finanz Informatik GmbH</p>
            <p>
              Worked with OSPlus Framework.Developing banking Proof of Concepts.
              Deep dive into market risk management
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='March 2017'
            iconStyle={{ background: '#34A853', color: '#fff' }}
            icon={<TerminalIcon style={{ width: 24, marginLeft: -12 }} />}
          >
            <h3 className='vertical-timeline-element-title'>
              App for Testing Department (automotive industry)
            </h3>
            <h4 className='vertical-timeline-element-title'>Freelancing</h4>
            <h5 className='vertical-timeline-element-subtitle'>Remote, DE</h5>
            <p>
              Developing an app to support quality testing by spoken commands.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='February 2017 - February 2018'
            iconStyle={{ background: '#2196F3', color: '#fff' }}
            icon={<ProjectIcon style={{ width: 24, marginLeft: -12 }} />}
          >
            <h3 className='vertical-timeline-element-title'>
              Junior IT Consultant
            </h3>
            <h4 className='vertical-timeline-element-title'>ITP Nord GmbH</h4>
            <h5 className='vertical-timeline-element-subtitle'>Potsdam, DE</h5>
            <p>Different projects in Berlin, Hanover and remote.</p>
            <p>
              <strong>Berlin: </strong> Supporting the organisation of a team.
              Working with linux-based Servers
            </p>
            <p>
              <strong>Hanover: </strong>
              rking in a huge redesign project.Process modelling all banking
              sses in the market risk management and liquidity risk management.
            </p>
            <p>
              <strong>Remote: </strong>
              Developig a Proof of Concept (Historical Simulation)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='October 2016 - January 2017'
            iconStyle={{ background: '#EA2535', color: '#fff' }}
            icon={<GraduationIcon style={{ width: 24, marginLeft: -12 }} />}
          >
            <h3 className='vertical-timeline-element-title'>
              Bachelor's Degree
            </h3>
            <h4 className='vertical-timeline-element-title'>
              University of Hildesheim / Finanz Informatik GmbH
            </h4>
            <h5 className='vertical-timeline-element-subtitle'>Hanover, DE</h5>
            <p>
              Writing my bachelor's degree at Finanz Informatik GmbH about
              conception.Designing a new feature in the cms of the Sparkasse.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </TimelineBackground>
    )
  }
}
const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${BackgroundColor.primary.standard};
`

const TimelineBackground = styled.div`
  max-width: 1440px;
  margin-left: 20px;
  margin-right: 20px;
  border: ${Border.thin};
  border-radius: 4px;
  background-image: ${BackgroundColor.primaryGradient.lightGradient};
  transition: box-shadow 1s ease-in-out;
  :hover {
    box-shadow: ${Shadow.light};
  }
`

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  width: 40%;
`

const Introduction = styled.div`
  margin: 20px;

  padding: 20px;

  justify-self: flex-start;
  line-height: 2.4;

  border: ${Border.thin};
  border-radius: 4px;

  transition: background 1s ease-in-out, box-shadow 1s ease-in-out;
  :hover {
    background: ${BackgroundColor.primary.lighter};
    box-shadow: ${Shadow.light};
  }
`

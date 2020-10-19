export interface TimelineFrontmatterProps {
  id: number
  header: string
  subheader: string
  place: string
  time: string
  link: string
  information: string
}
export interface TimelineElementModelProps {
  fields: {
    slug?: string
  }
  frontmatter: TimelineFrontmatterProps
  html: string
}

export interface TimelineElementEntry extends TimelineFrontmatterProps {
  slug: string
  html: string
}

export function parseToTimelineModels(timelineEvents: TimelineElementModelProps[]): TimelineElementEntry[] {
  return timelineEvents.map(createTimelineEntry)
}

export const createTimelineEntry = ({
  fields: { slug = '' },
  frontmatter: { header, id, information, place, subheader, time, link },
  html,
}: TimelineElementModelProps): TimelineElementEntry => ({
  header,
  id,
  information,
  place,
  slug,
  subheader,
  time,
  html,
  link,
})

export function cutProjectDescription(projectDescription: string): string {
  if (projectDescription.length >= 160) {
    return projectDescription.slice(0, 160) + '...'
  }

  return projectDescription
}

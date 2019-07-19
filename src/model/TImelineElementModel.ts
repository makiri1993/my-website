export interface TimelineFrontmatterProps {
  id: number
  header: string
  subheader: string
  place: string
  time: string
  information: string
}
export interface TimelineElementModelProps {
  fields: {
    slug?: string
  }
  frontmatter: TimelineFrontmatterProps
}

export default class TimelineElementModel {
  private _slug: string
  private _id: number
  private _header: string
  private _subheader: string
  private _place: string
  private _time: string
  private _information: string

  public constructor({
    fields: { slug = '' },
    frontmatter: { id, header, subheader, place, time, information },
  }: TimelineElementModelProps) {
    this._slug = slug
    this._id = id
    this._header = header
    this._subheader = subheader
    this._place = place
    this._time = time
    this._information = information
  }

  public get slug(): string {
    return this._slug
  }

  public get id(): number {
    return this._id
  }
  public set id(value: number) {
    this._id = value
  }
  public get header(): string {
    return this._header
  }
  public set header(value: string) {
    this._header = value
  }
  public get subheader(): string {
    return this._subheader
  }
  public set subheader(value: string) {
    this._subheader = value
  }
  public get place(): string {
    return this._place
  }
  public set place(value: string) {
    this._place = value
  }
  public get time(): string {
    return this._time
  }
  public set time(value: string) {
    this._time = value
  }
  public get information(): string {
    return this._information
  }
  public set information(value: string) {
    this._information = value
  }
}

export function parseToTimelineModels(timelineEvents: TimelineElementModelProps[]): TimelineElementModel[] {
  return timelineEvents.map(event => new TimelineElementModel(event))
}

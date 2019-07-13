export enum Icon {
  EDUCATION = 'graduation-cap',
  PROJECT = 'project-diagram',
  TERMINAL = 'terminal',
}

export interface TimelineElementModelProps {
  id: number
  header: string
  subheader: string
  place: string
  time: string
  information: string
  position: string
  icon: string
}

export default class TimelineElementModel {
  private _id: number
  private _header: string
  private _subheader: string
  private _place: string
  private _time: string
  private _information: string
  private _position: number
  private _icon: string

  constructor({ id, header, subheader, place, time, information, position, icon }: TimelineElementModelProps) {
    this._id = id
    this._header = header
    this._subheader = subheader
    this._place = place
    this._time = time
    this._information = information
    this._icon = icon

    if (position === 'left') {
      this._position = 1
    } else {
      this._position = 3
    }
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
  public get position(): number {
    return this._position
  }
  public set position(value: number) {
    this._position = value
  }
  public get icon(): string {
    return this._icon
  }
  public set icon(value: string) {
    this._icon = value
  }
}
export interface SkillModelProps {
  name: string
  description: string
}

export default class SkillModel {
  private _name: string
  private _description: string

  public constructor({ name, description }: SkillModelProps) {
    this._name = name
    this._description = description
  }

  public get name(): string {
    return this._name
  }
  public set name(value: string) {
    this._name = value
  }
  public get description(): string {
    return this._description
  }
  public set description(value: string) {
    this._description = value
  }
}

export function parseToSkillModel(skills: SkillModelProps[]): SkillModel[] {
  return skills.map(skill => new SkillModel(skill))
}

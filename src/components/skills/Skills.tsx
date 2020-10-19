import React, { FC } from 'react'
import { SkillModelProps } from '../../model/SkillModel'

interface SkillsProps {
  skills: SkillModelProps[]
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="bg-background-darker">
      <div className="container flex flex-wrap p-16">
        {skills.map(({ name }, index) => {
          return <Skill key={index} name={name} />
        })}
      </div>
    </div>
  )
}

interface SkillProps {
  name: string
}

const Skill: FC<SkillProps> = ({ name }) => {
  return (
    <div className="border-2 border-secondary mx-2 mb-6 p-2 rounded-lg flex flex-col items-center justify-center shadow-xl cursor-pointer hover:bg-background-lighter transition-colors duration-200 ease-in-out">
      <div className="text-primary text-center">{name}</div>
    </div>
  )
}

export default Skills

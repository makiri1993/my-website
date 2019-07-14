import React, { useState } from 'react'
import { SkillModelProps } from '../../model/SkillModel'

interface SkillsProps {
  skills: SkillModelProps[]
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <div className=" container flex flex-wrap bg-indigo-100 p-16">
      {skills.map(({ name }, index) => {
        return <Skill name={name} />
      })}
    </div>
  )
}

interface SkillProps {
  name: string
}

const Skill = ({ name }: SkillProps) => {
  return (
    <div className="bg-orange-400 mx-2 mb-6 md:mb-10 p-4 md:h-32 md:w-32 rounded-full flex items-center justify-center shadow-xl transition-all flex flex-col">
      <div className="text-orange-900 text-center">{name}</div>
    </div>
  )
}

export default Skills

import React, { FC } from 'react'
import { Image } from '../util/image/Image'

export interface TestimonialProps {
  name: string
  image: string
  text: string
  link: string
}

export const Testimonial: FC<TestimonialProps> = ({ image, name, text, link }) => {
  console.log(link)

  return (
    <div className="flex flex-col md:flex-row items-center border-2 border-secondary rounded-lg py-4 md:p-6">
      <a className="w-3/12 flex flex-col items-center justify-center" href={link} target="_blank" rel="noreferrer">
        <Image className="w-20 md:w-24" imageName={image} />
        <h2 className="py-4 text-primary">{name}</h2>
      </a>
      <blockquote className="w-10/12 md:w-9/12 lg:px-24 xl:px-40 font-light lg:text-lg text-center text-primary leading-relaxed">
        &quot;{text}&quot;
      </blockquote>
    </div>
  )
}

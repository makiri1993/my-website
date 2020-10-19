import React, { CSSProperties, FC } from 'react'

interface ButtonProps {
  onClick: () => void
  className?: string
  style?: CSSProperties
}

export const Button: FC<ButtonProps> = ({ onClick, children, className, style }) => {
  return (
    <button
      className={`border-2 border-secondary shadow-lg text-primary rounded-lg hover:bg-background-lighter transition-colors duration-200 ease-in-out ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

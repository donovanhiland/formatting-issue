import React from 'react'

const iconPaths = { example: [''] }

const Icon = props => {
  return (
    <svg
      viewBox="0 0 20 20"
      {...props}
    >
      {iconPaths.example.map((path, index) => (
        <path
          key={index}
          d={path}
        />
      ))}
    </svg>
  )
}

export default Icon

import React from 'react'

export default function SectionHeaderText({title, color = "text-primary", lineBg="bg-primary"}) {
  return (
    <h4 className={`${color} inline-block relative`}>
        {title}
        <span className={`absolute top-1/2 my-1 ml-3 w-10 h-0.5 ${lineBg} transform -translate-y-1/2`}></span>
    </h4>
  )
}

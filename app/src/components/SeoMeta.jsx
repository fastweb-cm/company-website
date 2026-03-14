import React from 'react'
import Input from './UI/Input'

const SeoMeta = () => {
  return (
    <div>
      <label htmlFor="title">Title</label>
      <Input type="text" name="title" placeholder="Enter title" />
      <label htmlFor="description">Description</label>
      <Input type="text" name='description' placeholder="Enter description" />
      <label htmlFor='keywords'>Keywords</label>
      <Input type="text" name='keywords' placeholder="Enter keywords" />
    </div>
  )
}

export default SeoMeta

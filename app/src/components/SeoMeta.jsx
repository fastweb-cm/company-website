import React from 'react'
import Input from './UI/Input'

const SeoMeta = ({ index, onChange, values = {}}) => {
const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    // Strip prefix to keep the data object clean for the parent
    const fieldName = name.replace(`${namePrefix}_`, "");
    onChange(fieldName, type === 'file' ? files[0] : value);
  };
 
  return (
    <div className='p-4 bg-white rounded shadow'>
    <h2 className='text-2xl font-bold mb-4'>SEO Meta</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <Input
        label="Meta Title"
        name={`meta_title`}
        value={values.meta_title || ''}
        onChange={handleChange}
      />
      <Input
        label="Meta Description"
        name={`meta_description`}
        value={values.meta_description || ''}
        onChange={handleChange}
        textarea
      />
      <Input
        label="Meta Keywords"
        name={`meta_keywords`}
        value={values.meta_keywords || ''}
        onChange={handleChange}
      />
      <Input
        label="OG Title"
        name={`og_title`}
        value={values.og_title || ''}
        onChange={handleChange}
      />
      <Input
        label="OG Description"
        name={`og_description`}
        value={values.og_description || ''}
        onChange={handleChange}
        textarea
      />
      <Input
        label="OG Image"
        name={`og_image`}
        type="file"
        onChange={handleChange}
      />
      <Input
        label="Canonical URL"
        name={`canonical_url`}
        value={values.canonical_url || ''}
        onChange={handleChange}
      />
      <Input
        label="Focus Keyword"
        name={`focus_keyword`}
        value={values.focus_keyword || ''}
        onChange={handleChange}
      />
      <Input
        label="Schema Type"
        name={`schema_type`}
        value={values.schema_type || ''}
        onChange={handleChange}
      />  
    </div>
    </div>
  )
}

export default SeoMeta

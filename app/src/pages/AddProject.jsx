import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from '../schemas/projectSchema';
import button from '../components/Button';
import { useState } from 'react';


const AddProject = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(projectSchema),
  });

  const [showExtraDetails, setShowExtraDetails] = useState(false);

  const onSubmit = (data) => {
    console.log("Success! Base Project Data:", data);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-xl my-10">
      <h1 className="text-2xl font-bold mb-6 text-primary text-center">New Project</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-500">Project Title</label>
          <input {...register("title")} type="text" className="w-full border p-2 rounded text-black" />
          {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-medium text-gray-500">Slug</label>
          <input {...register("slug")} type="text" className="w-full border p-2 rounded text-black" />
          {errors.slug && <p className="text-red-500 text-xs">{errors.slug.message}</p>}
        </div>

        {/* Client */}
        <div>
          <label className="block text-sm font-medium text-gray-500">Client</label>
          <input {...register("client")} type="text" className="w-full border p-2 rounded text-black" />
          {errors.client && <p className="text-red-500 text-xs">{errors.client.message}</p>}
        </div>

        {/* Category (Number) */}
        <div>
          <label className="block text-sm font-medium text-gray-500">Category ID</label>
          <input 
            {...register("category", { valueAsNumber: true })} 
            type="number" 
            className="w-full border p-2 rounded text-black" 
          />
          {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-500">Description</label>
          <textarea {...register("description")} className="w-full border p-2 rounded h-32 text-black" />
          {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
        </div>

        <div>
             <label className="block text-sm font-medium text-gray-500">Project Image URL</label>
            <input 
                {...register("image")} 
                type="text" 
                placeholder="https://example.com/image.jpg"
                className="w-full border p-2 rounded h-14 focus:ring-2 text-black focus:ring-black outline-none" 
            />
            {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image.message}</p>}

            {/* Live Image Preview */}
            {watch("image") && !errors.image && (
            <div className="mt-4">
            <p className="text-xs text-gray-500 mb-2">Preview:</p>
            <img 
                src={watch("image")} 
                alt="Preview" 
                className="w-full h-48 object-cover rounded-lg border shadow-sm"
                onError={(e) => e.target.style.display = 'none'} // Hide if link is broken
                />
    </div>
  )}
     </div>
     
     <div>
        { /*<h2 className="text-lg font-semibold text-gray-700">Project Specifics</h2>}*/}
        <button
      type="button"
      onClick={() => setShowExtraDetails(!showExtraDetails)}
      className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 text-primary rounded-full transition-colors"
      ><span className="text-xl font-bold">{showExtraDetails ? "−" : "+"}</span>
      {/* {showExtraDetails ? "Hide Details" : "Add More Details"} */}
    </button>
     </div>

        <button type="submit" className="w-full bg-red-700 text-white p-3 rounded font-bold hover:bg-red-800">
            Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;

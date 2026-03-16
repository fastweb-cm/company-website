import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from '../schemas/projectSchema';
import button from '../components/Button';

const AddProject = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(projectSchema),
  });

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

        <button type="submit" className="w-full bg-red-700 text-white p-3 rounded font-bold hover:bg-red-800">
            Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;

import React from 'react';
import { useForm, useFieldArray} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from '../schemas/projectSchema';
import button from '../components/Button';
import { useState } from 'react';


const AddProject = () => {
  const { register, handleSubmit, watch, formState: { errors }, control } = useForm({
    resolver: zodResolver(projectSchema),
      defaultValues: {
      challengesolution: [{ title: "", challenge: "", solution: "" }],
      projectaccounts: [{ role: "", password: "" }],}
  });

  const [showExtraDetails, setShowExtraDetails] = useState(false);

  const { fields: challengeFields, append: appendChallenge, remove: removeChallenge } = useFieldArray({
    control,
    name: "challengesolution"
  });
  
  const { fields: accountFields, append: appendAccount, remove: removeAccount } = useFieldArray({
    control,
    name: "projectaccounts"
  });

  const onSubmit = (data) => {
    console.log("Success! Base Project Data:", data);
  };

  return (
    <div className=" mx-auto p-8 bg-white shadow-lg rounded-xl my-10">
      <h3 className="text-2xl font-bold mb-6 text-primary text-center">New Project</h3>

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
       {/* Image URL with Live Preview */}
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
     
         {/* Client */}
        <div>
          <label className="block text-sm font-medium text-gray-500">Client</label>
          <input {...register("client")} type="text" className="w-full border p-2 rounded text-black" />
          {errors.client && <p className="text-red-500 text-xs">{errors.client.message}</p>}
        </div>
        {/* Demo Link */}
        <div>
          <label className="block text-sm font-medium text-gray-500">Demo Link</label>
          <input {...register("demoLink")} type="url" placeholder='https://eg.com' className="w-full border p-2 rounded text-black" />
          {errors.demoLink && <p className="text-red-500 text-xs">{errors.demoLink.message}</p>}
        </div>

     <div>
        { /*<h2 className="text-lg font-semibold text-gray-700">Project Specifics</h2>*/}
        <button
      type="button"
      onClick={() => setShowExtraDetails(!showExtraDetails)}
      className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 text-primary rounded-full transition-colors"
      ><span className="text-xl font-bold">{showExtraDetails ? "−" : "+"}</span>
      {/* {showExtraDetails ? "Hide Details" : "Add More Details"} */}
    </button>
     </div>

     {
      showExtraDetails && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
          {/* CHALLENGES SECTION */}
            <div className="space-y-4">
              <h3 className="font-bold  text-gray-700">Challenges & Solutions</h3>
              {challengeFields.map((field, index) => (
                <div key={field.id} className="p-4 border rounded bg-gray-50 relative group">
                  <input 
                    {...register(`challengesolution.${index}.title`)} 
                    placeholder="Section Title" 
                    className="w-full border p-2 rounded mb-2" 
                  />
                  <textarea 
                    {...register(`challengesolution.${index}.challenge`)} 
                    placeholder="Challenge description" 
                    className="w-full border p-2 rounded mb-2" 
                  />
                  <textarea 
                    {...register(`challengesolution.${index}.solution`)} 
                    placeholder="Solution provided" 
                    className="w-full border p-2 rounded" 
                  />
                  <button 
                    type="button" 
                    onClick={() => removeChallenge(index)} 
                    className="text-red-500 text-xs mt-2 block"
                  >
                    Remove Section
                  </button>
                </div>
              ))}
              <button 
                type="button" 
                onClick={() => appendChallenge({ title: "", challenge: "", solution: "" })} 
                className="text-primary text-sm font-semibold hover:underline"
              >
                + Add Another Challenge
              </button>
            </div>
               {/* ACCOUNTS SECTION */}
            <div className="space-y-4 mt-6">
              <h3 className="font-bold text-gray-700">Project Accounts</h3>
              {accountFields.map((field, index) => (
                <div key={field.id} className="p-4 border rounded bg-gray-50 relative group">
                  <input 
                    {...register(`projectaccounts.${index}.role`)} 
                    placeholder="Role" 
                    className="w-full border p-2 rounded mb-2" 
                  />
                  <input 
                    {...register(`projectaccounts.${index}.password`)} 
                    type="password"
                    placeholder="Password" 
                    className="w-full border p-2 rounded" 
                  />
                  <button 
                    type="button" 
                    onClick={() => removeAccount(index)} 
                    className="text-red-500 text-xs mt-2 block"
                  >
                    Remove Account
                  </button>
                </div>
              ))}
              <button 
                type="button" 
                onClick={() => appendAccount({ role: "", password: "" })} 
                className="text-primary text-sm font-semibold hover:underline"
              >
                + Add Another Account
              </button>
            </div>
          </div>
        )}
      
        <button type="submit" className="w-full bg-red-700 text-white p-3 rounded font-bold hover:bg-red-800">
            Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;

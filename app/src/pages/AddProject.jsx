import React from 'react';
import { useForm, useFieldArray, FormProvider} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from '../schemas/projectSchema';
import button from '../components/Button';
import { useState } from 'react';
import Input from '../components/UI/Input';
import SeoMeta from '../components/Forms/SeoMeta';


const AddProject = () => {
   const methods = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      category: 0,      // Use 0 for numbers
     client: "",
     description: "",
     image: "",
     demoLink: "",
      // seometa fields
      seo: {
        meta_title: "",
        meta_description: "",
        focus_keyword: "",
        og_title: "",
        canonical_url: "",
        schema_type: "WebPage",
        meta_keywords: ""
      },
      challengesolution: [{ title: "", challenge: "", solution: "" }],
      projectaccounts: [{ role: "", password: "" }],
    }
  });
  const { register, watch, handleSubmit, control, formState: { errors } } = methods;

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
      <FormProvider {...methods}>
      <h3 className="text-2xl font-bold mb-6 text-primary text-center">New Project</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        <div className='p-6 border border-gray-200 rounded-xl bg-gray-50/30 shadow-sm space-y-4'>
         {/* Title and Slug */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input 
            label="Project Title" 
            type="text" 
            placeholder="Enter project name"
            {...register("title")} 
            error={errors.title} 
          />
          <Input 
            label="Slug" 
            type="text" 
            placeholder="project-url-slug"
            {...register("slug")} 
            error={errors.slug} 
          />
        </div>
         {/* Category and Client */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input 
            label="Category ID" 
            type="number" 
            {...register("category", { valueAsNumber: true })} 
            error={errors.category} 
          />
          <Input 
            label="Client" 
            type="text" 
            {...register("client")} 
            error={errors.client} 
          />
        </div>
        {/* Description */}
        <Input 
          label="Description" 
          type="textarea" 
          placeholder="Detailed project overview..."
          {...register("description")} 
          error={errors.description} 
        />

       {/* Image URL with Live Preview */}
          <Input type="text"
          label="Project Image URL"
          {...register("image")} 
          placeholder="https://example.com/image.jpg"
          className="w-full border p-2 rounded h-14 focus:ring-2 text-black focus:ring-black outline-none" 
          error ={errors.image}
        />

            {/* Live Image Preview */}
          {watch("image") && !errors.image && (
          <img src={watch("image")} className="w-full h-48 object-cover rounded-lg border" alt="Preview" />
        )};  
        {/* Demo Link */}
        <Input 
          label="Demo Link" 
          type="url" 
          placeholder="https://live-demo.com"
          {...register("demoLink")} 
          error={errors.demoLink} 
        />
        <Input 
          label="Landing Page URL" 
          type="url" 
          placeholder="https://project-url.com"
          {...register("project_url")} 
        />
        </div>
          {/* SEO Meta Component 
        <SeoMeta register={register} errors={errors} /> */}

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
                   <Input 
                    label="Challenge Title" 
                    type="text" 
                    {...register(`challengesolution.${index}.title`)} 
                    error={errors.challengesolution?.[index]?.title}
                  />
                  <Input 
                    label="Challenge description" 
                    type="textarea" 
                    {...register(`challengesolution.${index}.challenge`)} 
                    error={errors.challengesolution?.[index]?.challenge}
                  />
                  <Input 
                    label="Solution provided" 
                    type="textarea" 
                    {...register(`challengesolution.${index}.solution`)} 
                    error={errors.challengesolution?.[index]?.solution}
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
                  <Input 
                    label="Role" 
                    type="text" 
                    {...register(`projectaccounts.${index}.role`)} 
                    error={errors.projectaccounts?.[index]?.role}
                  />
                  <Input 
                    label="Password" 
                    type="password" 
                    {...register(`projectaccounts.${index}.password`)} 
                    error={errors.projectaccounts?.[index]?.password}
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

        <div>
          <SeoMeta />
        </div>
      
        <button type="submit" className="w-full bg-red-700 text-white p-3 rounded font-bold hover:bg-red-800">
            Add Project
        </button>
      </form>
      </FormProvider>
    </div>
  );
};

export default AddProject;

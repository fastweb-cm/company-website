import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SeoMeta from "../components/Forms/SeoMeta";
import { seoMetaSchema } from "../schemas/seoMetaSchema";

const SeoMetaForm = () => {
  const methods = useForm({
    resolver: zodResolver(seoMetaSchema),
    defaultValues: {
      seo: {
        meta_title: "",
        focus_keyword: "",
        meta_description: "",
        og_title: "",
        canonical_url: "",
        og_image: null,
        schema_type: "",
        meta_keywords: "",
      },
    },
    mode: "onSubmit", // ensures validation runs on submit
  });

  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert(JSON.stringify(data, null, 2));
  };


  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-6xl p-6 space-y-6"
        noValidate
      >
        {/* SEO Meta Fields */}
        <SeoMeta namePrefix="seo" />
        

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save SEO Meta
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SeoMetaForm;

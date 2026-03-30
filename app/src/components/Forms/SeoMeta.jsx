import React from "react";
import Input from "../UI/Input";
import { useFormContext, Controller } from "react-hook-form";

const SeoMeta = ({ namePrefix = "seo" }) => {
  const { control, formState: { errors } } = useFormContext();
  const getFieldError = (fieldName) => { return errors[namePrefix]?.[fieldName]?.message; };

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-xl space-y-6 shadow-sm">
      <div className="border-b pb-4">
        <h2 className="text-xl font-bold text-gray-800">SEO & Meta Tags</h2>
        <p className="text-sm text-gray-500">
          Metadata configuration for SEO and Social Media.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Meta Title */}
        <Controller
          name={`${namePrefix}.meta_title`}
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-0">
              <Input {...field} label="Meta Title" type="text" placeholder="SEO Title" />
              {getFieldError("meta_title") && ( <p className="text-xs text-red-500 mt-1">{getFieldError("meta_title")}</p> )}
            </div>
          )}
        />

        {/* Focus Keyword */}
        <Controller
          name={`${namePrefix}.focus_keyword`}
          control={control}
          render={({ field }) => (
            <Input {...field} label="Focus Keyword" type="text" placeholder="Main keyword" />
          )}
        />

        {/* Meta Description */}
        <Controller
          name={`${namePrefix}.meta_description`}
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-0">
              <Input
                {...field}
                label="Meta Description"
                type="text"
                placeholder="Brief summary (max 160 chars)"
                inputProps={{ as: "textarea", rows: 3 }}
              />
              {getFieldError("meta_title") && ( <p className="text-xs text-red-500 mt-1">{getFieldError("meta_title")}</p> )}
            </div>
          )}
        />

        {/* OG Title */}
        <Controller
          name={`${namePrefix}.og_title`}
          control={control}
          render={({ field }) => (
            <Input {...field} label="OG Title" type="text" placeholder="Social media title" />
          )}
        />

        {/* Canonical URL */}
        <Controller
          name={`${namePrefix}.canonical_url`}
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-0">
              <Input {...field} label="Canonical URL" type="url" placeholder="https://..." />
              {getFieldError("meta_title") && ( <p className="text-xs text-red-500 mt-1">{getFieldError("meta_title")}</p> )}
            </div>
          )}
        />

        {/* Schema Type */}
        <Controller
          name={`${namePrefix}.schema_type`}
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Schema Type"
              type="select"
              option={[
                { label: "Article", value: "Article" },
                { label: "WebPage", value: "WebPage" },
                { label: "Service", value: "Service" },
                { label: "Organization", value: "Organization" },
              ]}
            />
          )}
        />

        {/* Meta Keywords */}
        <Controller
          name={`${namePrefix}.meta_keywords`}
          control={control}
          render={({ field }) => (
            <Input {...field} label="Meta Keywords" type="text" placeholder="key, words" />
          )}
        />

        {/* OG Image */}
        <Controller
          name={`${namePrefix}.og_image`}
          control={control}
          render={({ field: { onChange, ...rest }, fieldState }) => (
            <>
              <Input
                {...rest}
                label="OG Image"
                type="file"
                onChange={(e) => onChange(e.target.files[0])}
                inputProps={{ accept: "image/*" }}
              />
              {fieldState.error && (
                <p className="text-red-600 text-xs mt-1">{fieldState.error.message}</p>
              )}
            </>
          )}
        />
      </div>
    </div>
  );
};

export default SeoMeta;

import { useState } from "react"
import Button from "./Button"
import Input from "./UI/Input"
import SeoMeta from "./Forms/SeoMeta"
import { Controller, useForm, FormProvider } from "react-hook-form"
import { Plus } from "lucide-react"
export default function BlogPostForm() {
    /*
    using the <Input /> component, create a form for creating a new blog post. The form should have the following fields:

    "title": "string",
    "slug": "string",
    "content": "string",
    "category_id": 0,
    "read_time": 0,
    "is_featured": true,
    "status": "draft",
    "tags": [
        {
        "name": "string",
        "slug": "string"
        }
    ],
    "seo": {
        "meta_title": "string",
        "meta_description": "string",
        "meta_keywords": "string",
        "og_title": "string",
        "og_description": "string",
        "og_image": "string",
        "canonical_url": "string",
        "robots": "index, follow"
        }
    }

    with 3 divided sections one for the main content, one for the SEO and one for the tags. The form should have a submit button.
    */
    // const [tagsCount, setTagsCount] = useState(1);
    const [seoTagsCount, setSeoTagsCount] = useState(1);
   const methods = useForm({
    defaultValues: {
        title: "",
        slug: "",
        content: "",
        category_id: 0,
        read_time: 0,
        is_featured: false,
        status: "draft",
        tags: [{ name: "", slug: "" }],
        seo: {
            meta_title: "",
            meta_description: "",
            meta_keywords: "",
            og_title: "",
            og_description: "",
            og_image: null,
            canonical_url: "",
            robots: "index, follow"
        }
    }
   });

   const { control, getFieldError } = methods;

   const handleSubmit = (data) => {
    console.log(data);
   }    

    // const [seoTagsCount, setSeoTagsCount] = useState(1);
    return (
        <div className="p-[6em]">
    <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(handleSubmit)} className="flex flex-col gap-6">
            <div className="main-content flex flex-col gap-4">
                <h2 className="text-xl font-semibold">Main Content</h2>
                <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                        <Input {...field} label="Title" type="text" placeholder="Blog post title" />
                    )}
                />
                <Controller
                    name="slug"
                    control={control}
                    render={({ field }) => (
                        <Input {...field} label="Slug" type="text" placeholder="blog-post-slug" />
                    )}
                />
                <Controller
                    name="content"
                    control={control}
                    render={({ field }) => (
                        <Input {...field} label="Content" type="text" placeholder="Write your blog post here..." inputProps={{ as: "textarea", rows: 10 }} />
                    )}
                />
                <Controller
                    name='status'
                    control={control}
                    render={({ field }) => (
                        <Input {...field} label="Status" type="select" placeholder="Status" option={[
                            { value: 0, label: "Draft" },
                            { value: 1, label: "Published" },
                            { value: 2, label: "Archived" },
                        ]} />
                    )}
                />
                {/* Tags */}
                <div className="tags flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">Tags</h2>
                    {Array.from({ length: seoTagsCount }).map((_, index) => (
                        // tags with name and slug
                        <div key={index} className="flex gap-4">
                            <Controller
                                name={`tags[${index}].name`}
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} label={`Tag ${index + 1} Name`} type="text" placeholder="Tag name" />
                                )}
                            />
                            <Controller
                                name={`tags[${index}].slug`}
                                control={control}
                                render={({ field }) => (
                                    <Input {...field} label={`Tag ${index + 1} Slug`} type="text" placeholder="tag-slug" />
                                )}
                            />
                        </div>
                    ))}
                     <Button type="button" onClick={() => setSeoTagsCount(seoTagsCount + 1)}><Plus/></Button>
                </div> 
            </div>

            <SeoMeta namePrefix="seo" control={control} getFieldError={getFieldError} />

           

            <Button type="submit" className="bg-blue-500 text-white w-fit">Submit</Button>
        </form>
    </FormProvider>
    </div>
    )
}
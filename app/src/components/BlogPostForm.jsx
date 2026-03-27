import { useState } from "react"
import Button from "./Button"
import Input from "./UI/Input"

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
    const [seoTagsCount, setSeoTagsCount] = useState(1);
    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-4">Create New Blog Post</h1>
            <form className="space-y-6">
                {/* Main Content Section */}
                <div className="flex flex-col gap-5">
                    <h2 className="text-xl font-semibold mb-2">Main Content</h2>
                    <Input type="text" placeholder={"Enter blog title"} />
                    <Input name="slug" type="text" placeholder={"Blog slug"} />
                    <Input name="content" type="textarea" placeholder={"Content Goes here"} />
                    <Input type="select" name="category_id" option={['1', '2', '3', '4']} />
                    <Input name="read_time" type="number" placeholder={'Read time (minutes) '} />
                    <Input name="is_featured" type="checkbox" />
                    <Input name="status" type="select" option={['draft', 'published']} />
                </div>

                {
                    Array.map
                }
                {/* <div>
                    <h2 className="text-xl font-semibold mb-2">SEO</h2>
                    <Input label="Meta Title" name="seo.meta_title" type="text" />
                    <Input label="Meta Description" name="seo.meta_description" type="textarea" />
                    <Input label="Meta Keywords" name="seo.meta_keywords" type="text" />
                    <Input label="OG Title" name="seo.og_title" type="text" />
                    <Input label="OG Description" name="seo.og_description" type="textarea" />
                    <Input label="OG Image URL" name="seo.og_image" type="text" />
                    <Input label="Canonical URL" name="seo.canonical_url" type="text" />
                    <Input label="Robots" name="seo.robots" type="text" />
                </div> */}

                {/* Tags Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Tags</h2>
                    <Input label="Tag Name" name="tags[0].name" type="text" />
                    <Input label="Tag Slug" name="tags[0].slug" type="text" />
                    {/* Add functionality to add more tags as needed */}
                </div>
                <Button variant="black">Submit</Button>
            </form>
        </div>
    )
}
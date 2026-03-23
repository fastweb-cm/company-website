import Inpu

export default function BlogPostForm() {
    /*
        using the <InputField /> component, create a form for creating a new blog post. The form should have the following fields:
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

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Blog Post</h1>
            <form className="space-y-6">
                {/* Main Content Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Main Content</h2>
                    <InputField label="Title" name="title" type="text" />
                    <InputField label="Slug" name="slug" type="text" />
                    <InputField label="Content" name="content" type="textarea" />
                    <InputField label="Category ID" name="category_id" type="number" />
                    <InputField label="Read Time (minutes)" name="read_time" type="number" />
                    <InputField label="Is Featured" name="is_featured" type="checkbox" />
                    <InputField label="Status" name="status" type="select" options={['draft', 'published']} />
                </div>

                {/* SEO Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">SEO</h2>
                    <InputField label="Meta Title" name="seo.meta_title" type="text" />
                    <InputField label="Meta Description" name="seo.meta_description" type="textarea" />
                    <InputField label="Meta Keywords" name="seo.meta_keywords" type="text" />
                    <InputField label="OG Title" name="seo.og_title" type="text" />
                    <InputField label="OG Description" name="seo.og_description" type="textarea" />
                    <InputField label="OG Image URL" name="seo.og_image" type="text" />
                    <InputField label="Canonical URL" name="seo.canonical_url" type="text" />
                    <InputField label="Robots" name="seo.robots" type="text" />
                </div>

                {/* Tags Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Tags</h2>
                    <InputField label="Tag Name" name="tags[0].name" type="text" />
                    <InputField label="Tag Slug" name="tags[0].slug" type="text" />
                    {/* Add functionality to add more tags as needed */}
                </div>

                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
            </form>
        </div>
    )
}
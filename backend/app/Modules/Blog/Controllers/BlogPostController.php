<?php
namespace App\Modules\Blog\Controllers;

use App\Core\Controller;
use App\Modules\Blog\Models\BlogPost;

class BlogPostController extends Controller {
    private BlogPost $blog;

    public function __construct()
    {
        $this->blog = new BlogPost();
    }

    public function index() {
        $post = $this->blog->all();
        
        $this->json(["data" => $post]);
    }

    public function store(): void {
        $data = $this->getInput();


       //set the blogdetails
       $this->blog->setTitle($data["title"]);
       $this->blog->setSlug($data["slug"]);
       $this->blog->setContent($data["content"]);
       $this->blog->setFeaturedImage($data["featured_image"] ?? null);
       $this->blog->setAuthorId((int)$data["author_id"]);
       $this->blog->setCategoryId((int)$data["category_id"]);
       $this->blog->setReadTime((int)$data["read_time"] ?? null);
       $this->blog->setIsFeatured((bool)($data["is_featured"]) ?? 0);
       $this->blog->setStatus($data["status"]);

       //create the blogpost
       $blogpost = $this->blog->createPost($data["tags"], $data["seo"]);

       if(is_null($blogpost)){
        $this->json([
            "data" => $blogpost,
            "message" => "An internal error occured"
        ],500);
       }

       $this->json([
        "data" => $blogpost,
        "message" => "Blogpost created successfully"
       ],200);

    }

    /**
     * update a blog post
     * Summary of edit
     * @param int $id
     * @return void
     */
    public function edit(int $id): void {
        $data = $this->getInput();

        //set the blogdetails
       $this->blog->setTitle($data["title"]);
       $this->blog->setSlug($data["slug"]);
       $this->blog->setContent($data["content"]);
       $this->blog->setFeaturedImage($data["featured_image"] ?? null);
       $this->blog->setAuthorId((int)$data["author_id"]);
       $this->blog->setCategoryId((int)$data["category_id"]);
       $this->blog->setReadTime((int)$data["read_time"] ?? null);
       $this->blog->setViews((int)$data["views"]);
       $this->blog->setIsFeatured((bool)($data["is_featured"]) ?? 0);
       $this->blog->setStatus($data["status"]);

       //create the blogpost
       $this->blog->setId((int)$id);
       $blogpost = $this->blog->updatePost($data["tags"], $data["seo"]);

       if(is_null($blogpost)){
        $this->json([
            "data" => $blogpost,
            "message" => "Failed to update blogpost"
        ],500);
       }

       $this->json([
        "data" => $blogpost,
        "message" => "Blogpost updated successfully"
       ],200);
    }

    public function delete(int $id): void{
        $this->blog->setId((int)$id);
        if($this->blog->deletePost()){
            $this->json([]);
        }
        $this->json(["error:" => "Failed to delete blogpost"],500);
    }



    /**
     * Summary of updateViews
     * Increments the blogpost views field by one
     * @return void
     */
    public function updateViews(): void {
        $data = $this->getInput();

        if($this->blog->updateViews($data["id"])){
            $this->json([], 200);
        }else{
            $this->json([
                "data" => "error incrementing number of views"
            ],500);
        }
    }
}

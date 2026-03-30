<?php
namespace App\Modules\Blog\Models;

use App\Core\Database;
use App\Modules\SeoMeta\Models\SeoMeta;

class BlogPost
{
    private Database $db;
    private SeoMeta $seoMeta;

    // Core Post Properties
    private ?int $id = null;
    private ?string $title = null;
    private ?string $slug = null;
    private ?string $content = null;
    private ?string $featured_image = null;
    private int $author_id;
    private ?int $category_id = null;
    private ?int $read_time = null;

    private ?int $views;
    private bool $is_featured = false;
    private string $status = 'draft';

    

    public function __construct()
    {
        $this->db = Database::connect();
        $this->seoMeta = new SeoMeta();
    }

    // =======================
    // Getters and Setters
    // =======================

    public function getId(): ?int { return $this->id; }
    public function setId(int $id): void { $this->id = $id; }

    public function getTitle(): ?string { return $this->title; }
    public function setTitle(string $title): void { $this->title = $title; }

    public function getSlug(): ?string { return $this->slug; }
    public function setSlug(string $slug): void { $this->slug = $slug; }

    public function getContent(): ?string { return $this->content; }
    public function setContent(string $content): void { $this->content = $content; }

    public function getFeaturedImage(): ?string { return $this->featured_image; }
    public function setFeaturedImage(string $imageurl): void { $this->featured_image = $imageurl; }

    public function getAuthorId(): ?int { return $this->author_id; }
    public function setAuthorId(int $author_id): void { $this->author_id = $author_id; }

    public function getCategoryId(): ?int { return $this->category_id; }
    public function setCategoryId(?int $category_id): void { $this->category_id = $category_id; }

    public function getReadTime(): ?int { return $this->read_time; }
    public function setReadTime(?int $read_time): void { $this->read_time = $read_time; }

    public function getviews(): ?int { return $this->views; }
    public function setViews(?int $views): void { $this->views = $views; }

    public function getIsFeatured(): bool { return $this->is_featured; }
    public function setIsFeatured(bool $is_featured): void { $this->is_featured = $is_featured; }

    public function getStatus(): string { return $this->status; }
    public function setStatus(string $status): void { $this->status = $status; }

    // =======================
    // CRUD Methods
    // =======================

    public function createPost(array $tags = [], array $seoMeta = []): ?array
    {
        $sql = "INSERT INTO tbl_blog_posts 
            (title, slug, content, featured_image, author_id, category_id, read_time, is_featured, status)
            VALUES (?, ?, ?, ?, ?, ?, ?,?,?)";

        $params = [
            $this->title,
            $this->slug,
            $this->content,
            $this->featured_image,
            $this->author_id,
            $this->category_id,
            $this->read_time,
            $this->is_featured ? 1 : 0,
            $this->status
        ];

        $this->db->query($sql, $params);
        $this->id = $this->db->lastInsertId();

        // Insert Tags
        foreach ($tags as $tag) {
            // insert tag if it doesn't already
            $this->db->query(
                "INSERT INTO tbl_blog_tags (name, slug) 
                VALUES (?, ?)
                ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)",
                [$tag['name'], $tag['slug']]
            );

            $tagId = $this->db->lastInsertId();
            $this->db->query(
                "INSERT INTO tbl_blog_post_tags (post_id,tag_id) VALUES(?,?)",
                [$this->id,$tagId]
            );
        }

        // Insert SEO
        if(!empty($seoMeta)){
            $seo = new SeoMeta();
            $seo->setEntityId($this->id);
            $seo->setEntityType("blogpost");
            $seo->setMetaTitle($seoMeta["meta_title"]);
            $seo->setMetaDescription($seoMeta["meta_description"]);
            $seo->setMetaKeywords($seoMeta["meta_keywords"] ?? null);
            $seo->setOgTitle($seoMeta["og_title"] ?? null);
            $seo->setOgDescription($seoMeta["og_description"] ?? null);
            $seo->setOgImage($seoMeta["og_image"] ?? null);
            $seo->setCanonicalUrl($seoMeta["canonical_url"] ?? null);
            $seo->setFocusKeywords($seoMeta["focus_keyword"] ?? null);
            $seo->setSchemaType($seoMeta["schema_type"] ?? null);

            if($seo->create()){
                return $this->getPostById($this->id);
            }
        }

        return null;
    }

    public function getPostById(int $id): ?array
    {
        $sql = "SELECT p.*, c.name AS category, CONCAT(u.firstname, ' ',u.lastname) AS author
                FROM tbl_blog_posts p
                LEFT JOIN tbl_blog_categories c ON p.category_id = c.id 
                LEFT JOIN tbl_user u ON p.author_id = u.id 
                WHERE p.id = ?";

        $result = $this->db->query($sql, [$id]);

        if (!$result || $result->num_rows === 0) return null;

        $post = $result->fetch_assoc();

        // Fetch Tags
        $tagsResult = $this->db->query(
            "SELECT name, slug FROM tbl_blog_tags bt
            JOIN tbl_blog_post_tags bpt ON bt.id = bpt.tag_id
            WHERE bpt.post_id = ?",
            [$id]
        );

        $tags = [];
        if ($tagsResult) {
            while ($row = $tagsResult->fetch_assoc()) {
                $tags[] = $row;
            }
        }

        // Fetch SEO
        $seo = new SeoMeta();
        $seoResult = $seo->getByEntity("blogpost", $post["id"]);

        $post['tags'] = $tags;
        $post['seo'] = $seoResult;

        return $post;
    }

    public function updatePost(array $tags = [], array $seo = []): ?array
    {
        if (!$this->id) return null;
        $updated_at = date('Y-m-d H:i:s');

        $sql = "UPDATE tbl_blog_posts SET 
            title = ?, slug = ?, content = ?, featured_image = ?, author_id = ?, category_id = ?, read_time = ?, views = ?, is_featured = ?, status = ?, updated_at = ?
            WHERE id = ?";

        $this->db->query($sql, [
            $this->title,
            $this->slug,
            $this->content,
            $this->featured_image,
            $this->author_id,
            $this->category_id,
            $this->read_time,
            $this->views,
            $this->is_featured ? 1 : 0,
            $this->status,
            $updated_at,
            $this->id
        ]);

        // Update Tags (simple approach: delete & reinsert)
        // $this->db->query(
        //     "DELETE FROM tbl_blog_tags bt
        //     JOIN tbl_blog_post_tags bpt ON bt.id = bpt.tag_id
        //     WHERE bpt.post_id = ?",[$this->id]
        // );
        if($this->id){
            // delete existing tag links
            $this->db->query("DELETE FROM tbl_blog_post_tags WHERE post_id = ?", [$this->id]);

            foreach ($tags as $tag) {
                // insert tag if it doesn't already
                $this->db->query(
                    "INSERT INTO tbl_blog_tags (name, slug) 
                    VALUES (?, ?)
                    ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)",
                    [$tag['name'], $tag['slug']]
                );

                // insert link
                $tagId = $this->db->lastInsertId();
                $this->db->query(
                    "INSERT INTO tbl_blog_post_tags (post_id,tag_id) VALUES(?,?)",
                    [$this->id,$tagId]
                );
            }

            // Update SEO
            if (!empty($seo)) {
                $sql = "
                    UPDATE seo_meta SET 
                    entity_type = ?, entity_id = ?, meta_title = ?, meta_description = ?, meta_keywords = ?, og_title = ?, og_description = ?, og_image = ?, canonical_url = ?, robots = ?, focus_keyword = ?, schema_type = ? 
                    WHERE id = ?
                ";

                $this->db->query($sql, [
                    "blogpost",
                    $this->id,
                    $seo['meta_title'] ?? null,
                    $seo['meta_description'] ?? null,
                    $seo['meta_keywords'] ?? null,
                    $seo['og_title'] ?? null,
                    $seo['og_description'] ?? null,
                    $seo['og_image'] ?? null,
                    $seo['canonical_url'] ?? null,
                    $seo['robots'] ?? 'index, follow',
                    $seo["focus_keyword"] ?? null,
                    $seo["schema_type"] ?? null,
                    $seo["id"]
                ]);
            }
        }

        return $this->getPostById($this->id);
    }

    public function updateViews(int $id): bool {
        $this->db->query("UPDATE tbl_blog_posts SET views = views + 1 WHERE id = ?", [$id]);

        return $this->db->affectedRows() > 0;
    }

    public function deletePost(): bool
    {
        if (!$this->id) return false;

        $this->db->query("DELETE FROM tbl_blog_posts WHERE id = ?", [$this->id]);

        // delete the seo meta for this blogpost
        if($this->seoMeta->delete("blogpost", $this->id)){
            return true;
        }

        return false;
    }

    public function all(int $limit = 10, int $offset = 0): array
{
    // Fetch blog posts with author and category
    $sql = "SELECT p.*, c.name AS category, CONCAT(u.firstname, ' ', u.lastname) AS author
            FROM tbl_blog_posts p
            LEFT JOIN tbl_blog_categories c ON p.category_id = c.id
            LEFT JOIN tbl_user u ON p.author_id = u.id
            ORDER BY p.id DESC
            LIMIT ? OFFSET ?";

    $result = $this->db->query($sql, [$limit, $offset]);

    $posts = [];
    if ($result) {
        while ($row = $result->fetch_assoc()) {

            $postId = $row['id'];

            // Fetch tags for this post
            $tagResult = $this->db->query(
                "SELECT t.id, t.name, t.slug
                 FROM tbl_blog_tags t
                 INNER JOIN tbl_blog_post_tags pt ON t.id = pt.tag_id
                 WHERE pt.post_id = ?",
                [$postId]
            );

            $tags = [];
            if ($tagResult) {
                while ($tag = $tagResult->fetch_assoc()) {
                    $tags[] = $tag;
                }
            }

            // Fetch SEO meta for this post
            $seoResult = $this->seoMeta->getByEntity("blogpost", $postId);

            $posts[] = [
                'details' => $row,
                'tags' => $tags,
                'seo' => $seoResult
            ];
        }
    }

    return $posts;
}
}


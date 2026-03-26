<?php

namespace App\Modules\SeoMeta\Models;

use App\Core\Database;

class SeoMeta
{
    private Database $db;

    private ?int $id = null;
    private string $entity_type;
    private int $entity_id;
    private string $meta_title;
    private string $meta_description;
    private ?string $meta_keywords = null;
    private ?string $og_title = null;
    private ?string $og_description = null;
    private ?string $og_image = null;
    private ?string $canonical_url = null;
    private ?string $robots = "index, follow";
    private ?string $focus_keywords = null;
    private ?string $schema_type = null;

    public function __construct()
    {
        $this->db = Database::connect();
    }

    // =======================
    // Getters & Setters
    // =======================

    public function getId(): ?int { return $this->id; }

    public function setEntityType(string $entity_type): void { $this->entity_type = $entity_type; }
    public function setEntityId(int $entity_id): void { $this->entity_id = $entity_id; }

    public function setMetaTitle(string $value): void { $this->meta_title = $value; }
    public function setMetaDescription(string $value): void { $this->meta_description = $value; }

    public function setMetaKeywords(?string $value): void { $this->meta_keywords = $value; }
    public function setOgTitle(?string $value): void { $this->og_title = $value; }
    public function setOgDescription(?string $value): void { $this->og_description = $value; }
    public function setOgImage(?string $value): void { $this->og_image = $value; }
    public function setCanonicalUrl(?string $value): void { $this->canonical_url = $value; }
    public function setRobots(?string $value): void { $this->robots = $value; }
    public function setFocusKeywords(?string $value): void { $this->focus_keywords = $value; }
    public function setSchemaType(?string $value): void { $this->schema_type = $value; }

    // =======================
    // CRUD METHODS
    // =======================

    public function create(): bool
    {
        $sql = "INSERT INTO seo_meta
            (entity_type, entity_id, meta_title, meta_description, meta_keywords,
             og_title, og_description, og_image, canonical_url, robots, focus_keyword, schema_type)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $this->db->query($sql, [
            $this->entity_type,
            $this->entity_id,
            $this->meta_title,
            $this->meta_description,
            $this->meta_keywords,
            $this->og_title,
            $this->og_description,
            $this->og_image,
            $this->canonical_url,
            $this->robots,
            $this->focus_keywords,
            $this->schema_type
        ]);

        $this->id = $this->db->lastInsertId();

        return $this->id !== null;
    }

    public function update(): bool
    {
        $sql = "UPDATE seo_meta SET
            meta_title = ?,
            meta_description = ?,
            meta_keywords = ?,
            og_title = ?,
            og_description = ?,
            og_image = ?,
            canonical_url = ?,
            robots = ?,
            focus_keyword = ?,
            schema_type = ?
            WHERE entity_type = ? AND entity_id = ?";

        $this->db->query($sql, [
            $this->meta_title,
            $this->meta_description,
            $this->meta_keywords,
            $this->og_title,
            $this->og_description,
            $this->og_image,
            $this->canonical_url,
            $this->robots,
            $this->focus_keywords,
            $this->schema_type,
            $this->entity_type,
            $this->entity_id
        ]);

        return $this->db->affectedRows() > 0;
    }

    public function delete(string $entity_type, int $entity_id ): bool
    {
        $sql = "DELETE FROM seo_meta WHERE entity_type = ? AND entity_id = ?";
        $this->db->query($sql, [$entity_type, $entity_id]);

        return $this->db->affectedRows() > 0;
    }

    public function getByEntity(string $entity_type, int $entity_id): ?array
    {
        $sql = "SELECT * FROM seo_meta WHERE entity_type = ? AND entity_id = ?";
        $result = $this->db->query($sql, [$entity_type, $entity_id]);

        return ($result && $result->num_rows > 0)
            ? $result->fetch_assoc()
            : null;
    }
}

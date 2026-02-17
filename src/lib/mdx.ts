import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "src/content");

export interface ContentMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorRole?: string;
  tags: string[];
  image?: string;
  readingTime: string;
  published: boolean;
}

export interface ContentItem {
  meta: ContentMeta;
  content: string;
}

function getContentDirectory(type: "blog" | "case-studies" | "whitepapers") {
  return path.join(CONTENT_DIR, type);
}

export function getAllContent(type: "blog" | "case-studies" | "whitepapers"): ContentMeta[] {
  const dir = getContentDirectory(type);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const items = files
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);
      const stats = readingTime(content);

      return {
        slug: filename.replace(/\.mdx$/, ""),
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
        author: data.author || "ParityScope Team",
        authorRole: data.authorRole,
        tags: data.tags || [],
        image: data.image,
        readingTime: stats.text,
        published: data.published !== false,
      } satisfies ContentMeta;
    })
    .filter((item) => item.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return items;
}

export function getContentBySlug(
  type: "blog" | "case-studies" | "whitepapers",
  slug: string
): ContentItem | null {
  const dir = getContentDirectory(type);
  const filePath = path.join(dir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    meta: {
      slug,
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      author: data.author || "ParityScope Team",
      authorRole: data.authorRole,
      tags: data.tags || [],
      image: data.image,
      readingTime: stats.text,
      published: data.published !== false,
    },
    content,
  };
}

export function getAllSlugs(type: "blog" | "case-studies" | "whitepapers"): string[] {
  const dir = getContentDirectory(type);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getContentByTag(
  type: "blog" | "case-studies" | "whitepapers",
  tag: string
): ContentMeta[] {
  return getAllContent(type).filter((item) =>
    item.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export function getAllTags(type: "blog" | "case-studies" | "whitepapers"): string[] {
  const items = getAllContent(type);
  const tagSet = new Set<string>();
  items.forEach((item) => item.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

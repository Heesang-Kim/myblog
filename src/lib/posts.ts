import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  emoji: string;
  excerpt: string;
  tags: string[];
};

export type Post = PostMeta & {
  contentHtml: string;
};

const postsDir = path.join(process.cwd(), "content", "posts");

function readPostFile(slug: string) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const meta: PostMeta = {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    emoji: String(data.emoji ?? "🌷"),
    excerpt: String(data.excerpt ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
  };
  return { meta, content };
}

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => readPostFile(slug).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post> {
  const { meta, content } = readPostFile(slug);
  const processed = await remark().use(html).process(content);
  return { ...meta, contentHtml: processed.toString() };
}

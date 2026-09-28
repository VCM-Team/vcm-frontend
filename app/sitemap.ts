import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/src/shared/data/blog.data";
import { LEADERSHIP } from "@/src/shared/data/team.data";

const BASE = "https://discovervcm.com";
const APP_DIR = path.join(process.cwd(), "app");

// Páginas que existen pero no deben indexarse todavía
const EXCLUDED = new Set<string>(["/partnerships"]);

const PAGE_FILE = /^page\.(tsx|ts|jsx|js|mdx)$/;

/** Recorre app/ y devuelve la URL de cada carpeta que tiene un page.tsx */
function getStaticRoutes(dir = APP_DIR, base = ""): string[] {
    const routes: string[] = [];

    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (!entry.isDirectory()) {
            if (PAGE_FILE.test(entry.name)) routes.push(base || "/");
            continue;
        }

        const name = entry.name;

        // api/, carpetas privadas (_x), dinámicas ([slug]) y slots paralelos (@x) no son páginas estáticas
        if (name === "api" || name.startsWith("_") || name.startsWith("[") || name.startsWith("@")) continue;

        // Grupos como (funnel) no aparecen en la URL
        const isGroup = name.startsWith("(") && name.endsWith(")");
        routes.push(...getStaticRoutes(path.join(dir, name), isGroup ? base : `${base}/${name}`));
    }

    return routes;
}

const toUrl = (route: string) => (route === "/" ? BASE : `${BASE}${route}`);

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = getStaticRoutes().filter((route) => !EXCLUDED.has(route));

    return [
        ...staticRoutes.map((route) => ({ url: toUrl(route) })),
        ...BLOG_POSTS.map((p) => ({ url: `${BASE}/blog/${p.slug}`, lastModified: p.date })),
        ...LEADERSHIP.map((m) => ({ url: `${BASE}/about-us/team/${m.slug}` })),
    ];
}
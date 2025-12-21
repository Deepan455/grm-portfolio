# SEO Portfolio Website (CMS-Based) – Concise Project Document

## 1. Objective

Build a fast, SEO-optimized portfolio website for an SEO professional with a  **CMS-driven blog** , easy content publishing, and strong Core Web Vitals.

---

## 2. Recommended Tech Stack

### Frontend

* **Next.js (App Router)**
  * Server-Side Rendering (SSR) & Static Site Generation (SSG)
  * SEO-friendly HTML output

### Styling

* **Tailwind CSS**
  * Responsive, clean UI
  * Minimal CSS overhead

### CMS (Blog + Content)

* **Sanity CMS** (recommended)
  * Web-based editor
  * Drafts, revisions, scheduling
  * Structured content (ideal for SEO)

*(Alternative CMS: Contentful / Notion — same concept, different UI)*

### Hosting

* **Vercel** (Frontend)
* **Sanity Cloud** (CMS)

---

## 3. Core Features

### Pages

* Home
* About
* Services
* Case Studies
* Blog (CMS-driven)
* Contact

### Blog Capabilities

* Rich text editor (no Markdown required)
* Categories & tags
* Featured image
* Author & publish date
* Draft / publish workflow
* SEO fields per post

---

## 4. SEO Requirements (Mandatory)

* Custom meta title & description (from CMS)
* Clean URLs (slug-based)
* Open Graph & Twitter cards
* Schema:
  * Person / Organization
  * BlogPosting
* Auto-generated:
  * sitemap.xml
  * robots.txt
* Optimized images (lazy loading)

---

## 5. Content Model (Sanity)

**Blog Post Fields:**

* title (string)
* slug (string)
* metaTitle (string)
* metaDescription (text)
* featuredImage (image)
* content (rich text)
* category (string)
* tags (array)
* author (reference)
* publishedAt (date)
* updatedAt (date)

---

## 6. Blog Publishing Workflow

1. Login to CMS dashboard
2. Click **New Blog Post**
3. Fill SEO + content fields
4. Save as draft or publish
5. Website updates automatically

(No Git, no deployment steps for writers)

---

## 7. Analytics & Monitoring

* Google Analytics
* Google Search Console
* PageSpeed Insights

---

## 8. Scalability & Upgrade Path

* Add multilingual support later
* Add lead forms / CRM integration
* Migrate CMS if needed without redesign

---

## 9. Non-Goals (Intentionally Excluded)

* No custom backend server
* No user login system
* No heavy animations

(Focus is performance + rankings)

---

## 10. Summary

This stack prioritizes  **speed, SEO clarity, and ease of publishing** . It avoids overengineering while remaining scalable and professional — ideal for an SEO portfolio intended to rank and convert.

-- Turso / libSQL migration: portfolio work table
-- Run: turso db shell <your-db-name> < db/migrations/001_create_work.sql

CREATE TABLE IF NOT EXISTS work (
  -- Core
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  slug         TEXT    NOT NULL UNIQUE,              -- e.g. "haiven" → /work/haiven
  title        TEXT    NOT NULL,
  excerpt      TEXT,                                 -- short blurb for cards (optional)
  desc         TEXT    NOT NULL,                     -- full description for detail page
  thumbnail    TEXT,                                 -- URL or path, e.g. "/images/haiven.png"
  link         TEXT    NOT NULL,                     -- live project URL
  repo_url     TEXT,                                 -- GitHub / source (optional)
  stack        TEXT    NOT NULL,                     -- comma-separated: "Next.js, TypeScript, Supabase"

  -- Display & filtering
  category     TEXT    NOT NULL DEFAULT 'web',       -- web | mobile | branding | other
  client       TEXT,                                 -- client or company name
  year         INTEGER,                              -- completion year, e.g. 2025
  featured     INTEGER  NOT NULL DEFAULT 0 CHECK (featured IN (0, 1)),
  sort_order   INTEGER  NOT NULL DEFAULT 0,          -- higher = shown first
  status       TEXT    NOT NULL DEFAULT 'published'
               CHECK (status IN ('draft', 'published', 'archived')),

  -- Extras
  gallery      TEXT    NOT NULL DEFAULT '[]',        -- JSON array of image URLs
  meta         TEXT    NOT NULL DEFAULT '{}',        -- JSON: { "role": "...", "duration": "..." }

  -- Timestamps
  created_at   TEXT    NOT NULL DEFAULT (datetime('now')),
  updated_at   TEXT    NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_work_published_sort
  ON work (status, sort_order DESC, id DESC);

CREATE INDEX IF NOT EXISTS idx_work_featured
  ON work (featured, sort_order DESC)
  WHERE featured = 1 AND status = 'published';

CREATE INDEX IF NOT EXISTS idx_work_category
  ON work (category, status, sort_order DESC);

-- Optional: seed from existing static data
INSERT INTO work (slug, title, desc, link, stack, featured, sort_order) VALUES
(
  'haiven',
  'Haiven',
  'A cutting-edge AI-powered platform for generating high-quality images and videos using custom-trained machine learning models. Built for artists, designers, and content creators, Haiven offers advanced style transfer, real-time generation capabilities, and an intuitive interface. The platform integrates seamlessly with Replicate AI''s API for powerful model inference, features user authentication and project management via Supabase, and delivers a responsive, modern UI with smooth animations and optimized performance.',
  'https://aitopia-brown.vercel.app/',
  'Next.js 14, TypeScript, Replicate AI, Supabase, Tailwind CSS, Server Actions, React Hook Form',
  1,
  100
),
(
  'tommy-choi-visuals',
  'Tommy Choi Visuals',
  'A professional media portfolio website designed to showcase creative video and photography work with elegance and impact. The platform features a sophisticated content management system, dynamic project galleries with filtering and search capabilities, and seamless video playback integration. Built with performance in mind, it includes optimized image loading, smooth page transitions, and a fully responsive design that works flawlessly across all devices. The site leverages AWS for media storage and Neon Database for efficient data management.',
  'https://www.tommychoivisuals.com/',
  'Next.js 14, TypeScript, Neon PostgreSQL, AWS S3, Tailwind CSS, Server Components, Image Optimization',
  0,
  90
),
(
  'posted-productions',
  'Posted Productions',
  'A high-performance portfolio website for a leading media production company, featuring dynamic content management, interactive project showcases, and seamless client collaboration tools. The platform includes advanced filtering systems, real-time content updates, and integrated contact forms with automated email notifications. Built with modern architecture principles, it delivers exceptional loading speeds, SEO optimization, and a polished user experience that reflects the company''s creative excellence. Deployed on Vercel with Google Cloud integration for scalable infrastructure.',
  'https://postedproductions.vercel.app/',
  'Next.js 14, TypeScript, Neon Database, Google CS, Vercel, Tailwind CSS, Server Actions, Email API',
  0,
  80
),
(
  'dashi-website',
  'Dashi Website',
  'An immersive restaurant website that beautifully blends Vietnamese and Japanese culinary traditions through thoughtful design and storytelling. The site features an elegant menu presentation with interactive elements, cultural narrative sections, and stunning food photography galleries. Built with attention to detail, it includes online reservation systems, location integration, and a mobile-first responsive design that ensures an exceptional dining experience discovery. The platform showcases modern web development practices while honoring traditional culinary heritage.',
  'https://dashifinalv2.vercel.app/',
  'Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Google Maps API, Responsive Design',
  0,
  70
),
(
  'internconnect',
  'InternConnect',
  'A comprehensive internship matching platform that connects talented students with innovative companies. The platform features advanced job search and filtering capabilities, user profile management, application tracking systems, and real-time notifications. Built with Material-UI for a polished, professional interface, it includes secure authentication, role-based access control, and analytics dashboards. The platform optimizes the internship discovery process with intelligent matching algorithms and provides both students and employers with powerful tools for successful connections.',
  'https://internconnect.se/',
  'Next.js, TypeScript, Material-UI (MUI), PostgreSQL, Authentication, Server Actions, Email Integration',
  0,
  60
),
(
  'xedrix',
  'Xedrix',
  'A comprehensive educational platform and course management system designed to streamline student learning experiences and administrative workflows. Built on WordPress with a fully integrated CRM system, Xedrix provides course enrollment management, student progress tracking, payment processing, and automated communication tools. The platform features an intuitive dashboard for both students and administrators, responsive design for mobile and desktop access, and robust content management capabilities. The CRM integration enables seamless student relationship management, automated email campaigns, and detailed analytics for course performance and student engagement.',
  'https://www.xedrix.se/',
  'WordPress, PHP, MySQL, Custom CRM Integration, Elementor, REST API, Email Automation',
  0,
  50
);



INSERT INTO work (slug, title, desc,  stack, featured, sort_order) VALUES
(
  'il-david-chang',
  'Il David Chang',
  'A Fast and responsive website for a Director and Cinematographer based in NY, built in Squarespace. It is a simple and clean website with a modern design.',
  'Squarespace, JavaScript, HTML, CSS, UI/UX Design',
  0,
  97
),(
  'sunny-shanghai',
  'Sunny Shanghai',
  'digitalized their internal quality control system and their product catalog, built with typescript and nextjs. They now have a modern and responsive website/app that is easy to use and maintain.',
  'Next.js, TypeScript, Supabase, Microsoft Azure, MySQL, Tailwind CSS, Server Actions, React Hook Form',
  0,
  99
),(
'substudio97',
'Substudio97',
'a website for a Fashion design studio based in Shanghai, built with nextjs and typescript. It is a modern and responsive website with and perfectly showcasing their products and services.',
'Next.js, TypeScript, Supabase, Tailwind CSS, Server Actions, React Hook Form',
  0,
  98
)
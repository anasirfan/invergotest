#!/usr/bin/env python3
"""
InverGo Design — Daily SEO Page Generator
Runs via GitHub Actions every day.
Generates location+service pages and pushes to GitHub.
"""

import os
import json
import re
import time
import random
from pathlib import Path
from openai import OpenAI

# ─── CONFIG ────────────────────────────────────────────────────────────────────
OPENAI_API_KEY = os.environ["OPENAI_API_KEY"]
PAGES_PER_RUN   = int(os.environ.get("PAGES_PER_RUN", "20"))
BASE_URL        = "https://www.invergodesign.com"
REPO_ROOT       = Path(__file__).parent.parent
APP_DIR         = REPO_ROOT / "app"
GENERATED_JSON  = REPO_ROOT / "lib" / "generated-pages.json"

client = OpenAI(api_key=OPENAI_API_KEY)

# ─── TARGET CITIES ─────────────────────────────────────────────────────────────
CITIES = [
    # Tier 1 — High demand
    {"city": "New York",     "state": "NY", "state_full": "New York"},
    {"city": "Los Angeles",  "state": "CA", "state_full": "California"},
    {"city": "Chicago",      "state": "IL", "state_full": "Illinois"},
    {"city": "Houston",      "state": "TX", "state_full": "Texas"},
    {"city": "Miami",        "state": "FL", "state_full": "Florida"},
    {"city": "Dallas",       "state": "TX", "state_full": "Texas"},
    {"city": "Austin",       "state": "TX", "state_full": "Texas"},
    {"city": "Seattle",      "state": "WA", "state_full": "Washington"},
    {"city": "Atlanta",      "state": "GA", "state_full": "Georgia"},
    {"city": "Denver",       "state": "CO", "state_full": "Colorado"},
    # Tier 2 — Medium competition (faster rankings)
    {"city": "Phoenix",      "state": "AZ", "state_full": "Arizona"},
    {"city": "Nashville",    "state": "TN", "state_full": "Tennessee"},
    {"city": "Charlotte",    "state": "NC", "state_full": "North Carolina"},
    {"city": "Tampa",        "state": "FL", "state_full": "Florida"},
    {"city": "Orlando",      "state": "FL", "state_full": "Florida"},
    {"city": "San Antonio",  "state": "TX", "state_full": "Texas"},
    {"city": "Las Vegas",    "state": "NV", "state_full": "Nevada"},
    {"city": "Portland",     "state": "OR", "state_full": "Oregon"},
    {"city": "Raleigh",      "state": "NC", "state_full": "North Carolina"},
    {"city": "Jacksonville", "state": "FL", "state_full": "Florida"},
    {"city": "Sacramento",   "state": "CA", "state_full": "California"},
    {"city": "Minneapolis",  "state": "MN", "state_full": "Minnesota"},
    {"city": "San Diego",    "state": "CA", "state_full": "California"},
    {"city": "Baltimore",    "state": "MD", "state_full": "Maryland"},
    {"city": "Boston",       "state": "MA", "state_full": "Massachusetts"},
    # Tier 3 — Low competition (quickest wins)
    {"city": "Plano",        "state": "TX", "state_full": "Texas"},
    {"city": "Scottsdale",   "state": "AZ", "state_full": "Arizona"},
    {"city": "Henderson",    "state": "NV", "state_full": "Nevada"},
    {"city": "Chandler",     "state": "AZ", "state_full": "Arizona"},
    {"city": "Gilbert",      "state": "AZ", "state_full": "Arizona"},
    {"city": "Frisco",       "state": "TX", "state_full": "Texas"},
    {"city": "McKinney",     "state": "TX", "state_full": "Texas"},
    {"city": "Overland Park","state": "KS", "state_full": "Kansas"},
    {"city": "Fort Worth",   "state": "TX", "state_full": "Texas"},
    {"city": "Arlington",    "state": "TX", "state_full": "Texas"},
    {"city": "Irvine",       "state": "CA", "state_full": "California"},
    {"city": "Tempe",        "state": "AZ", "state_full": "Arizona"},
    {"city": "Boise",        "state": "ID", "state_full": "Idaho"},
    {"city": "Richmond",     "state": "VA", "state_full": "Virginia"},
    {"city": "Louisville",   "state": "KY", "state_full": "Kentucky"},
]

# ─── TARGET SERVICES ───────────────────────────────────────────────────────────
SERVICES = [
    {
        "service":  "Web Design",
        "slug_key": "web-design",
        "keywords": ["web design agency", "website design", "professional website", "custom web design"],
    },
    {
        "service":  "SEO Services",
        "slug_key": "seo-services",
        "keywords": ["SEO agency", "search engine optimization", "local SEO", "Google ranking"],
    },
    {
        "service":  "Social Media Marketing",
        "slug_key": "social-media-marketing",
        "keywords": ["social media agency", "social media management", "Instagram marketing", "Facebook marketing"],
    },
    {
        "service":  "Meta Ads",
        "slug_key": "meta-ads",
        "keywords": ["Meta ads agency", "Facebook ads", "Instagram ads", "paid advertising"],
    },
    {
        "service":  "Shopify Development",
        "slug_key": "shopify-development",
        "keywords": ["Shopify developer", "Shopify store", "ecommerce development", "online store"],
    },
    {
        "service":  "Mobile App Development",
        "slug_key": "mobile-app-development",
        "keywords": ["mobile app developer", "iOS app", "Android app", "React Native"],
    },
    {
        "service":  "Lead Generation",
        "slug_key": "lead-generation",
        "keywords": ["lead generation agency", "B2B leads", "sales leads", "lead gen"],
    },
    {
        "service":  "Graphic Design",
        "slug_key": "graphic-design",
        "keywords": ["graphic design agency", "logo design", "brand design", "visual identity"],
    },
]

# ─── HELPERS ───────────────────────────────────────────────────────────────────

def load_generated():
    if GENERATED_JSON.exists():
        return json.loads(GENERATED_JSON.read_text())
    return []

def save_generated(pages):
    GENERATED_JSON.write_text(json.dumps(pages, indent=2))

def make_slug(city, service_slug):
    city_slug = city.lower().replace(" ", "-")
    return f"{service_slug}-{city_slug}"

def page_exists(slug):
    return (APP_DIR / slug / "page.js").exists()

def get_pending_pages(generated_slugs):
    pending = []
    for svc in SERVICES:
        for city_info in CITIES:
            slug = make_slug(city_info["city"], svc["slug_key"])
            if slug not in generated_slugs and not page_exists(slug):
                pending.append({"city": city_info, "service": svc, "slug": slug})
    return pending

# ─── AI CONTENT GENERATION ────────────────────────────────────────────────────

def generate_page_data(city_info, svc):
    city      = city_info["city"]
    state     = city_info["state"]
    state_full= city_info["state_full"]
    service   = svc["service"]
    keywords  = ", ".join(svc["keywords"])

    prompt = f"""You are an expert SEO copywriter for InverGo Design, a US-based premium digital agency headquartered in Stafford, Texas. Write content for a location-specific SEO page.

TARGET: {service} in {city}, {state}
KEYWORDS: {keywords}

Return ONLY a valid JSON object with this exact structure:
{{
  "metaTitle": "string (60 chars max, include city and service)",
  "metaDescription": "string (155 chars max, compelling, include city)",
  "h1": "string (include city, state, and service)",
  "intro": "string (2-3 sentences, mention the city specifically, why this service matters there)",
  "whyUs": [
    {{"icon": "emoji", "title": "string", "desc": "string (2 sentences)"}},
    {{"icon": "emoji", "title": "string", "desc": "string (2 sentences)"}},
    {{"icon": "emoji", "title": "string", "desc": "string (2 sentences)"}},
    {{"icon": "emoji", "title": "string", "desc": "string (2 sentences)"}}
  ],
  "services": [
    {{"title": "string", "desc": "string (1-2 sentences)"}},
    {{"title": "string", "desc": "string (1-2 sentences)"}},
    {{"title": "string", "desc": "string (1-2 sentences)"}},
    {{"title": "string", "desc": "string (1-2 sentences)"}},
    {{"title": "string", "desc": "string (1-2 sentences)"}},
    {{"title": "string", "desc": "string (1-2 sentences)"}}
  ],
  "faqs": [
    {{"q": "string (city-specific question)", "a": "string (2-3 sentences, mention city)"}},
    {{"q": "string", "a": "string (2-3 sentences)"}},
    {{"q": "string", "a": "string (2-3 sentences)"}},
    {{"q": "string", "a": "string (2-3 sentences)"}}
  ],
  "cta": {{
    "title": "string (urgent CTA headline mentioning {city})",
    "desc": "string (1-2 sentences)",
    "button": "Get a Free Quote"
  }}
}}

Rules:
- Every section must mention {city} or {state} at least once
- Content must feel genuinely written for {city}'s local market
- No generic filler — reference specific things about {city} where relevant
- FAQ questions should be what {city} business owners actually search for
- Return ONLY the JSON, no markdown, no explanation"""

    resp = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.75,
        max_tokens=2000,
    )
    raw = resp.choices[0].message.content.strip()
    # Clean markdown fences if present
    raw = re.sub(r"^```json\s*", "", raw)
    raw = re.sub(r"\s*```$", "", raw)
    return json.loads(raw)

# ─── PAGE FILE WRITER ─────────────────────────────────────────────────────────

def write_page(slug, city_info, svc, content):
    city   = city_info["city"]
    state  = city_info["state"]
    service= svc["service"]

    schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "InverGo Design",
        "url": "https://www.invergodesign.com",
        "telephone": "+13322494910",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "13000 Murphy Rd",
            "addressLocality": "Stafford",
            "addressRegion": "TX",
            "postalCode": "77477",
            "addressCountry": "US"
        },
        "areaServed": {"@type": "City", "name": city},
        "description": content["metaDescription"],
        "priceRange": "$$",
    }

    page_data = {
        "h1":       content["h1"],
        "city":     city,
        "state":    state,
        "service":  service,
        "slug":     slug,
        "intro":    content["intro"],
        "whyUs":    content["whyUs"],
        "services": content["services"],
        "faqs":     content["faqs"],
        "cta":      content["cta"],
        "schema":   schema,
    }

    data_json  = json.dumps(page_data, ensure_ascii=False)
    # Use json.dumps for safe string escaping — handles apostrophes, quotes, etc.
    meta_title = json.dumps(content["metaTitle"])
    meta_desc  = json.dumps(content["metaDescription"])

    lines = [
        "import LocationPage from '@/components/sections/LocationPage';",
        "",
        "const data = " + data_json + ";",
        "",
        "export const metadata = {",
        "  title: " + meta_title + ",",
        "  description: " + meta_desc + ",",
        "  alternates: { canonical: '/" + slug + "' },",
        "  openGraph: {",
        "    title: " + meta_title + ",",
        "    description: " + meta_desc + ",",
        "    url: '/" + slug + "',",
        "  },",
        "};",
        "",
        "export default function Page() {",
        "  return <LocationPage data={data} />;",
        "}",
        "",
    ]
    js_content = "\n".join(lines)

    page_dir = APP_DIR / slug
    page_dir.mkdir(parents=True, exist_ok=True)
    (page_dir / "page.js").write_text(js_content, encoding="utf-8")
    print(f"  ✅ Written: app/{slug}/page.js")

# ─── SITEMAP UPDATER ──────────────────────────────────────────────────────────

def update_sitemap(all_generated_slugs):
    sitemap_path = REPO_ROOT / "app" / "sitemap.js"

    location_entries = "\n".join([
        f"    {{ url: `${{BASE_URL}}/{slug}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 }},"
        for slug in all_generated_slugs
    ])

    sitemap_content = f"""const BASE_URL = 'https://www.invergodesign.com';

export default function sitemap() {{
  const staticPages = [
    {{ url: `${{BASE_URL}}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 }},
    {{ url: `${{BASE_URL}}/packages`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 }},
    {{ url: `${{BASE_URL}}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 }},
    {{ url: `${{BASE_URL}}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 }},
    {{ url: `${{BASE_URL}}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 }},
  ];

  const servicePages = [
    'graphic-design', 'video-editing', 'web-development', 'mobile-apps',
    'ecommerce', 'va-consultation', 'seo', 'social-media',
    'lead-generation', 'ebooks', 'ai-automation',
  ].map((slug) => ({{
    url: `${{BASE_URL}}/${{slug}}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }}));

  const caseStudyPages = [
    'amh', 'billcamp', 'costa', 'dafinger', 'divine',
    'ringed', 'sous', 'stairparts', 'strategic',
  ].map((slug) => ({{
    url: `${{BASE_URL}}/${{slug}}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }}));

  const locationPages = [
{location_entries}
  ];

  return [...staticPages, ...servicePages, ...caseStudyPages, ...locationPages];
}}
"""
    sitemap_path.write_text(sitemap_content, encoding="utf-8")
    print(f"  ✅ Sitemap updated with {len(all_generated_slugs)} location pages")

# ─── MAIN ─────────────────────────────────────────────────────────────────────

def main():
    print(f"\n🚀 InverGo SEO Generator — {PAGES_PER_RUN} pages this run\n")

    generated = load_generated()
    generated_slugs = {p["slug"] for p in generated}

    pending = get_pending_pages(generated_slugs)
    print(f"📋 Total pending: {len(pending)} | Already done: {len(generated_slugs)}")

    if not pending:
        print("✅ All pages already generated!")
        return

    # Prioritize Tier 3 cities first (lowest competition = fastest rankings)
    tier3_cities = {"Plano","Scottsdale","Henderson","Chandler","Gilbert",
                    "Frisco","McKinney","Overland Park","Fort Worth","Arlington",
                    "Irvine","Tempe","Boise","Richmond","Louisville"}
    pending.sort(key=lambda x: 0 if x["city"]["city"] in tier3_cities else 1)

    to_generate = pending[:PAGES_PER_RUN]
    new_slugs   = []

    for i, item in enumerate(to_generate):
        city_info = item["city"]
        svc       = item["service"]
        slug      = item["slug"]

        print(f"\n[{i+1}/{len(to_generate)}] {svc['service']} — {city_info['city']}, {city_info['state']}")

        try:
            content = generate_page_data(city_info, svc)
            write_page(slug, city_info, svc, content)

            generated.append({
                "slug":    slug,
                "city":    city_info["city"],
                "state":   city_info["state"],
                "service": svc["service"],
            })
            new_slugs.append(slug)
            save_generated(generated)

            # Rate limit — be kind to OpenAI API
            if i < len(to_generate) - 1:
                time.sleep(1.5)

        except Exception as e:
            print(f"  ❌ Error: {e}")
            continue

    all_slugs = [p["slug"] for p in generated]
    update_sitemap(all_slugs)

    print(f"\n✅ Done! Generated {len(new_slugs)} new pages.")
    print(f"   Total location pages: {len(all_slugs)}")

if __name__ == "__main__":
    main()

import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Precise Salon';
const DEFAULT_OG_IMAGE = 'https://lay-01.github.io/precise-salon/og-image.jpg';

/**
 * Reusable SEO component for dynamic per-route head management.
 *
 * Props:
 *   title       – Full page title (displayed in browser tab + search results)
 *   description – Meta description, ideally under 155 characters
 *   canonical   – Canonical URL, e.g. "https://www.precisesalon.in/services"
 *   ogImage     – Absolute URL to Open Graph image (optional, falls back to default)
 */
export default function SEO({ title, description, canonical, ogImage }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      {/* ── Primary SEO ─────────────────────────────────────────────── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* ── Open Graph (Facebook, WhatsApp, LinkedIn) ───────────────── */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={image} />

      {/* ── Twitter Card ────────────────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

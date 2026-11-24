import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { site, fullAddress, hero } from '../data/site'
import { cdn, srcSet, HERO_WIDTHS } from '../lib/images'
import { NotFoundPage } from '../components/NotFoundPage'

import '../styles.css'

const ogImage = `${site.url}/.netlify/images?url=/img/hero.jpg&w=1200&h=630&fit=cover&fm=jpg&q=80`

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': ['AutoWash', 'LocalBusiness'],
  name: site.fullName,
  description: site.description,
  url: site.url,
  image: ogImage,
  telephone: `+${site.whatsappNumber}`,
  priceRange: '$$',
  slogan: site.motto,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: 'BR',
  },
  areaServed: ['Itu', 'Salto', 'Sorocaba', 'Indaiatuba'],
  openingHours: site.openingHoursSchema,
  sameAs: [site.instagramUrl],
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`,
}

export const Route = createRootRoute({
  notFoundComponent: NotFoundPage,
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      { title: site.title },
      { name: 'description', content: site.description },
      { name: 'keywords', content: site.keywords },
      { name: 'theme-color', content: '#0E0E10' },
      { name: 'geo.region', content: 'BR-SP' },
      { name: 'geo.placename', content: 'Itu' },
      { property: 'og:site_name', content: site.fullName },
      { property: 'og:title', content: site.title },
      { property: 'og:description', content: site.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:url', content: site.url },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Moto polida no estúdio da Box140' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: site.title },
      { name: 'twitter:description', content: site.description },
      { name: 'twitter:image', content: ogImage },
    ],
    links: [
      { rel: 'canonical', href: site.url },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,500;0,600;0,700;0,800;1,700&family=Manrope:wght@400;500;600;700&display=swap',
      },
      {
        rel: 'preload',
        as: 'image',
        href: cdn(hero.image, 1376),
        imageSrcSet: srcSet(hero.image, HERO_WIDTHS),
        imageSizes: '100vw',
        fetchPriority: 'high',
      },
    ],
    scripts: [
      { children: "document.documentElement.classList.add('js')" },
      { type: 'application/ld+json', children: JSON.stringify(localBusiness) },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

/** Monta URLs da Netlify Image CDN (redimensiona e converte para WebP). */
export function cdn(src: string, width: number, quality = 72) {
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${width}&fm=webp&q=${quality}`
}

export function srcSet(src: string, widths: number[], quality = 72) {
  return widths.map((w) => `${cdn(src, w, quality)} ${w}w`).join(', ')
}

export const HERO_WIDTHS = [640, 960, 1376]

/** Atraso de animação via variável CSS (--delay). */
export function delay(ms: number) {
  return { '--delay': `${ms}ms` } as import('react').CSSProperties
}

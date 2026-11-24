import { describe, expect, it } from 'vitest'
import {
  comparisonCategories,
  comparisons,
  maps,
  nav,
  services,
  site,
  whatsappLink,
} from './site'

describe('site data', () => {
  it('builds a WhatsApp link with the default message', () => {
    const url = new URL(whatsappLink())
    expect(url.hostname).toBe('wa.me')
    expect(url.pathname).toBe(`/${site.whatsappNumber}`)
    expect(url.searchParams.get('text')).toBe(site.whatsappDefaultMessage)
  })

  it('has 6 to 9 before/after comparisons, all in known categories', () => {
    expect(comparisons.length).toBeGreaterThanOrEqual(6)
    expect(comparisons.length).toBeLessThanOrEqual(9)
    const ids = comparisonCategories.map((c) => c.id) as string[]
    for (const c of comparisons) expect(ids).toContain(c.category)
  })

  it('has unique service ids and map links for the address', () => {
    expect(new Set(services.map((s) => s.id)).size).toBe(services.length)
    expect(maps.directions).toContain('Itu')
    expect(nav.map((n) => n.id)).toContain('antes-e-depois')
  })
})

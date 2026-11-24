import { useState } from 'react'
import {
  comparisonCategories,
  comparisons,
  site,
  type ComparisonCategory,
} from '../data/site'
import { CompareSlider } from './CompareSlider'
import { InstagramIcon } from './Icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type Filter = 'todos' | ComparisonCategory

export function BeforeAfter() {
  const [filter, setFilter] = useState<Filter>('todos')
  const items =
    filter === 'todos'
      ? comparisons
      : comparisons.filter((c) => c.category === filter)
  const featured = filter === 'todos' && items.length >= 3

  const filters: { id: Filter; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    ...comparisonCategories,
  ]

  return (
    <section
      id="antes-e-depois"
      className="carbon relative overflow-hidden py-24 sm:py-32"
    >
      <div className="speed-lines -right-40 top-0 h-[28rem] w-[60rem] opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Antes e depois"
            title="O resultado fala por si."
            text="Trabalhos reais feitos aqui na Box140."
          />

          <Reveal delay={120}>
            <div
              role="group"
              aria-label="Filtrar por serviço"
              className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0"
            >
              {filters.map((f) => {
                const count =
                  f.id === 'todos'
                    ? comparisons.length
                    : comparisons.filter((c) => c.category === f.id).length
                const active = filter === f.id
                return (
                  <button
                    key={f.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(f.id)}
                    disabled={count === 0}
                    className={`shrink-0 border px-4 py-2.5 font-display text-sm font-bold uppercase tracking-[0.14em] transition-colors disabled:opacity-40 ${
                      active
                        ? 'border-accent bg-accent text-ink'
                        : 'border-line bg-ink/60 text-steel-2 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {f.label}
                    <span
                      className={`ml-2 text-xs ${active ? 'text-ink/70' : 'text-steel'}`}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </Reveal>
        </div>

        <div
          key={filter}
          className={`mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2 ${featured ? 'lg:grid-cols-3' : ''}`}
          aria-live="polite"
        >
          {items.map((item, i) => (
            <div
              key={item.id}
              className={`hero-in ${featured && i === 0 ? 'md:col-span-2 lg:row-span-2' : ''}`}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <CompareSlider
                item={item}
                className="h-full"
                frameClassName={
                  featured && i === 0
                    ? 'aspect-[4/3] lg:aspect-auto lg:min-h-[24rem] lg:flex-1'
                    : 'aspect-[4/3]'
                }
                sizes={
                  featured && i === 0
                    ? '(min-width: 1024px) 820px, 100vw'
                    : featured
                      ? '(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw'
                      : '(min-width: 768px) 50vw, 100vw'
                }
              />
            </div>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="text-steel-2">
            Tem muito mais trabalho no nosso perfil, com vídeos do processo.
          </p>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost !min-h-14 !px-8"
          >
            <InstagramIcon size={20} />
            Ver mais no Instagram
            <span className="normal-case tracking-normal text-steel">
              {site.instagramHandle}
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}

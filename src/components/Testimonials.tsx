import { useEffect, useRef, useState } from 'react'
import { testimonials } from '../data/site'
import { ChevronLeft, ChevronRight, Star } from './Icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Testimonials() {
  const track = useRef<HTMLUListElement>(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const el = track.current
    if (!el) return
    const onScroll = () => {
      const cards = Array.from(el.children) as HTMLElement[]
      const left = el.scrollLeft
      let best = 0
      cards.forEach((c, i) => {
        if (
          Math.abs(c.offsetLeft - el.offsetLeft - left) <
          Math.abs(cards[best].offsetLeft - el.offsetLeft - left)
        )
          best = i
      })
      // No fim do trilho, marca o último card
      if (left + el.clientWidth >= el.scrollWidth - 4) best = cards.length - 1
      setIndex(best)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (i: number) => {
    const el = track.current
    if (!el) return
    const target = Math.max(0, Math.min(testimonials.length - 1, i))
    const card = el.children[target] as HTMLElement
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: 'smooth' })
  }

  return (
    <section
      className="relative overflow-hidden border-t border-line bg-ink-2 py-24 sm:py-32"
      aria-labelledby="depoimentos-titulo"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="depoimentos-titulo"
            eyebrow="Depoimentos"
            title="Quem já trouxe a moto."
          />
          <Reveal delay={120} className="flex gap-2">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              aria-label="Depoimento anterior"
              className="grid h-12 w-12 place-items-center border border-line text-white transition-colors hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-line disabled:hover:text-white"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              disabled={index === testimonials.length - 1}
              aria-label="Próximo depoimento"
              className="grid h-12 w-12 place-items-center border border-line text-white transition-colors hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-line disabled:hover:text-white"
            >
              <ChevronRight size={22} />
            </button>
          </Reveal>
        </div>

        <ul
          ref={track}
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-2 sm:mx-0 sm:scroll-px-0 sm:px-0"
          aria-label="Avaliações de clientes"
        >
          {testimonials.map((t, i) => (
            <li
              key={t.name}
              className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.84rem)]"
            >
              <Reveal delay={i * 80} className="h-full">
                <figure className="flex h-full flex-col border border-line bg-ink p-7 transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-white/20">
                  <div className="flex items-center justify-between">
                    <div
                      className="flex gap-1 text-accent"
                      aria-label={`${t.rating} de 5 estrelas`}
                      role="img"
                    >
                      {Array.from({ length: 5 }, (_, s) => (
                        <Star key={s} size={18} filled={s < t.rating} />
                      ))}
                    </div>
                    <span
                      className="font-display text-5xl leading-none text-white/10"
                      aria-hidden="true"
                    >
                      “
                    </span>
                  </div>
                  <blockquote className="mt-5 flex-1 text-[1.02rem] leading-relaxed text-steel-2">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
                    <span className="grid h-10 w-10 place-items-center bg-ink-3 font-display text-lg font-bold text-white">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <span className="block font-semibold text-white">
                        {t.name}
                      </span>
                      <span className="block text-sm text-steel">{t.bike}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center gap-2" aria-hidden="true">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              tabIndex={-1}
              onClick={() => goTo(i)}
              className={`h-[3px] -skew-x-[40deg] transition-all duration-300 ${i === index ? 'w-8 bg-accent' : 'w-4 bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

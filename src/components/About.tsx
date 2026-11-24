import { about, site } from '../data/site'
import { cdn, srcSet } from '../lib/images'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-ink py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <Reveal
          direction="left"
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute -left-3 -top-3 h-2/3 w-2/3 border-l-2 border-t-2 border-accent/70 sm:-left-5 sm:-top-5"
          />
          <div className="relative aspect-[4/5] overflow-hidden bg-ink-2">
            <img
              src={cdn(about.image, 800)}
              srcSet={srcSet(about.image, [480, 800, 1100])}
              sizes="(min-width: 1024px) 560px, 90vw"
              alt={about.imageAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 font-display text-sm font-semibold uppercase tracking-[0.25em] text-steel-2">
              No box · {site.address.city}/{site.address.state}
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Sobre</p>
            <h2 className="display mt-4 text-[2.6rem] text-white sm:text-6xl">
              {about.title}
            </h2>
          </Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={100 + i * 90}>
              <p className="mt-6 text-base leading-relaxed text-steel-2 sm:text-lg">
                {p}
              </p>
            </Reveal>
          ))}
          <Reveal delay={320}>
            <blockquote className="mt-10 border-l-2 border-accent pl-6">
              <p className="display text-3xl text-white sm:text-4xl">
                {about.closing}
              </p>
            </blockquote>
            <p className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.3em] text-steel">
              {site.motto} <span className="text-accent">·</span> {site.faith}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

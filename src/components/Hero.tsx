import { hero, site, whatsappLink } from '../data/site'
import { cdn, delay, HERO_WIDTHS, srcSet } from '../lib/images'
import { ArrowRight, WhatsAppIcon } from './Icons'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink lg:items-center"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={cdn(hero.image, 1376)}
          srcSet={srcSet(hero.image, HERO_WIDTHS)}
          sizes="100vw"
          alt={hero.imageAlt}
          fetchPriority="high"
          decoding="async"
          className="hero-zoom h-full w-full object-cover object-[72%_center] lg:object-center"
        />
        {/* Escurecimento para leitura do texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10 lg:bg-gradient-to-r lg:from-ink lg:via-ink/70 lg:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
        <div className="speed-lines inset-y-0 left-0 w-full opacity-70 lg:w-2/3" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 lg:pb-24">
        <div className="max-w-2xl">
          <p className="eyebrow hero-in" style={delay(150)}>
            {hero.eyebrow}
          </p>
          <h1
            className="display shine hero-in mt-5 text-[3.25rem] sm:text-7xl lg:text-[6.25rem]"
            style={delay(300)}
          >
            {hero.title}
          </h1>
          <p
            className="hero-in mt-6 max-w-xl text-base leading-relaxed text-steel-2 sm:text-lg"
            style={delay(480)}
          >
            {hero.subtitle}
          </p>
          <div
            className="hero-in mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={delay(640)}
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !min-h-14 !px-8"
            >
              <WhatsAppIcon size={20} />
              Pedir orçamento
            </a>
            <a href="#antes-e-depois" className="btn btn-ghost !min-h-14 !px-8">
              Ver trabalhos
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <dl
          className="hero-in mt-14 hidden max-w-2xl grid-cols-3 border-t border-line pt-6 sm:grid"
          style={delay(820)}
        >
          {[
            ['Onde', `${site.address.city} – ${site.address.state}`],
            ['Orçamento', 'Sem compromisso'],
            ['Instagram', site.instagramHandle],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-steel">
                {k}
              </dt>
              <dd className="mt-1 font-display text-lg font-semibold uppercase tracking-wide text-white">
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

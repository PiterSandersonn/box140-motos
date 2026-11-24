import {
  finalCta,
  fullAddress,
  maps,
  nav,
  site,
  whatsappLink,
} from '../data/site'
import { InstagramIcon, WhatsAppIcon } from './Icons'
import { Logo } from './Logo'
import { Reveal } from './Reveal'

export function FinalCta() {
  return (
    <section
      id="contato"
      className="relative isolate overflow-hidden bg-accent py-20 text-ink sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-40 [background-image:repeating-linear-gradient(-62deg,transparent_0_26px,rgb(0_0_0/0.08)_26px_27px)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-0 -z-10 h-full w-1/2 -skew-x-[22deg] bg-black/10"
      />
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <Reveal>
          <h2 className="display max-w-3xl text-[2.75rem] sm:text-7xl">
            {finalCta.title}
          </h2>
          <p className="mt-4 text-lg font-medium text-ink/75">
            {finalCta.subtitle}
          </p>
        </Reveal>
        <Reveal delay={150} className="w-full sm:w-auto">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-full !min-h-16 bg-ink !px-10 !text-xl text-white transition-colors hover:bg-ink-3 sm:w-auto"
          >
            <WhatsAppIcon size={24} />
            Chamar no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="carbon border-t border-line pb-28 pt-16 sm:pb-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-6 font-display text-xl font-semibold uppercase tracking-[0.12em] text-white">
            {site.motto} <span className="text-accent">✝</span>
          </p>
          <p className="mt-2 text-sm italic text-steel">{site.faith}.</p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-steel">
            Endereço
          </h3>
          <address className="mt-4 text-sm not-italic leading-relaxed text-steel-2">
            {fullAddress}
          </address>
          <a
            href={maps.view}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-accent hover:text-accent-2"
          >
            Ver no mapa →
          </a>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-steel">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-steel-2 hover:text-white"
              >
                <WhatsAppIcon size={18} className="text-[#25D366]" />
                {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-steel-2 hover:text-white"
              >
                <InstagramIcon size={18} />
                {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Rodapé">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-steel">
            Navegue
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm lg:grid-cols-1">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-steel-2 hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-2 border-t border-line px-5 pt-6 text-xs text-steel sm:flex-row sm:justify-between sm:px-8">
        <p>
          © {year} {site.fullName}. Todos os direitos reservados.
        </p>
        <p>Itu – SP</p>
      </div>
    </footer>
  )
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Box140 no WhatsApp"
      className="wa-pulse group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:scale-105 sm:h-16 sm:w-16"
    >
      <WhatsAppIcon size={30} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap bg-ink-2 px-3 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 sm:block">
        Pedir orçamento
      </span>
    </a>
  )
}

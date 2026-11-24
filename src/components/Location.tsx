import { fullAddress, maps, site, whatsappLink } from '../data/site'
import { Clock, MapPin, Navigation, WhatsAppIcon } from './Icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Location() {
  return (
    <section id="localizacao" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Localização"
            title="Venha conhecer o box."
            text="Fácil de chegar, no Parque São Camilo, em Itu."
          />

          <Reveal delay={100} className="mt-10 space-y-8">
            <div className="flex gap-4">
              <MapPin size={24} className="mt-0.5 shrink-0 text-accent" />
              <address className="not-italic leading-relaxed text-white">
                {site.address.street}
                <br />
                {site.address.district}, {site.address.city} –{' '}
                {site.address.state}
                <br />
                <span className="text-steel">CEP {site.address.zip}</span>
              </address>
            </div>

            <div className="flex gap-4">
              <Clock size={24} className="mt-0.5 shrink-0 text-accent" />
              <dl className="w-full max-w-sm">
                {site.hours.map((h) => (
                  <div
                    key={h.days}
                    className="flex justify-between gap-4 border-b border-line py-2.5 first:pt-0"
                  >
                    <dt className="text-steel-2">{h.days}</dt>
                    <dd
                      className={`font-semibold ${h.time === 'Fechado' ? 'text-steel' : 'text-white'}`}
                    >
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Navigation size={18} />
                Como chegar
              </a>
              <a
                href={maps.waze}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Abrir no Waze
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <WhatsAppIcon size={18} />
                Agendar
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal
          direction="right"
          delay={120}
          className="relative min-h-[22rem] overflow-hidden border border-line bg-ink-2 lg:min-h-full"
        >
          <iframe
            title={`Mapa: ${fullAddress}`}
            src={maps.embed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0 [filter:grayscale(1)_invert(0.92)_contrast(0.9)_brightness(0.95)]"
            allowFullScreen
          />
          <a
            href={maps.view}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 bg-ink/90 px-4 py-2.5 font-display text-sm font-bold uppercase tracking-[0.14em] text-white backdrop-blur transition-colors hover:text-accent"
          >
            Ver no mapa
          </a>
        </Reveal>
      </div>
    </section>
  )
}

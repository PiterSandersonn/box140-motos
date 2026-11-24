import {
  services,
  serviceMessage,
  whatsappLink,
  type Service,
} from '../data/site'
import { cdn, srcSet } from '../lib/images'
import { ArrowRight } from './Icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

// Grade assimétrica de 6 colunas: 2 grandes, 3 médios, 2 grandes.
const spans = [
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-3',
  'lg:col-span-3',
]

export function Services() {
  return (
    <section id="servicos" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Serviços"
          title="O que a sua moto precisa, feito com calma."
          text="Cada serviço começa com uma avaliação. Indicamos só o que faz sentido para o estado da sua moto. Orçamento sem compromisso."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {services.map((service, i) => (
            <Reveal
              key={service.id}
              delay={(i % 3) * 90}
              className={`${spans[i] ?? 'lg:col-span-2'} ${i === services.length - 1 && i % 2 === 0 ? 'sm:col-span-2' : ''}`}
            >
              <ServiceCard
                service={service}
                index={i}
                large={spans[i] === 'lg:col-span-3'}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  large,
}: {
  service: Service
  index: number
  large: boolean
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-line bg-ink-2 transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-accent/50">
      <div
        className={`relative overflow-hidden ${large ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}
      >
        <img
          src={cdn(service.image, 800)}
          srcSet={srcSet(service.image, [480, 800, 1200])}
          sizes={
            large
              ? '(min-width: 1024px) 600px, (min-width: 640px) 50vw, 100vw'
              : '(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw'
          }
          alt={service.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 font-display text-sm font-bold tracking-[0.2em] text-white/80">
          {String(index + 1).padStart(2, '0')}
          <span className="slash ml-2 align-middle" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3
          className={`display text-white ${large ? 'text-3xl sm:text-4xl' : 'text-3xl'}`}
        >
          {service.name}
        </h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-steel-2">
          {service.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-7">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-steel">
            Consulte valores
          </span>
          <a
            href={whatsappLink(serviceMessage(service.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-base font-bold uppercase tracking-[0.08em] text-accent transition-colors hover:text-accent-2"
            aria-label={`Quero esse serviço: ${service.name} (abre o WhatsApp)`}
          >
            Quero esse serviço
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
      />
    </article>
  )
}

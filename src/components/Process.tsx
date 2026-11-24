import { reasons, steps } from '../data/site'
import { SymbolIcon } from './Icons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Process() {
  return (
    <section id="como-trabalhamos" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Como trabalhamos"
          title="Um processo simples, feito sem pressa."
          text="Da avaliação à entrega, você sabe o que está sendo feito na sua moto e por quê."
        />

        <div className="relative mt-16">
          {/* Linha do tempo: vertical no celular, horizontal no desktop */}
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-7 top-6 w-px bg-gradient-to-b from-accent via-white/15 to-white/5 lg:bottom-auto lg:left-7 lg:right-0 lg:top-7 lg:h-px lg:w-auto lg:bg-gradient-to-r"
          />
          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 110}
                className="relative flex gap-6 lg:flex-col lg:gap-7"
              >
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center border border-white/15 bg-ink-2 text-accent shadow-[0_0_0_6px_var(--color-ink)]">
                  <SymbolIcon name={step.icon} size={26} />
                </span>
                <div className="pt-1 lg:pt-0">
                  <p className="font-display text-sm font-bold tracking-[0.25em] text-steel">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="display mt-1 text-3xl text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-sm leading-relaxed text-steel-2">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export function WhyUs() {
  return (
    <section
      className="brushed relative overflow-hidden border-y border-line py-24 sm:py-28"
      aria-labelledby="porque-titulo"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <SectionHeading
          id="porque-titulo"
          eyebrow="Por que a Box140"
          title={
            <>
              Capricho no serviço.
              <br />
              <span className="text-steel">Honestidade no preço.</span>
            </>
          }
          text="Um box pequeno, com tempo para olhar cada moto de perto."
        />

        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 90}
              className="group bg-ink-2 p-7 transition-colors duration-500 hover:bg-ink-3 sm:p-8"
            >
              <span className="grid h-12 w-12 place-items-center border border-accent/40 text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-ink">
                <SymbolIcon name={r.icon} size={24} />
              </span>
              <h3 className="display mt-6 text-2xl text-white sm:text-[1.7rem]">
                {r.title}
              </h3>
              <p className="mt-2 leading-relaxed text-steel-2">
                {r.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

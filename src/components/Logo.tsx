/** Logo provisório em texto. Substitua por /public/logo.svg quando tiver o arquivo oficial. */
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <span aria-hidden="true" className="flex gap-[3px]">
        <span className="block h-6 w-[5px] -skew-x-[22deg] bg-accent" />
        <span className="block h-6 w-[5px] -skew-x-[22deg] bg-accent/60" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.65rem] font-extrabold italic uppercase tracking-tight text-white">
          Box<span className="text-accent">140</span>
        </span>
        {!compact && (
          <span className="mt-0.5 font-display text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-steel">
            Estética de Motos
          </span>
        )}
      </span>
    </span>
  )
}

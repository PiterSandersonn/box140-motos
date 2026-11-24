import { useEffect, useState } from 'react'
import { nav, whatsappLink } from '../data/site'
import { Logo } from './Logo'
import { CloseIcon, MenuIcon, WhatsAppIcon } from './Icons'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Destaca no menu a seção visível
  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? 'border-b border-line bg-ink/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:h-[4.5rem]">
        <a
          href="#inicio"
          aria-label="Box140 – voltar ao início"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </a>

        <nav aria-label="Seções" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`group relative py-2 font-display text-[0.95rem] font-semibold uppercase tracking-[0.1em] transition-colors ${
                    active === item.id
                      ? 'text-white'
                      : 'text-steel-2 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] w-full origin-left -skew-x-[40deg] bg-accent transition-transform duration-300 ${
                      active === item.id
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden !min-h-11 !px-5 !text-[0.95rem] sm:inline-flex"
          >
            <WhatsAppIcon size={18} />
            Agendar pelo WhatsApp
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center text-white xl:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-ink transition-[opacity,visibility] duration-300 xl:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="speed-lines inset-0 opacity-60" />
        <nav
          aria-label="Seções"
          className="relative flex min-h-full flex-col px-6 pb-10 pt-6"
        >
          <ul className="flex flex-col">
            {nav.map((item, i) => (
              <li key={item.id} className="border-b border-line">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4 font-display text-3xl font-bold uppercase tracking-wide text-white"
                >
                  <span className="text-sm font-semibold text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-auto w-full !min-h-14 !text-lg"
          >
            <WhatsAppIcon size={20} />
            Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}

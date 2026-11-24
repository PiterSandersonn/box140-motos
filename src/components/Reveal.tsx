import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'

type RevealProps = {
  as?: ElementType
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right'
  id?: string
}

/** Fade + slide leve quando o elemento entra na tela. */
export function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  direction = 'up',
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const dirClass =
    direction === 'left'
      ? ' reveal-left'
      : direction === 'right'
        ? ' reveal-right'
        : ''

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal${dirClass} ${className}`}
      style={{ '--delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}

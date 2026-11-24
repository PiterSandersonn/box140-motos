import {
  useCallback,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from 'react'
import type { Comparison } from '../data/site'
import { cdn, srcSet } from '../lib/images'
import { DragArrows } from './Icons'

type Props = {
  item: Comparison
  sizes: string
  className?: string
  /** Classes de proporção do quadro (padrão 4:3). */
  frameClassName?: string
}

const clamp = (n: number) => Math.min(100, Math.max(0, n))

/**
 * Slider de comparação: arraste a barra vertical para revelar o antes (à esquerda)
 * e o depois (à direita). Funciona com mouse, toque e teclado.
 */
export function CompareSlider({
  item,
  sizes,
  className = '',
  frameClassName = 'aspect-[4/3]',
}: Props) {
  const [pos, setPos] = useState(50)
  const [touched, setTouched] = useState(false)
  const frame = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const moveTo = useCallback((clientX: number) => {
    const el = frame.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setPos(clamp(((clientX - rect.left) / rect.width) * 100))
  }, [])

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return
    dragging.current = true
    setTouched(true)
    e.currentTarget.setPointerCapture(e.pointerId)
    moveTo(e.clientX)
  }
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) moveTo(e.clientX)
  }
  const stop = () => {
    dragging.current = false
  }

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 15 : 5
    let next: number | null = null
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = pos - step
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = pos + step
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = 100
    if (next !== null) {
      e.preventDefault()
      setTouched(true)
      setPos(clamp(next))
    }
  }

  const label = `${item.bike} – ${item.service}`

  return (
    <figure className={`group flex flex-col ${className}`}>
      <div
        ref={frame}
        className={`relative ${frameClassName} cursor-ew-resize touch-pan-y select-none overflow-hidden bg-ink-3`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stop}
        onPointerCancel={stop}
        onLostPointerCapture={stop}
      >
        {/* Depois (base) */}
        <img
          src={cdn(item.after, 800)}
          srcSet={srcSet(item.after, [480, 800, 1200])}
          sizes={sizes}
          alt={`Depois: ${label}`}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Antes (recortado pela posição da barra) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={cdn(item.before, 800)}
            srcSet={srcSet(item.before, [480, 800, 1200])}
            sizes={sizes}
            alt={`Antes: ${label}`}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <span
          className={`pointer-events-none absolute left-3 top-3 bg-ink/75 px-2.5 py-1 font-display text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur transition-opacity ${pos < 14 ? 'opacity-0' : 'opacity-100'}`}
        >
          Antes
        </span>
        <span
          className={`pointer-events-none absolute right-3 top-3 bg-accent px-2.5 py-1 font-display text-xs font-bold uppercase tracking-[0.2em] text-ink transition-opacity ${pos > 86 ? 'opacity-0' : 'opacity-100'}`}
        >
          Depois
        </span>

        {/* Barra + alça */}
        <div
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute inset-y-0 -left-px w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)]" />
          <div
            role="slider"
            tabIndex={0}
            aria-label={`Comparar antes e depois: ${label}`}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            aria-valuetext={`${Math.round(pos)}% mostrando o antes`}
            onKeyDown={onKeyDown}
            className="pointer-events-auto absolute top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-ink/80 text-white shadow-lg backdrop-blur transition-transform duration-200 group-hover:scale-110"
          >
            <DragArrows size={20} />
          </div>
        </div>

        {!touched && (
          <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-ink/70 px-3 py-1 font-display text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-steel-2 backdrop-blur">
            Arraste para comparar
          </span>
        )}
      </div>
      <figcaption className="mt-3 flex items-baseline gap-3">
        <span className="slash shrink-0 translate-y-[-3px]" />
        <span>
          <span className="font-display text-lg font-bold uppercase tracking-wide text-white">
            {item.bike}
          </span>
          <span className="text-steel"> – {item.service}</span>
        </span>
      </figcaption>
    </figure>
  )
}

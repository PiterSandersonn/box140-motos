import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Props = {
  eyebrow: string
  title: ReactNode
  text?: ReactNode
  align?: 'left' | 'center'
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'left',
  id,
}: Props) {
  const center = align === 'center'
  return (
    <Reveal className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className={`eyebrow ${center ? 'justify-center' : ''}`}>{eyebrow}</p>
      <h2 id={id} className="display mt-4 text-[2.6rem] text-white sm:text-6xl">
        {title}
      </h2>
      {text && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed text-steel-2 sm:text-lg ${center ? 'mx-auto' : ''}`}
        >
          {text}
        </p>
      )}
    </Reveal>
  )
}

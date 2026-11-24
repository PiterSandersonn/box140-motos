import { Link } from '@tanstack/react-router'
import { Logo } from './Logo'

export function NotFoundPage() {
  return (
    <main className="carbon flex min-h-[100svh] flex-col items-start justify-center gap-6 px-6 sm:px-16">
      <Logo />
      <h1 className="display text-6xl text-white sm:text-8xl">
        Página não encontrada
      </h1>
      <p className="max-w-md text-steel-2">
        Esse endereço não existe. Volte para o início e veja nossos serviços e
        trabalhos.
      </p>
      <Link to="/" className="btn btn-primary">
        Voltar ao início
      </Link>
    </main>
  )
}

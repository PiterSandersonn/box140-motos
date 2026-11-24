# Box140 – Estética de Motos

Site one-page da Box140, estúdio de estética e detalhamento de motos em Itu/SP.

## Tecnologias
TanStack Start + React 19, Tailwind CSS 4, Netlify (hospedagem e Image CDN para WebP responsivo).

## Rodar localmente
```bash
pnpm install
netlify dev --port 8889   # ou: pnpm dev
pnpm test
```

## Editar conteúdo
Todos os textos, serviços, comparações antes/depois, depoimentos, horários, WhatsApp e Instagram estão em `src/data/site.ts`. As fotos ficam em `public/img/`.

## Próximos passos
- Trocar as fotos provisórias pelas reais do @box140_ (mesmos nomes de arquivo).
- Definir o número real de WhatsApp e o logo oficial.
- Substituir os depoimentos de exemplo por avaliações reais e conferir os horários.

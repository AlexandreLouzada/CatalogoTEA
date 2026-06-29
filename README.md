# Catálogo TEA

Catálogo digital de tecnologias para pessoas autistas — buscar, comparar e avaliar aplicativos com informação transparente para apoiar a decisão responsável.

## Acesso

O protótipo funcional está publicado no GitHub Pages:

**https://alexandrelouzada.github.io/CatalogoTEA/**

Também pode ser executado localmente abrindo o arquivo `docs/index.html` em qualquer navegador moderno (não requer servidor HTTP).

## Funcionalidades

- **Busca com facetas** — filtros por categoria tecnológica, objetivo, público, nível de apoio, contexto e acessibilidade
- **Ficha da tecnologia** — informações padronizadas em duas colunas: uso/adequação e viabilidade, com selos de evidência, acessibilidade e atualização (com tooltips)
- **Comparação lado a lado** — até 3 tecnologias em tabela comparativa com exportação CSV
- **Submissão guiada** — formulário em 4 etapas para contribuir com novas tecnologias
- **Relatórios dinâmicos** — indicadores de cobertura, evidência e distribuição do catálogo
- **Favoritos e avaliações** — persistência local no navegador
- **Acessibilidade** — modo foco, Leitura Fácil, alto contraste e redução de animações
- **Citação** — geração de referências nos formatos ABNT, APA e BibTeX

## Estrutura do projeto

```
docs/
├── index.html       — Estrutura principal (8 views)
├── styles.css       — Estilos e layout responsivo
└── app.js           — Lógica, dados e interatividade
```

## Sobre

Este protótipo materializa os requisitos definidos no Capítulo 5 do projeto de qualificação, que incluiu estudo de caso com educadores, pessoa autista e familiar/cuidador. A arquitetura de informação e os wireframes foram validados com usuários e implementados em HTML, CSS e JavaScript puro (sem dependências externas).

## Stack

- HTML5 semântico e acessível
- CSS3 com design responsivo e variáveis de tema
- JavaScript puro (ES6+)
- Persistência via `localStorage`
- Publicação via GitHub Pages

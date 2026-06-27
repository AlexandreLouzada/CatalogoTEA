# Catálogo TEA — Protótipo Vanilla sem fetch

Esta versão usa exclusivamente HTML, CSS e JavaScript puro.

## Principal diferença

Os dados dos aplicativos estão incorporados diretamente no arquivo:

```text
docs/app.js
```

na constante:

```js
EMBEDDED_APPS
```

Assim, o protótipo funciona:

- no GitHub Pages;
- em servidor local;
- abrindo `docs/index.html` diretamente no navegador.

O arquivo `docs/data/apps.json` foi mantido apenas como referência para facilitar edição futura.

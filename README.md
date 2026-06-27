🛡️ Catálogo TEA — Plataforma de Recursos Tecnológicos
Status do Projeto: Prontinho para o navegador e GitHub Pages (Vanilla JS + Tailwind CSS) 🚀

Este projeto consiste em um protótipo estático de um Catálogo de Aplicativos voltados para o Transtorno do Espectro Autista (TEA). O ambiente foi planejado e estruturado como modelo conceitual para validação de interfaces de acordo com critérios de Engenharia de Usabilidade, Acessibilidade Aplicada e Interação Humano-Computador (IHC).

A plataforma simula uma aplicação moderna de página única (Single Page Application), rodando de forma leve, robusta e sem dependências pesadas de compiladores que possam travar o navegador.

🎯 Objetivo do Protótipo
Mapear soluções assistivas divididas por categorias (Comunicação Alternativa, Educação, Habilidades Sociais, etc.) e aplicar filtros dinâmicos de acessibilidade, permitindo que pais, terapeutas e educadores encontrem a ferramenta ideal com base em checklists estritas de usabilidade inclusiva.

💻 Telas e Recursos Mapeados (8 Módulos de Navegação)
O sistema possui 8 telas virtuais totalmente funcionais integradas no menu superior, permitindo alternar instantaneamente entre os seguintes painéis:

Home (Página Inicial): Apresentação institucional da proposta, trazendo os módulos e aplicativos que são destaques de forma visual.

Buscar Apps (Painel de Filtros): Central de inteligência onde o usuário realiza buscas por texto ou filtros cruzados de categorias, faixas etárias e recursos sensoriais.

Lista (Resultados): Exibição em grade (cards) dos aplicativos que atendem aos filtros selecionados.

Detalhes (Ficha Técnica): Exibição profunda do aplicativo selecionado, contendo a finalidade pedagógica/terapêutica, cenários reais de uso e uma Checklist de Usabilidade Inclusiva.

Recomendações: Classificação automática exibindo as ferramentas com as melhores notas e índices de satisfação técnica.

Guia: Manual básico de navegação integrada e instruções estruturais para novos usuários.

Comunidade: Espaço simulado para a coleta de relatos de experiência e avaliação de canais de IHC.

Sobre: Detalhamento metodológico, referências acadêmicas do mapeamento e contato de suporte técnico.

👁️ Recursos Avançados de Acessibilidade
O protótipo conta com um painel dinâmico de Acessibilidade (⚙️) que altera o comportamento do sistema em tempo real:

Modo Foco: Reduz distratores visuais periféricos, centralizando o conteúdo em largura reduzida e ativando um banner informativo para melhorar a atenção dividida.

Leitura Simples: Processa as descrições densas dos aplicativos e exibe resumos diretos e simplificados para facilitar a compreensão cognitiva.

Alto Contraste Estrutural: Altera o esquema de cores para branco puro e preto absoluto, ignorando as paletas suaves para priorizar a leitura de usuários com baixa visão.

🛠️ Arquitetura Técnica
Para garantir que o projeto nunca exiba uma tela branca e funcione tanto localmente quanto hospedado, a arquitetura foi reescrita utilizando:

HTML5 Estrutural com semântica para leitores de tela.

Tailwind CSS (via CDN): Para estilização moderna e design totalmente responsivo (adaptável para celulares e computadores).

Vanilla JavaScript (JS Puro): Toda a lógica de troca de abas, filtros de busca dinâmica e manipulação do estado de acessibilidade foi programada nativamente, eliminando o risco de bloqueios de segurança por parte do navegador (Babel ou React locais).

🚀 Como Executar o Projeto
1. Execução Local (Em seu computador)
Por ter sido escrito em JavaScript nativo, o projeto é totalmente independente:

Baixe o arquivo index.html.

Dê dois cliques no arquivo para abri-lo diretamente em qualquer navegador (Chrome, Edge, Firefox, Safari).

Resultado: Todas as navegações e filtros funcionarão instantaneamente.

2. Hospedagem no GitHub Pages
O projeto está pronto para distribuição contínua:

Certifique-se de que o arquivo principal chama-se exatamente index.html.

Suba o arquivo para o seu repositório no GitHub.

Vá em Settings > Pages, selecione a branch main e salve.

O link gerado estará público e perfeitamente operacional.

📝 Licença e Créditos
Este projeto foi desenvolvido como um protótipo acadêmico para fins de estudo de usabilidade e engenharia de software voltada à neurodiversidade.

Desenvolvido em 2026 para fins de demonstração estática inclusiva.

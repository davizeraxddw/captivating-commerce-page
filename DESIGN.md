# DESIGN.md: abertura editorial Ponta da Linha

## Fontes de referência

- Estrutura e ritmo: https://gorgonoid.com/pro/
- Movimento e interação: https://reactbits.dev/
- Captura: 04/09/2026
- Evidências: hierarquia de conteúdo da página Gorgonoid Pro e catálogo oficial do React Bits.

## Direção

A abertura deve apresentar primeiro o contexto e a tensão da atividade policial. O produto só aparece depois que a pessoa entende o problema. A referência do Gorgonoid é usada para ritmo — impacto inicial, faixa contínua e progressão narrativa — sem copiar marca, imagens ou textos.

## Sistema visual

### Cores

- Fundo principal: azul-noite quase preto (`#070b10`).
- Superfície: azul grafite (`#0b1119`).
- Texto: branco quente (`#f7f5ef`).
- Acento: dourado operacional (`#d9a936`).
- Linhas e grade: branco entre 4% e 10% de opacidade.

### Tipografia

- Títulos: Anton, caixa alta, escala editorial e entrelinha compacta.
- Corpo: Barlow, entrelinha confortável, largura controlada.
- Microtexto: caixa alta e espaçamento amplo, usado com moderação.

### Layout

- Hero em tela cheia, centralizado e sem cards comerciais.
- Uma mensagem principal por dobra.
- Linhas finas e coordenadas técnicas como linguagem gráfica.
- Cantos menos arredondados na abertura para evitar aparência de template genérico.

## Movimento

- Texto em palavras escalonadas, inspirado em Staggered/Split Text do React Bits.
- Grade com varredura vertical lenta, inspirada em Grid Scan/Dark Veil.
- Faixa horizontal contínua, inspirada em Scroll Velocity.
- Entrada por scroll curta e discreta nas seções existentes.
- Todo movimento deve ser desativado com `prefers-reduced-motion`.

## Estrutura da abertura

1. Navegação discreta, sem chamada de compra.
2. Hero-manifesto: tensão, responsabilidade e convite para continuar.
3. Faixa contínua com palavras-chave da atuação.
4. Seção de contexto com três princípios: decisão, fundamento e registro.
5. Somente depois: conteúdo programático e apresentação do material.

## Instruções de implementação

- Usar React, Framer Motion e CSS já presentes no projeto.
- Não adicionar efeitos WebGL pesados nem dependências desnecessárias.
- Não copiar componentes pagos ou código fechado do React Bits; reproduzir apenas princípios de interação com implementação própria.
- Manter contraste, navegação por teclado, semântica e fallback para movimento reduzido.

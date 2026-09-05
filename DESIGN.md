# DESIGN.md: abertura editorial Ponta da Linha

## Fontes de referência

- Estrutura e ritmo: https://gorgonoid.com/pro/
- Movimento e interação: https://reactbits.dev/
- Captura: 04/09/2026
- Evidências: hierarquia de conteúdo da página Gorgonoid Pro e catálogo oficial do React Bits.

## Direção

A abertura deve apresentar primeiro Walace Costa, sua trajetória e sua autoridade profissional. O produto só aparece depois que a pessoa conhece quem está por trás do conteúdo. A referência do Gorgonoid é usada para ritmo — impacto inicial, faixa contínua e progressão narrativa — sem copiar marca, imagens ou textos.

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

- Hero em tela cheia, dividido entre biografia e retrato de Walace, sem cards comerciais.
- Uma mensagem principal por dobra.
- Poucos elementos simultâneos, alinhamento editorial e fotografia sem molduras decorativas extras.
- Cantos retos e divisórias finas na abertura para evitar aparência de template genérico.

## Movimento

- Aurora oficial do React Bits como único efeito de destaque na abertura.
- Entradas curtas de opacidade e deslocamento para texto e retrato.
- Entrada por scroll curta e discreta nas seções existentes.
- Todo movimento deve ser desativado com `prefers-reduced-motion`.

## Estrutura da abertura

1. Navegação discreta, sem chamada de compra.
2. Hero pessoal: nome, função, trajetória e retrato de Walace.
3. Três dados objetivos: início na PMMG, atuação e formação.
4. Seção biográfica com três pilares: experiência, formação e propósito.
5. Somente depois: conteúdo programático e apresentação do material.

## Instruções de implementação

- Usar React, Framer Motion e CSS já presentes no projeto.
- Usar o componente Aurora JS-CSS do registro público oficial do React Bits e sua dependência `ogl`.
- Manter o Aurora atrás do conteúdo, com contraste suficiente para preservar a leitura.
- Manter contraste, navegação por teclado, semântica e fallback para movimento reduzido.

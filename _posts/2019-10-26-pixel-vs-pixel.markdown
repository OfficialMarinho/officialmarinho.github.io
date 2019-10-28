---
layout: post
title:  "💢 Pixel vs Pixel"
date:   2019-10-26 18:45:20 -0300
categories: pixel css width responsividade
---
Ao contrário do que muitos pensam, não existe somente um tipo de pixel no mundo do desenvolvimento. Se você já estudou responsividade, deve ter percebido ou ouvido falar algo sobre. Me refiro ao pixel do dispositivo e pixel do navegador, eles são distintos e saber suas diferenças pode ser decisivo no mercado de trabalho front-end.

Mas, antes de mais nada, você sabe exatamente o que é um pixel?

#### :question: O que é um pixel?
Um pixel é o menor elemento de exibição em uma tela. Ele pode ser vermelho, verde, azul ou uma combinação dessas cores. Atualmente, existem dispositivos com milhões de pixels e talvez você tenha um dispositivo desse aí na sua casa.

Por exemplo, uma TV 4K possui em média **8,2 milhões de pixels**. Sabia disso?

#### :iphone: Pixel do dispositivo
<img alt="Pixels na tela de um computador" style="width: 500px; display: block; margin: 0 auto; margin-bottom: 10px" src="https://upload.wikimedia.org/wikipedia/commons/6/6d/PixelsLCDMonitor.JPG">
Quando você vai comprar um dispositivo novo, é comum buscarmos sobre as polegadas ou sobre os pixels. Entretanto, não basta escolher a tela com mais pixels e mais polegadas. É necessário uma visão mais ampla sobre o assunto. Neste caso, o conjunto de uma densidade de pixel alta por polegada faz com que o dispositivo tenha uma qualidade superior aos que não possuem.

#### :ship: Pixel do navegador
O pixel do navegador é um pixel imaginário. 1px do navegador não é o mesmo 1px do dispositivo. Em alguns casos, esse pixel imaginário pode se aproximar bastante da realidade devido a densidade de pixel por polegada, mas não é recomendável utilizar os pixels de elementos de acordo com um tamanho de tela específico.

#### :rainbow: O mundo mágico do viewport
Para solucionarmos o problema da diferença entre o pixel do dispositivo e o pixel do navegador, utilizar uma tag de única linha no HTML de cada página de um determinado website.

``<meta name="viewport" content="width=device-width">``

Repare que trata-se meta com nome viewport e o conteúdo iguala a largura de todos os elementos do HTML para a largura do dispositivo. Ou seja, converte os pixels e os ajusta de acordo com o dispositivo que está acessando a página.

Alguns links úteis para você ler e aprender mais sobre esse conteúdo são:

* [Documentação MDN sobre viewport](https://developer.mozilla.org/pt-BR/docs/Mozilla/Mobile/Viewport_meta_tag)
* [Postagem sobre diferença de DPI e PPI - Tecmundo](https://www.tecmundo.com.br/pixel/60711-entenda-diferencas-entre-ppi-o-dpi.htm)
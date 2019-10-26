---
layout: post
title:  "Otimização vai além de código"
date:   2019-10-14 20:45:40 -0300
categories: otimização web desempenho seo
---
Sem duvidas, um dos maiores desafios dos desenvolvedores web é a otimização de seus projetos. Para ser sincero, não existe um padrão a ser seguido que garante respostas do servidor para o cliente de 1ms.

Durante uma palestra na Chrome Dev Summit, um renomado engenheiro de software da Google afirmou que:

>  "Não existem boas práticas que vão garantir uma aplicação com desempenho máximo. Não existem soluções alternativas que vão garantir uma aplicação com desempenho máximo. Existem “hacks” que podem ajudar sua aplicação no desempenho"

Ou seja, a otimização é feita através de gambiarras, isso porque a Internet em geral é uma gambiarra. O HTTP, por exemplo, não foi criado para transferir arquivos de mídia e sites com muitas requisições. Seu ideal era apenas responder os GETs do usuário entregando os textos solicitados. Aliás, não existe um HMDP (Hyper Media Protocol).

Enfim, bora botar mão na massa!

---

## Faça análises antes de fazer deploy
É tentador querer lançar sua aplicação web o quanto antes para todos. Principalmente se for algo pessoal ou informal. Para isso, aguarde, respire fundo e faça muitas análises com Dev Tools gratuitas na internet. Você pode hospedar um protótipo e utilizar alguma das ferramentas a seguir para realizar as análises:

- WebPageTest
- web.dev
- Website Grader
- KeyCDN Tools

## Minifique seu código
Existem centenas de ferramentas online que minificam seus códigos HTML, CSS e JS. Essa ação gera um arquivo com menos carácteres, e obviamente, menores nos megabytes/kilobytes.

Observação: códigos minificados ficam quase que ilegíveis aos olhos humanos. Por isso, pode ser complicado realizar a manutenção de aplicações com código minificado.

Algumas ferramentas para realizar a minificação de seus códigos são:

- HTML Minifier
- CSS Minifier
- Minify - minificador CSS e JavaScript
- JavaScript Minifier

## Comprima vídeos, imagens e áudios
Nos dias atuais, a compressão de mídias tornou-se uma tecnologia inimaginável há 10 anos atrás. Qualquer um pode utilizar uma ferramenta que comprime mídias em 70% de seu tamanho original e ainda assim, mantenha uma alta definição. Algumas ferramentas são:

- I ❤ IMG
- YouCompress
- OnlineConverter Compress Video

## Atualize seu HTTP
A versão 2 do HTTP veio com avanços surreais quando comparado às versões anteriores. A otimização na transferência e comunicação do servidor com o cliente foram impactantes suficientes para alavancar o desempenho das aplicações web. Através dela, o usuário mantém apenas 1 conexão TCP com o servidor e pode fazer diversos GETs através do modo de multiplexação.

A funcionalidade Push do HTTP/2 é um outro ótimo exemplo de como a nova versão do HTTP pode te ajudar. Através dela, você pode enviar dependências do GET que o usuário fez de uma vez, evitando uma nova requisição e garantindo que não exista congestionamento do servidor. É importante lembrar que o mal uso dessa funcionalidade pode trazer o efeito reverso. Então, **tome muito cuidado!**

## Informação bônus: Otimização e SEO
Por incrível que pareça, o Google utiliza dados de desempenho dos websites para garantir um rankeamento mais próximo de uma boa experiência para o usuário. Dessa forma, um site mal otimizado expulsa visitantes de diversos canais imagináveis.

## Conclusão
Um navegador não se importa o quão indentado seu código é. Tampouco quão bonito são os nomes das suas classes, funções e IDs. **A otimização é ser simples, compresso e inteligente.**
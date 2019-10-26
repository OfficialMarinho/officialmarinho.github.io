---
layout: post
title:  "HTTP/3: o que mudou"
date:   2019-10-16 10:25:10 -0300
categories: http google
---

Esse artigo está alguns dias atrasado desde o lançamento do HTTP/3 no dia 26 de setembro.

Atualmente, 2,4% dos websites da Internet já utilizam o HTTP/3. A nova versão do protocolo veio com apoio das grandes empresas do Vale do Silício. **Google**, **CloudFlare**, **Facebook** e a **Mozilla** já oferecem suporte para o protocolo em alguns de seus serviços e produtos.

As mudanças mais significativas para esse novo modelo são:

- TCP sai, UDP entra
- Mais velocidade, menos segurança?
- Devo atualizar meu servidor/aplicação?

---

## TCP sai, UDP entra
O novo protocolo fez uma mudança na base da tecnologia. Anteriormente, como sabemos, o HTTP usava desde sua versão inicial o protocolo TCP para o transporte dos pacotes de dados. Com a nova versão do HTTP, o protocolo começa a utilizar o UDP para fazer o transporte.

Para explicar melhor, o TCP é um protocolo da camada de transporte (4° camada do modelo OSI) responsável pelo transporte dos pacotes de dados de uma rede. Ele é conhecido por ser um protocolo que garante a integridade dos dados, porém, essa garantia de verificação de integridade faz com que ele seja “lento”. O UDP, pertencente da mesma camada, não garante a integridade dos pacotes de dados, porém, é mais rápido. Isso significa que a velocidade de carregamento e funcionamento de aplicações web que utilizam HTTP/3 em seus servidores e que tenham usuários com navegadores suportando o protocolo serão mais rápidas.

## Mais velocidade, menos segurança?
Se você já estudou redes de computadores, deve saber que o UDP não garante a integridade das mensagens. Para solucionar este problema, o QUIC (protocolo base do HTTP/3 criado pela Google) possui uma camada extra de segurança. E para provar que essa nova tecnologia realmente funciona, a Google implementou o back-end do Google Duo com suporte para o protocolo.

Então, se até a gigante da Internet implementou e confiou na nova tecnologia e não teve problemas até o momento, talvez, não seja um problema você pensar na ideia de fazer o mesmo em algum dos seus projetos.

## Devo atualizar meu servidor/aplicação?
Se você utiliza CloudFlare e/ou Google Cloud Platform que já oferecem suporte para o novo protocolo, você pode ativar e melhorar o desempenho do seu projeto. Entretanto, deve ser feito um planejamento bem estruturado sobre. Recomendo ler este artigo publicado no blog oficial do CloudFlare.

Para mais informações sobre o HTTP/3, [clique aqui](https://http3.net).
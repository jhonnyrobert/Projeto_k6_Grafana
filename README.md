# Projeto_k6_Grafana
 
Aqui você encontra o material do curso [Conhecendo K6 para testes de carga](https://github.com/jhonnyrobert/Projeto_k6_Grafana/blob/main/Doc/k6%20-%20tech.pdf)
## Dependências
Abaixo encontrará as referências à outros projetos e dependências que utilizamos no curso. 

* [Docker Desktop](https://www.docker.com/products/docker-desktop) - Vamos correr o ambiente todo em docker e kubernetes. Por isso será essencial ter o docker desktop instalado e rodando.

* [Documentação do k6](https://k6.io/docs/getting-started/installation/#docker) - O k6 é a ferramenta de load tests que vamos utilizar, e de preferência deve ser instalado via docker. 

* [Docker-k6-grafana-influxDB](https://github.com/luketn/docker-k6-grafana-influxdb) - Repositório que permite configurar o influxdb como datasource para o K6 incluindo a visualização via Grafana.

## Indicadores

* VUS -
Quantidade ativa e executada de usuários virtuais;
* VUS_MAX -
A quantidade maxima atingida de usuários virtuais ;
       
* Iterations -
Quantas vezes, os nosos usuários virtuais executaram os script de testes;
      
* Iterations_duration -
Quanto tempo nossos usuários virutais, levaram para executar, cada vez que eles executaram o script inteiro;
     
* Dropped_interations - 
Quantas iterações foram dropadas, por problemas no teste ou por problemas na aplicação por tempo de resposta;
      
* Data_received -
Quantidade de dados, qual tamanho das requisições totais que nossos usuários reportaram;
 
* Data_sent - 
Quantidade de dados, qual tamanho das requisições totais que nossos usuários enviaram para a aplicação;
 
* Checks - 
Quantidade de checks com segurança por nosso teste

## HTTP
* http_reqs -
Quantidade de requisições geradas no total;
 
* http_reqs_blocked -
Quanto tempo nossos usuários virtuais, passaram esperando (Largura de banda);
       
* http_reqs_connecting - 
Quanto tempo nosso usuário virtual, levou em média para estabelecer uma conecxão com a aplicação (latência);
      
* http_reqs_TLS_handshaking -
quanto tempo o certificado ssl, leva para ser entregue e assinado pelos clientes;
     
* http_reqs_sending -
Quanto tempo levamos enviando dados, para a aplicação;
      
* http_reqs_waiting -
Quanto tempo fica-se esperando pela resposta da aplicação depois de uma ação (persepção do usuário na pagina);
 
* http_reqs_receiving -
Quanto tempo ficamos esperando a resposta da aplicação, até que seja concluida;

* http_reqs_duration -
Duração total do tempo da requisição ( sending + waiting + receiving);

* http_reqs_failed (>=0.31) - 
Quantidade de requisições que falharam



![logo_upd8_stick2](https://user-images.githubusercontent.com/10448568/200204784-e141029f-9505-4c4f-95e4-f1ebafcc567f.png)

# Teste Desenvolvedor Mobile (React Native)

## 1. Perguntas Perfil
### 1 – Informe teu Nome Completo:
    Wanderlei Gomes Rodrigues Filho
### 2 – Você se considera Desenvolvedor Nível:
    ( ) Júnior ( ) Pleno (X) Sênior
### 3 – Informe sua Pretensão Salarial PJ:
    Valor/Hora: R$ 87,50
### 4 – Possui Empresa Aberta ?
    (X) Sim ( ) Não

## 2. Proposta de Desenvolvimento
### Criar um aplicativo para Andriod e IOs de gerenciamento de clientes com as seguintes tecnologias:
#### 1 – API Rest com banco de dados Mysql para ser usado no aplicativo, nessa API Rest deverá ter os métodos Create, Read, Update e Delete (CRUD). Escolha a linguagem em que se sinta confortável
para trabalhar no backend.
#### 2 – Aplicativo em React Native de modo “nativo”, ou seja, sem a utilização do “expo” ou qualquer outra ferramenta que auxilia no desenvolvimento.
#### 3 – O Aplicativo deverá ter as telas para que seja possível realizar um CRUD (Create, Read, Update e Delete) através das chamadas da API Rest.
### Orientações:
#### 1 – Após finalizar o desenvolvimento gerar o APK do aplicativo e um arquivo .rar ou .zip com o código fonte do Projeto ou se preferir subir em algum repositório, como o github, deverá enviar o link do projeto.
#### 2 – Enviar junto ao projeto os scripts para rodar API Rest e também os scripts de banco de dados e suas respectivas tabelas.
#### 3 – Ao final responder o e-mail anexando o Projeto de Teste da Entrevista para avaliação

### Protótipo Sugerido
<img width="998" src="https://user-images.githubusercontent.com/10448568/200205420-246e9f73-5b8a-46be-b685-bf370cebf34e.png">

<img width="995" src="https://user-images.githubusercontent.com/10448568/200205385-ccd944c3-d9ea-4082-826a-2aa356c0efb6.png">

# Backend
run `cd backend`

run `yarn`

## Banco de dados (Docker)
run `docker-compose up`

## Open MySQL Workbench

### New connection `Username`: `user`
<img width="816" alt="Captura de Tela 2022-11-07 às 01 38 09" src="https://user-images.githubusercontent.com/10448568/200228010-95ebf0f7-fa80-48c6-9fbc-9d9c352c9765.png">

### Set password: `password`
<img width="626" alt="Captura de Tela 2022-11-07 às 01 38 43" src="https://user-images.githubusercontent.com/10448568/200228231-d8146cce-dcde-4752-b6e0-ec87c81376cc.png">

 run query:
```sql
    CREATE TABLE `db`.`clients` (
      `id` INT NOT NULL AUTO_INCREMENT,
      `cpf` VARCHAR(255) NOT NULL,
      `name` VARCHAR(255) NOT NULL,
      `birth` DATETIME NULL,
      `gender` VARCHAR(255) NOT NULL,
      `address` VARCHAR(255) NOT NULL,
      `state` VARCHAR(255) NOT NULL,
      `city` VARCHAR(255) NOT NULL,
      PRIMARY KEY (`id`),
      UNIQUE INDEX `cpf_UNIQUE` (`cpf` ASC) VISIBLE);
```

## run backend
run `yarn start:dev`

## Documentation da API (Swagger)
http://localhost:3000/api#/


## Prints da tela

<img width="500" src="https://user-images.githubusercontent.com/10448568/200480974-eedd1732-17e1-408c-9a18-a03bcf29f057.png">
<img width="500" src="https://user-images.githubusercontent.com/10448568/200480988-f06a3d3e-d501-4744-94aa-c12e3078c327.png">
<img width="500" src="https://user-images.githubusercontent.com/10448568/200480994-71809380-fbf9-4f19-86ab-a69af695e338.png">

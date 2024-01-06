# Aplicação Host de Microfrontend

## Visão Geral

Este projeto é uma aplicação host para uma arquitetura de microfrontend, construída com Vite, @originjs/vite-plugin-federation, React, react-router-dom e Zustand. Serve como contêiner para integrar vários microfrontends e utiliza Vite para empacotamento eficiente, @originjs/vite-plugin-federation para federação de módulos, React como biblioteca de UI, react-router-dom para roteamento e Zustand para gerenciamento de estado.

## Primeiros Passos

### Pré-requisitos

- Node.js (versão 12 ou superior)
- npm (versão 6 ou superior)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://seu-url-do-repositorio.git
   ```
2. Clone o repositório:
	```bash
	cd aplicacao-host-microfrontend
	```
3. Instale as dependências:
	```bash
	npm install
	```
### Executando a Aplicação

1. Inicie o servidor de desenvolvimento:
	```bash
	npm run dev
	```
Abra http://localhost:3000 no seu navegador para ver a aplicação.

## Arquitetura

### Federação de Módulos

Esta aplicação usa @originjs/vite-plugin-federation para integrar microfrontends. A configuração é definida em `vite.config.js`.

### Roteamento

`react-router-dom` é usado para gerenciar rotas na aplicação. As rotas são definidas em `src/App.jsx`.

### Gerenciamento de Estado

Zustand é usado para gerenciamento de estado global entre componentes e microfrontends. A configuração da store pode ser encontrada em `src/store`.
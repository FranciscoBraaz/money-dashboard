# MoneyDashboard

## Sobre o projeto
Aplicação desenvolvida com o objetivo de praticar os conhecimentos em React e Typescript.

##  🔽 Veja funcionando: [MoneyDashboard](https://moneydashboard-project.netlify.app/login)

![banner-money](https://github.com/user-attachments/assets/1703d939-9449-4f74-a546-9f8ac6233c64)


### Arquitetura

```
/src
  ├── /components
  |    ├──ComponentSample
  │        ├── hooks
  │            ├── useHookSample.ts    # Lógica de controle que orquestra a lógica de negócios (Controller)
  │        ├── index.tsx               # Componente React que faz renderização (View)    
  ├── /services
  │    ├── serviceSample.ts            # Interações com a API
  ├── App.js                           # Componente principal que orquestra os elementos da UI
  ├── index.ts 
```

### Metodologia de estilização utilizada:
- BEM

### Tecnologias utilizadas
- ReactJs
- TypeScript
- React Query
- SASS
- Ant

## 👷  Executando o projeto
 #### Clone o repositório:
  ```
  git clone https://github.com/FranciscoBraaz/agiletv-front.git
  ```  
#### Navegue para a pasta raíz:
```
cd agiletv-front
```
#### Criar arquivo .env na raíz do projeto
```
VITE_API_URL = <URL LOCAL DA SUA API> 
```
#### Baixar as dependências
```
npm i 
```
#### Iniciar aplicação web
```
npm run dev
```

# MoneyDashboard

## Sobre o projeto
Aplicação desenvolvida com o objetivo de praticar os conhecimentos em React e Typescript.

## </> Api do projeto: [Money Api](https://github.com/FranciscoBraaz/money-api)

##  🔽 Veja funcionando: [MoneyDashboard](https://moneydashboard-project.netlify.app/login)

![banner-monye-2](https://github.com/user-attachments/assets/93676cfc-1f8e-483d-bcd4-a3404791ba2a)

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
- Ant Design

### 🛠️ Testando aplicação
Usuários já criados para facilitar testes (É possível criar outros usuários):
- Usuário 1:
  - E-mail: teste3@gmail.com
  - Senha: 12345678
  - Conta: 3025338
- Usuário 2:
  - E-mail: teste@gmail.com
  - Senha: 12345678
  - Conta: 9530239


## 👷  Executando o projeto
 #### Clone o repositório:
  ```
  git clone https://github.com/FranciscoBraaz/money-dashboard.git
  ```  
#### Navegue para a pasta raíz:
```
cd money-dashboard
```
#### Criar arquivo .env na raíz do projeto
```
VITE_API_URL=http://localhost:3001
```
#### Baixar as dependências
```
npm i 
```
#### Iniciar aplicação web
```
npm run dev
```

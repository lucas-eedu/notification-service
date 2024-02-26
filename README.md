# Notification Service

O Serviço de Notificação é uma aplicação desenvolvida em Node.js com o objetivo de fornecer uma solução para o envio de notificações por e-mail e SMS. Utiliza as plataformas SendGrid para envio de e-mails e Twilio para envio de mensagens SMS. O projeto foi construído as tecnologias: Express, TypeScript e MongoDB.

## Funcionalidades
- Envio de e-mails utilizando o SendGrid API.
- Envio de mensagens SMS utilizando a API do Twilio.
- Validação de entrada de dados utilizando YUP.
- Logging de eventos utilizando a biblioteca Winston.

## Requisitos do Sistema
Antes de executar o projeto, certifique-se de ter as seguintes ferramentas instaladas:
- Node.js
- MongoDB

notification-service
├── LICENSE
├── README.md
├── jest.config.js
├── package-lock.json
├── package.json
├── src
│   ├── config
│   │   ├── logger.ts
│   │   └── mongoose.ts
│   ├── controller
│   │   ├── email.controller.ts
│   │   └── sms.controller.ts
│   ├── interfaces
│   │   ├── email.interface.ts
│   │   └── sms.interface.ts
│   ├── middlewares
│   │   └── morganMiddleware.ts
│   ├── models
│   │   ├── email.model.ts
│   │   └── sms.model.ts
│   ├── repositories
│   │   ├── email.repository.spec.ts
│   │   ├── email.repository.ts
│   │   └── sms.repository.ts
│   ├── routes
│   │   ├── email.routes.ts
│   │   ├── main.routes.ts
│   │   └── sms.routes.ts
│   ├── services
│   │   ├── email
│   │   │   ├── send.email.service.spec.ts
│   │   │   ├── send.email.service.ts
│   │   │   ├── update.email.service.spec.ts
│   │   │   └── update.email.service.ts
│   │   └── sms
│   │       └── send.sms.service.ts
│   └── validations
│       ├── email.validator.schema.ts
│       └── sms.validator.schema.ts
└── tsconfig.json

## Instalação

Antes de começar, verifique se você possui o Node.js e o MongoDB instalados em sua máquina.

1. Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/servico-de-notificacao.git
```

2. Navegue até o diretório do projeto:
```bash
cd servico-de-notificacao
```

3. Instale as dependências do projeto usando o npm:
```bash
npm install
```

4. Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis:
```bash
APP_PORT=3000
APP_URL=http://localhost
APP_STAGE="development"

MONGODB_URI=URLdoBancoDeDadosMongoDB

SENDGRID_API_KEY=SuaChaveAPIdoSendGrid

TWILIO_SID=SeuSIDdoTwilio
TWILIO_AUTH_TOKEN=SeuTokendeAutenticacaodoTwilio
TWILIO_PHONE=SeuNumeroTwilio
```
Substitua os valores acima pelos seus dados de autenticação e configuração do MongoDB.

5. Inicie o servidor:
```bash
npm start
```
O servidor estará disponível em http://localhost:3000.

## Testes
```bash
npm test
```
Testes unitários para os serviços de e-mail e SMS, bem como testes de integração para os controllers.

## Contribuidores
Contribuições são bem-vindas! Se você encontrar algum problema, tiver uma ideia para um novo recurso ou quiser melhorar o código existente, sinta-se à vontade para abrir uma issue ou enviar uma solicitação de PR. Vamos construir juntos este projeto e torná-lo ainda melhor!

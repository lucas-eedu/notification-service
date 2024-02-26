<div style="display: inline_block"><br>
  <img align="center" alt="Twilio" height="auto" width="30%" src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg">
  <img align="center" alt="Sendgrid" height="auto" width="30%" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/sendgrid_logo_icon_169764.png">
</div>

# Notification Service

The Notification Service is an application developed in Node.js with the aim of providing a solution for sending notifications via email and SMS. It uses the SendGrid platforms to send emails and Twilio to send SMS messages. The project was built on technologies: Express, TypeScript and MongoDB.

## Functionalities
- Sending emails using the <a href="https://docs.sendgrid.com/pt-br/for-developers/sending-email/api-getting-started" target="_blank">Sendgrid API</a>
- Sending SMS messages using the <a href="https://www.twilio.com/docs/messaging/onboarding" target="_blank">Twilio API</a>
- Data entry validation using <a href="https://www.npmjs.com/package/yup" target="_blank">YUP</a>
- Event logging using the <a href="https://www.npmjs.com/package/winston" target="_blank">Winston</a> and <a href="https://www.npmjs.com/package/morgan">Morgan</a>
- Tests using the <a href="https://www.npmjs.com/package/jest" target="_blank">Jest</a>

```go
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
```

## System Requirements
Before running the project, make sure you have the following tools installed:
- Node.js
- MongoDB

## Installation
1. Clone the repository to your local environment:

```bash
git clone git@github.com:lucas-eedu/notification-service.git
```

2. Navigate to the project directory:
```bash
cd notification-service
```

3. Install project dependencies using npm:
```bash
npm install
```

4. Configure the environment variables:
Copy the .env.example file to .env in the project root and set the following variables:
```bash
APP_PORT=3000
APP_URL=http://localhost
APP_STAGE="development"

MONGODB_URI=MongoDBDatabaseURL

SENDGRID_API_KEY=SuaChaveAPIdoSendGrid

TWILIO_SID=YourSendGridAPIKey
TWILIO_AUTH_TOKEN=YourTwilioAuthenticationToken
TWILIO_PHONE=YourPhoneNumberTwilio
```
Replace the above values with your MongoDB authentication and configuration data.

5. Start the server:
```bash
npm start
```
The server will be available at http://localhost:3000.

## Tests
```bash
npm test
```
Unit tests for email and SMS services, as well as integration tests for controllers.

## Contributors
Contributions are welcome! If you encounter any issues, have an idea for a new feature, or want to improve existing code, feel free to open an issue or submit a PR request. Let's build this project together and make it even better!

## Contacts
Linkedin: https://www.linkedin.com/in/lucas-eduardo/
E-mail: lucas01.dev@gmail.com

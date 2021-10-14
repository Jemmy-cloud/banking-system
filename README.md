# banking-system in NodeJS 

BankSystem is a NodeJs web project where users can create bank accounts, transfer money, create payment cards, pay with them or directly through their account, etc. It supports connecting multiple banks together through the CentralApi. This allows money to be securely transferred between separate instances of BankSystem running on different machines.

The backend service is based on Node.js and is built as REST API, with authentication using JWT tokens. Service is communicating with PostgreSQL database where the data about users, accounts, transactions and so on is stored.

One of the main concerns while developing the backend service were data consistency and reasonable performance. In application like banking software loosing consistency of the data is catastrophic

# ACE IT UP — Educational Training Institute

ACE IT UP is a production-grade, secure web application scaffolded for an Educational Training Institute. The architecture divides the codebase into a frontend React single-page application (scaffolded with Vite) and a backend REST API built on Node.js/Express.js with MongoDB.

---

## 🛠️ Technology Stack

- **Frontend**: React.js 18+ (Vite), React Router v6, Framer Motion, TailwindCSS v3, React Hook Form, Zod
- **Backend**: Node.js 20+, Express.js, Mongoose ODM
- **Database**: MongoDB
- **Security**: Helmet, Express Rate Limit, Express Mongo Sanitize, XSS Clean, HPP (HTTP Parameter Pollution), DOMPurify

---

## 📁 Project Directory Structure

```text
ace-it-up/
├── client/                         # React frontend (Vite)
│   ├── public/
│   │   ├── favicon.svg
│   │   └── robots.txt
│   ├── src/
│   │   ├── assets/                 # SVGs and icons
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.jsx      # Animated sticky navbar
│   │   │   │   └── Footer.jsx      # Dynamic layout footer
│   │   ├── pages/
│   │   │   ├── Home.jsx            # Stats, Hero, and features
│   │   │   ├── Services.jsx        # Course services grid
│   │   │   └── Contact.jsx         # Secure React Hook Form with Zod
│   │   ├── styles/
│   │   │   └── globals.css         # Tailwind & custom utilities
│   │   ├── utils/
│   │   │   ├── sanitize.js         # DOMPurify sanitizer
│   │   │   └── validators.js       # Zod validation schema
│   │   ├── App.jsx                 # Routing framework
│   │   └── main.jsx                # Render entrypoint
│
├── server/                         # Node.js + Express backend
│   ├── config/
│   │   ├── db.js                   # Mongoose DB connector
│   │   └── env.js                  # Env parser
│   ├── controllers/
│   │   └── contactController.js    # Sanitizer and DB insertion
│   ├── middleware/
│   │   ├── errorHandler.js         # Production safe error interceptor
│   │   ├── rateLimiter.js          # API & route limiting
│   │   ├── sanitize.js             # XSS and injection prevention wrappers
│   │   └── helmet.js               # CSP and security headers wrapper
│   ├── models/                     # Schemas and TTL indices
│   │   └── Contact.js
│   ├── routes/
│   │   └── contactRoutes.js        # Contact endpoints
│   ├── utils/
│   │   └── validators.js           # Server-side validation helpers
│   ├── .env.example
│   └── server.js                   # Express application bootstrap
│
├── .gitignore
├── .env.example
└── README.md
```

---

## 🛡️ OWASP Top 10 Security Architecture

The application is built with security first, adhering to **OWASP Top 10** standards:

1. **A03:2021-Injection Prevention**:
   - Mongoose schemas restrict allowed input parameters.
   - `express-mongo-sanitize` filters out MongoDB operator injection attempts (e.g., payloads containing `$gt`).
   - Server-side escaping is implemented via `express-validator`'s `.escape()` rules on string inputs to prevent HTML injections.
2. **A04:2021-Insecure Design (Rate Limiting)**:
   - Global rate limiting (`express-rate-limit`) limits basic `/api` requests to 100 per 15 minutes.
   - Strict route-specific rate limiting restricts form submissions to a maximum of 5 requests per hour, preventing brute-force database pollution.
3. **A05:2021-Security Misconfiguration**:
   - `helmet` configures HTTP response headers including strict Content Security Policies (CSP) preventing inline scripts or unverified remote fetches.
   - Cors rules (`cors` package) only allow requests matching origins specified in the env configurations.
4. **Data Minimization (GDPR compliance)**:
   - A TTL (Time to Live) MongoDB index is configured in `Contact.js` to auto-delete entries after 1 year (31,536,000 seconds) from creation.
5. **Client-side XSS Protection**:
   - Inputs are validated using Zod structures.
   - Form inputs are sanitized using `DOMPurify` before transmitting them to the server.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v20 or higher.
- **MongoDB** running locally or a MongoDB Atlas URI connection string.

### Setup and Running Instructions

#### 1. Clone the project and configure environment variables:
Create a `.env` file inside the `server/` directory using the templates:
```bash
cp server/.env.example server/.env
```
Ensure that `MONGODB_URI` points to a running instance, e.g. `mongodb://localhost:27017/aceitup`.

#### 2. Run the Backend:
Navigate to the `server` directory, install packages, and start the development server:
```bash
cd server
npm install
npm start
```
The server will start at [http://localhost:5000](http://localhost:5000).

#### 3. Run the Frontend:
Navigate to the `client` directory, install packages, and start the development server:
```bash
cd client
npm install
npm run dev
```
The client will start at [http://localhost:5173](http://localhost:5173). Requests to `/api/*` will automatically proxy to [http://localhost:5000](http://localhost:5000).

---

## 🧪 Verification

To verify that the setup is operating correctly:
1. Make a request to the backend health check:
   ```bash
   curl http://localhost:5000/api/health
   # Response: {"status":"ok"}
   ```
2. Navigate to [http://localhost:5173/contact](http://localhost:5173/contact) in your browser and submit a contact request. Verify that a success message is shown and that the database receives the submission records.

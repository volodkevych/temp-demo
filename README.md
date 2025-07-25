# temp-demo

A minimal React TypeScript website that displays "Welcome to CodePipeline!"

## Project Structure

```
temp-demo/
├── src/
│   ├── client/
│   │   ├── index.html      # HTML template
│   │   ├── index.tsx       # React app entry point
│   │   └── App.tsx         # Main React component
│   └── server.ts           # Express server
├── package.json
├── tsconfig.json           # TypeScript config for client
├── tsconfig.server.json    # TypeScript config for server
└── webpack.config.js       # Webpack configuration
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. For development (runs both client and server):
   ```bash
   npm run dev
   ```
   - Client will be available at http://localhost:3000
   - Server will run on port 8080

3. For production build:
   ```bash
   npm run build
   npm start
   ```
   - Application will be available at http://localhost:8080

## Available Scripts

- `npm run dev` - Start development servers for both client and server
- `npm run build` - Build both client and server for production
- `npm run build:client` - Build only the React client
- `npm run build:server` - Build only the Express server
- `npm start` - Start the production server
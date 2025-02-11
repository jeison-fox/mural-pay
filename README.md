# Mural Pay Code Challenge

This repository contains a React application built in TypeScript as part of a code challenge for **Mural Pay**. The app leverages [@radix-ui/themes](https://www.radix-ui.com/docs/themes) for styling and was bootstrapped with [Create React App](https://create-react-app.dev/).

## Table of Contents

- [Mural Pay Code Challenge](#mural-pay-code-challenge)
  - [Table of Contents](#table-of-contents)
  - [Folder Structure](#folder-structure)
  - [Setup Instructions](#setup-instructions)
  - [Available Scripts](#available-scripts)
  - [Main Technologies Used](#main-technologies-used)

## Folder Structure

```plaintext
public
src
├── api          # Endpoints for the Mural Pay Sandbox API
├── components   # Reusable UI components
├── constants    # App-wide constants
├── contexts     # React Context API for state management
├── customTypes  # TypeScript types and interfaces
├── schemas      # Validation schemas (e.g., Zod)
├── styles       # Global and component-specific styles
└── utils        # Utility functions
tsconfig.json
```

## Setup Instructions

1. **Install dependencies:**

   ```bash
   yarn install
   ```

2. **Add environment variables**

    After gaining access to the Mural Pay sandbox, rename `.env.local.example` to `.env.local`. Then, follow the [official guide](https://developers.muralpay.com/docs/get-api-key) to generate an API key and transfer key. Copy these keys and update the corresponding values in your `.env.local` file.

3. **Start the development server:**

   ```bash
   yarn start
   ```

## Available Scripts

In the project directory, you can run:

- **`yarn start`**  
  Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- **`yarn build`**  
  Builds the app for production to the `build` folder.

- **`yarn test`**  
  Launches the test runner in interactive watch mode.

- **`yarn eject`**  
  Removes the single build dependency from your project (Note: this is a one-way operation).

For more detailed information on the scripts, refer to the [Create React App documentation](https://create-react-app.dev/).

## Main Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [@radix-ui/themes](https://www.radix-ui.com/docs/themes)
- [Create React App](https://create-react-app.dev/)

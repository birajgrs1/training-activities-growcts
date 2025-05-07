## Complete Setup of Shadcn ui with vite for reactjs

# 🚀 Shadcn UI + Vite + React (JavaScript) Setup

This will help to set up a modern UI using **Shadcn UI**, **Vite**, and **React (JavaScript)**.



## ✅ Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

---

## 📦 Step-by-Step Setup

### 1. Create a new Vite + React project

```bash
npm create vite@latest my-shadcn-app
# Select: React
# Select: JavaScript

cd my-shadcn-app
2. Install dependencies

npm install

3. Install Tailwind CSS

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Update tailwind.config.js:


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Update src/index.css:


@tailwind base;
@tailwind components;
@tailwind utilities;

4. Add the CSS to your app
In src/main.jsx, import the index.css file:

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


5. Install Shadcn UI

First, install the CLI:

npx shadcn-ui@latest init
or npx shadcn@latest init


Choose:
Framework: React
Language: JavaScript
CSS: Tailwind CSS



Components directory: components
It will update your Tailwind config automatically.

6. Install UI components

npx shadcn-ui@latest add button
Try importing and using it:


// src/App.jsx
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Button variant="default">Click Me</Button>
    </div>
  );
}

export default App;

🧪 Run the development server

npm run dev
Open http://localhost:5173 in your browser.


📁 File Structure (Simplified)
css
Copy
Edit
my-shadcn-app/
├── components/
│   └── ui/
│       └── button.jsx
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
└── index.html

🧱 Add More Shadcn Components

npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
# and more...

Explore all components: https://ui.shadcn.com/docs/components


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <div>
    {/* Main App Content */}
      <App />
  </div>
</StrictMode>

)

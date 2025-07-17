import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './MainLayout.tsx'

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <div>



    {/* Main App Content */}
      <App />

  </div>
</StrictMode>

)

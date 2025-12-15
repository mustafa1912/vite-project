import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
// fontawesome
import './assets/style/fontawesome/fontawesome/css/all.min.css';
// bootstrap
import './assets/style/css/bootstrap.min.css';
import './assets/style/css/preloader.min.css';
import './assets/style/css/circle.css';
import './assets/style/css/fm.revealator.jquery.min.css';
// style
import './assets/style/css/style.css';
import './assets/style/css/yellow.css';
// import './assets/style/css/purple.css';
import './assets/style/css/styleswitcher.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const conteneur = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Les pages sont livrées déjà rendues en HTML : React les « réactive » sans les redessiner.
// Le simulateur dépend de l'adresse et de la sauvegarde locale : il est redessiné côté navigateur.
if (conteneur.dataset.hydrate === 'oui' && conteneur.firstElementChild) {
  hydrateRoot(conteneur, app)
} else {
  createRoot(conteneur).render(app)
}

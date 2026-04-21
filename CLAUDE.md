# Expansion Agency — Portfolio

## Contexte
Portfolio de l'agence **Expansion** : vitrine des projets clients (formations digitalisées, production vidéo, systèmes digitaux complets).

## Documents de contexte
Les dossiers dans `CLAUDE FILES/` contiennent le contexte détaillé du projet :
- `MEMORY/` — profil utilisateur, préférences, feedbacks
- `PORTFOLIO/` — specs des sections, contenu, structure
- `VISUAL SYSTEM/` — design system complet (couleurs, typos, style)

## Stack
- React 18 + Vite
- Supabase (backend/DB pour les projets — compte agence, voir `.env`)
- CSS custom (pas de framework CSS)

## Structure
- **Racine** : app React/Vite dynamique (le portfolio)
- **`LANDINGPORTFOLIO/`** : site statique HTML/CSS à part (landing pages, projets individuels)
- **`projet/`** : dossiers de ressources par projet client

## Règles
- Langue : français pour le contenu du site et les échanges
- Toujours respecter le visual system défini
- Style éditorial — cohérence typographique (Inter + Playfair Display)

import { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  enregistrerConsentement,
  lireConsentement,
  surOuverturePreferences,
} from '../lib/consentement'
import { PIXEL_ID } from '../lib/pixel'
import '../styles/cookies.css'

const AVEC_PUBLICITE = Boolean(PIXEL_ID)

function Interrupteur({ id, coche, onChange, desactive, libelle }) {
  return (
    <input
      id={id}
      type="checkbox"
      role="switch"
      className="cookies__switch"
      checked={coche}
      disabled={desactive}
      onChange={(e) => onChange?.(e.target.checked)}
      aria-label={libelle}
    />
  )
}

// Bandeau de consentement : rien n'est mesuré tant que l'internaute n'a pas choisi.
// « Tout refuser » et « Tout accepter » ont le même poids visuel (recommandation CNIL).
function BandeauCookies() {
  const [visible, setVisible] = useState(false)
  const [details, setDetails] = useState(false)
  const [mesure, setMesure] = useState(false)
  const [publicite, setPublicite] = useState(false)
  const titreId = useId()
  const idMesure = useId()
  const idPub = useId()

  useEffect(() => {
    if (!lireConsentement()) setVisible(true)
    return surOuverturePreferences(() => {
      const choix = lireConsentement()
      setMesure(Boolean(choix?.mesure))
      setPublicite(Boolean(choix?.publicite))
      setDetails(true)
      setVisible(true)
    })
  }, [])

  if (!visible) return null

  const valider = (choix) => {
    enregistrerConsentement(choix)
    setVisible(false)
    setDetails(false)
  }
  const toutAccepter = () => valider({ mesure: true, publicite: AVEC_PUBLICITE })
  const toutRefuser = () => valider({ mesure: false, publicite: false })

  return (
    <section
      className={`cookies${details ? ' cookies--details' : ''}`}
      role="dialog"
      aria-modal="false"
      aria-labelledby={titreId}
    >
      <h2 className="cookies__titre" id={titreId}>
        Vos cookies, votre choix
      </h2>
      <p className="cookies__texte">
        Avec votre accord, nous mesurons l’audience du site (Google Analytics)
        {AVEC_PUBLICITE ? ' et l’efficacité de nos publicités (Meta)' : ''} pour l’améliorer. Vous pouvez
        changer d’avis à tout moment via «&nbsp;Gérer les cookies&nbsp;» en bas de page.{' '}
        <Link to="/confidentialite" className="cookies__lien">
          En savoir plus
        </Link>
      </p>

      {details && (
        <ul className="cookies__categories">
          <li className="cookies__categorie">
            <div>
              <span className="cookies__nom">Nécessaires</span>
              <p>Mémorisent votre choix et la progression du simulateur. Toujours actifs.</p>
            </div>
            <Interrupteur coche desactive libelle="Cookies nécessaires (toujours actifs)" />
          </li>
          <li className="cookies__categorie">
            <div>
              <label className="cookies__nom" htmlFor={idMesure}>
                Mesure d’audience
              </label>
              <p>Google Analytics : pages consultées et parcours, en statistiques agrégées. Cookie de 13 mois maximum.</p>
            </div>
            <Interrupteur id={idMesure} coche={mesure} onChange={setMesure} libelle="Mesure d’audience" />
          </li>
          {AVEC_PUBLICITE && (
            <li className="cookies__categorie">
              <div>
                <label className="cookies__nom" htmlFor={idPub}>
                  Publicité
                </label>
                <p>Pixel Meta : mesure des résultats de nos campagnes Facebook et Instagram.</p>
              </div>
              <Interrupteur id={idPub} coche={publicite} onChange={setPublicite} libelle="Publicité" />
            </li>
          )}
        </ul>
      )}

      <div className="cookies__actions">
        <button type="button" className="cookies__btn" onClick={toutRefuser}>
          Tout refuser
        </button>
        {details ? (
          <button
            type="button"
            className="cookies__btn cookies__btn--enregistrer"
            onClick={() => valider({ mesure, publicite: AVEC_PUBLICITE && publicite })}
          >
            Enregistrer mes choix
          </button>
        ) : (
          <button type="button" className="cookies__btn cookies__btn--texte" onClick={() => setDetails(true)}>
            Personnaliser
          </button>
        )}
        <button type="button" className="cookies__btn" onClick={toutAccepter}>
          Tout accepter
        </button>
      </div>
    </section>
  )
}

export default BandeauCookies

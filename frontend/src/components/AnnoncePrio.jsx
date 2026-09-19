import './AnnoncePrio.css'
import { Heart, Star, MapPin, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AnnoncePrio() {
  return (
    <Link className="annonce-card">
      <div className="annonce-image-container">
        <img src="" alt="Annonce" className="annonce-img" />
        <span className="annonce-badge">À la une</span>
        <button className="annonce-fav-btn">
          <Heart size={17} color="#ffffff" />
        </button>
      </div>

      <div className="annonce-content">
        <div className="annonce-header">
          <div className="annonce-profile-info">
            <div>
              <div className="annonce-title-row">
                <img src="" alt="Avatar" className="annonce-avatar" />
                <h3 className="annonce-name">Max Event</h3>
                <CheckCircle2 size={10} color="#1d4ed8" fill="#ffffff" />
              </div>
              <p className="annonce-service">DJ - Animateur</p>
              <div className="annonce-location">
                <MapPin size={10} color="#6b7280" />
                <span>Paris et Île-de-Franceeeeee</span>
              </div>
              <div className="annonce-rating">
                <Star size={10} color="#FD9F01" fill="#FD9F01" />
                <span className="annonce-rating-score">4,9</span>
                <span className="annonce-reviews">(42 avis)</span>
              </div>
            </div>
          </div>
          <div className="annonce-price-block">
            <span className="annonce-price-label">À partir de</span>
            <span className="annonce-price">450 €</span>
          </div>
        </div>

        {/* <p className="annonce-description">
          DJ pour tous vos événements : mariages, anniversaires, soirées privées et événements d'entreprise. Ambiance garantie !
        </p> */}

        <div className="annonce-footer">
          <div className="annonce-tags">
            <span className="annonce-tag">Mariage</span>
            <span className="annonce-tag">Anniversaire</span>
            <span className="annonce-tag">Soirée privée</span>
            <span className="annonce-tag">Entreprise</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
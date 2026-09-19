import './Annonce.css';
import { Heart, MapPin, Star } from 'lucide-react'

export default function Annonce() {
  return (
    <div className="mp-card-wrapper">
      {/* Partie image */}
      <div className="mp-card-media-side">
        <img 
          src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1" 
          alt="Château gonflable" 
          className="mp-card-img" 
        />
        <button className="mp-card-fav-btn" aria-label="Favoris">
          <Heart size={17} color="#ffffff" />
        </button>
      </div>

      {/* Partie contenu */}
      <div className="mp-card-content-side">
        <div className="mp-card-top-row">
          <div className="mp-card-user-avatar">
            <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb" 
                alt="Photo de profil" 
                className="mp-card-user-avatar" 
            />
          </div>
          
          <div className="mp-card-texts">
            <h3 className="mp-card-heading">Georges Landres</h3>
            <p className="mp-card-sub">Chateau gonflable</p>
            
            <div className="mp-card-geo">
                <MapPin size={10} color="#6b7280" />
                <span>Paris et Île-de-Franceeeeee</span>
            </div>

            <div className="mp-card-score-box">
              <Star size={10} color="#FD9F01" fill="#FD9F01" />
              <span className="mp-card-val">4,5</span>
              <span className="mp-card-num">(67 avis)</span>
            </div>
          </div>

          <div className="mp-card-pricing">
            <span className="mp-card-from">À partir de</span>
            <span className="mp-card-cost">500€</span>
          </div>
        </div>

        <div className="annonce-footer">
          <div className="annonce-tags">
            <span className="annonce-tag">Mariage</span>
            <span className="annonce-tag">Anniversaire</span>
            <span className="annonce-tag">Soirée privée</span>
            <span className="annonce-tag">Entreprise</span>
          </div>
        </div>
      </div>
    </div>
  );
}
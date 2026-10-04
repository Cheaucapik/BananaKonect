import './Home.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import AnnoncePrio from '../components/AnnoncePrio.jsx'
import Annonce from '../components/Annonce.jsx'
import {Link} from 'react-router-dom'
import Filter from '../components/Filter.jsx'
import hero from '../assets/img/hero.png';
import { Search, MapPin, Calendar} from 'lucide-react'
import AllFilters from '../components/AllFilters.jsx'
import { useState, useRef } from 'react'

const SearchHero = () => {
  const dateInputRef = useRef(null);

  const handleCalendarClick = () => {
    if (dateInputRef.current) {
      if (typeof dateInputRef.current.showPicker === 'function') {
        dateInputRef.current.showPicker();
      } else {
        dateInputRef.current.focus();
      }
    }
  };

  const today = new Date().toISOString().split('T')[0]

  return (
    <form className='search-hero'>
    <div className='search-service search-filters'>
      <Search className='responsive-icon' color="#0b1c3d"/>
      <div className='search-input-group'>
        <label htmlFor="service-input">Que recherchez-vous ?</label>
        <input 
          id="service-input" 
          type="text" 
          placeholder="DJ, photographe, animation..." 
        />
      </div>
    </div>

    <div className='search-location search-filters'>
      <MapPin className='responsive-icon' color="#0b1c3d"/>
      <div className='search-input-group'>
        <label htmlFor="location-input">Où ?</label>
        <input 
          id="location-input" 
          type="text" 
          placeholder="Ville, code postal..." 
        />
      </div>
    </div>

    <div className='search-date search-filters' onClick={handleCalendarClick} style={{ cursor: 'pointer' }}>
        <Calendar className='responsive-icon' color="#0b1c3d"/>
        <div className='search-input-group'>
          <label htmlFor="date-input">Quand ?</label>
          <input 
            ref={dateInputRef}
            id="date-input" 
            type="date" 
            min={today}
          />
        </div>
    </div>

    <button type='submit' className='search-btn-hero'>
      <Search className='search-icon-hero' color="#ffffff"/>
      <p>Rechercher</p>
    </button>
  </form>
  )
}

function Home() {
  const [showAllFilters, setShowAllFilters] = useState(false)

  return(
    <>
      <Header/>
      <main>
        <section className='hero'>
          <div className='hero-img-wrapper'>
            <img className='hero-img' src={hero} alt="hero"/>
            <div className='hero-title'>
              <h1>Trouvez le prestataire <span className='orange'>qu'il vous faut</span></h1>
              <p>Mariage, anniversiare, entreprise, association... Tous vos événements, un seul endroit.</p>
          </div>
          </div>
          <SearchHero/>
        </section>
        <section className='filters'>
          <div className='title-filter'>
            <h2>Filtres</h2>
            <button 
              onClick={() => setShowAllFilters(true)} 
              className='see_all' 
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >Voir tout
            </button>
          </div>
          <div className='filter-list'>
            <Filter text={'bonjour'}/>
          </div>
        </section>

        <section className='annonces-prio-container'>
          <div className='title-prio'>
            <h2>Annonces à la une </h2>
            <Link to='' className='see_all'>Voir tout</Link>
          </div>
          <div className='annonces'>
            <AnnoncePrio/>
            <AnnoncePrio/>
            <AnnoncePrio/>
          </div>
        </section>

        <section className='annonces-container'>
          <h2>Annonces qui pourrait vous plaire</h2>
            <Annonce/>
            <Annonce/>
        </section>
      </main>

      {showAllFilters && (
        <AllFilters onClose={() => setShowAllFilters(false)} />
      )}

      <Footer/>
    </>
  )
}
export default Home
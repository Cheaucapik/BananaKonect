import './Home.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import AnnoncePrio from '../components/AnnoncePrio.jsx'
import Annonce from '../components/Annonce.jsx'
import {Link} from 'react-router-dom'
import Filter from '../components/Filter.jsx'
import hero from '../assets/img/hero.png';
import { Search, MapPin, Calendar} from 'lucide-react'

const SearchHero = () => {
  return (
    <div className='search-hero'>
      <div className='search-service search-filters'>
        <Search className='responsive-icon' color="#0b1c3d"/>
        <div>
          <p>Que recherchez-vous ?</p>
          <p>DJ, photographe, animation...</p>
        </div>
      </div>
      <div className='search-location search-filters'>
        <MapPin className='responsive-icon' color="#0b1c3d"/>
        <div>
          <p>Où ?</p>
          <p>Ville, code postal...</p>
        </div>
      </div>
      <div className='search-date search-filters'>
        <Calendar className='responsive-icon' color="#0b1c3d"/>
        <div>
          <p>Quand ?</p>
          <p>Date (Optionnel)</p>
        </div>
      </div>
      <button className='search-btn-hero'>
          <Search className='search-icon-hero' color="#ffffff"/>
          <p>Rechercher</p>
        </button>
    </div>
  )
}

function Home() {
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
            <Link to='' className='see_all'>Voir tout</Link>
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
      <Footer/>
    </>
  )
}
export default Home
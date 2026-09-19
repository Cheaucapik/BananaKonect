import './Home.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import AnnoncePrio from '../components/AnnoncePrio.jsx'
import {Link} from 'react-router-dom'

function Home() {
  return(
    <>
      <Header/>
      <main>
        <section className='annonces-prio-container'>
          <div className='title-prio'>
            <h2>Annonces à la une </h2>
            <Link>Voir tout</Link>
          </div>
          <div className='annonces'>
            <AnnoncePrio/>
            <AnnoncePrio/>
            <AnnoncePrio/>
          </div>
        </section>

        <section className='annonces-container'>
          <h2>Annonces qui pourrait vous plaire</h2>
            <AnnoncePrio/>
        </section>
      </main>
      <Footer/>
    </>
  )
}
export default Home

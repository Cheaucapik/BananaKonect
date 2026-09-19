import { Link } from 'react-router-dom'
import './MenuComp.css'
import { Plus, X} from 'lucide-react'
import {useEffect, useState} from 'react'

export default function Menu({onClose}) {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => setIsOpen(true), 10);
      return () => clearTimeout(timer);
    }, []);
    return (
    <>
      <div className={`menu-container ${isOpen ? 'open' : ''}`}>
          <X className='X' onClick={onClose} style={{ cursor: 'pointer' }}/>
          <button className='Publish'><Plus/><p>Publier une annonce</p></button>
          <Link className='Menu' to='/'>Accueil</Link>
          <Link className='Menu' to='/about'>À propos</Link>
          <Link className='Menu' to=''>Mon profil</Link>
          <Link className='Menu' to=''>Favoris</Link>
          <Link className='Menu' to=''>Mes prestations</Link>
          <Link className='Menu' to=''>Mes annonces</Link>
          <Link className='Menu' to=''>Paramètres</Link>
          <Link className='Menu' to=''>Se déconnecter</Link>
      </div>
    </>
  )
}

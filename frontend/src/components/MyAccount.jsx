import { Link } from 'react-router-dom'
import './MyAccount.css'

export default function MyAccount() {
  return (
    <div style={{zIndex: 1, borderRadius : '10px', position : 'absolute', right : 20, backgroundColor : '#FBFAF9', boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", display : 'flex', flexDirection : "column", width : '15%', padding : 'clamp(0.5rem, 2vw, 1rem)'}}>
        <Link className='myAccount' to=''>Mon profil</Link>
        <Link className='myAccount' to=''>Favoris</Link>
        <Link className='myAccount' to=''>Mes prestations</Link>
        <Link className='myAccount' to=''>Mes annonces</Link>
        <Link className='myAccount' to=''>Paramètres</Link>
        <Link className='myAccount' to=''>Se déconnecter</Link>
    </div>
  )
}

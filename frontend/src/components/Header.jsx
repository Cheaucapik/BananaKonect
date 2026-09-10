import Logo from '../assets/icons/Logo'
import Account from '../assets/icons/Account'
import '../assets/css/Header.css'
import { Plus, Bell, MessageSquareMore, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation();
  return (
    <div style={{display : "flex", flexDirection : "row", justifyContent : "space-between", paddingRight : "30px", paddingLeft : "30px", backgroundColor : "#FBFAF9", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", paddingTop : "20px", paddingBottom : "20px"}}>
        <div style={{display : "flex", flexDirection : "row"}}>
          <Link to='/'><Logo size={65}/></Link>
          <div style={{display : "flex", flexDirection : "row", gap: "40px", marginLeft : "40px", alignItems : "center"}}>
            <Link className={pathname === '/' ? 'headerText_active' : 'headerText'} to='/'>Accueil</Link>
            <Link className={pathname === '/about' ? 'headerText_active' : 'headerText'} to='/about'>À propos</Link>
          </div>
        </div>
        <div style={{display : "flex", flexDirection : "row", alignItems : 'center', gap:'30px'}}>
          <div style={{backgroundColor:"#FD9F01", display : "flex", flexDirection : 'row', borderRadius : "15px", padding : "15px", gap : "10px"}}>
            <Plus size={30} color={"#ffffff"} style={{alignSelf : "center"}}/>
            <p style={{color : "white", fontWeight : "bold"}}>Publier une annonce</p>
          </div>
          <Bell size={30} color="#0E1F35"/>
          <MessageSquareMore size={30} color='#0E1F35'/>
          <div style={{display : "flex", flexDirection : "row", alignItems : "center", gap : "10px", backgroundColor : "#EFEFEF", padding : "10px", borderRadius : "30px", paddingLeft : "20px", paddingRight : "20px"}}>
            <Account/>
            <p>Mon compte</p>
            <ChevronDown size={20} color='#0E1F35'/>
          </div>
        </div>
    </div>
  )
}

import Logo from '../assets/icons/Logo'
import Account from '../assets/icons/Account'
import '../assets/css/Header.css'
import { Plus, Bell, MessageSquareMore, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import MyAccount from './MyAccount.jsx'

export default function Header() {
  const { pathname } = useLocation();
  const [showMyAccount, setShowMyAccount] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMyAccount(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
  <>
    <header style={{width : "100%", display : "flex", flexDirection : "row", justifyContent : "space-between", paddingRight : "30px", paddingLeft : "30px", backgroundColor : "#FBFAF9", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", paddingTop : "20px", paddingBottom : "20px"}}>
        <div style={{display : "flex", flexDirection : "row"}}>
          <Link to='/'><Logo size={65}/></Link>
          <nav style={{display : "flex", flexDirection : "row", gap: "40px", marginLeft : "40px", alignItems : "center"}}>
            <Link className={pathname === '/' ? 'headerText_active' : 'headerText'} to='/'>Accueil</Link>
            <Link className={pathname === '/about' ? 'headerText_active' : 'headerText'} to='/about'>À propos</Link>
          </nav>
        </div>
        <div style={{display : "flex", flexDirection : "row", alignItems : 'center', gap:'30px'}}>
          <div style={{backgroundColor:"#FD9F01", display : "flex", flexDirection : 'row', borderRadius : "15px", padding : "15px", gap : "10px"}}>
            <Plus size={30} color={"#ffffff"} style={{alignSelf : "center"}}/>
            <p style={{color : "white", fontWeight : "bold"}}>Publier une annonce</p>
          </div>
          <Bell size={30} color="#0E1F35"/>
          <MessageSquareMore size={30} color='#0E1F35'/>
          <div ref={dropdownRef}>
              <button 
                onClick={() => setShowMyAccount(!showMyAccount)} 
                style={{display : "flex", flexDirection : "row", alignItems : "center", gap : "10px", backgroundColor : showMyAccount?'#0E1F35':'#EFEFEF', padding : "10px", borderRadius : "30px", paddingLeft : "20px", paddingRight : "20px", border: "none", cursor: "pointer", font: "inherit"}}
              >
                <Account color={showMyAccount?'#EFEFEF':'currentColor'}/>
                <p style={{color: showMyAccount ? '#EFEFEF' : 'currentColor'}}>Mon compte</p>
                <ChevronDown size={20} color={showMyAccount?'#EFEFEF':'currentColor'}/>
              </button>
              {showMyAccount && (
                <MyAccount />
              )}
            </div>
          
        </div>
    </header>
    </>
  )
}

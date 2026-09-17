import Logo from '../assets/icons/Logo'
import Account from '../assets/icons/Account'
import '../assets/css/Header.css'
import { Plus, Bell, MessageSquareMore, ChevronDown, Search, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import MyAccount from './MyAccount.jsx'
import { useMediaQuery } from 'react-responsive'

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

  const isMobile = useMediaQuery({ maxWidth: 425 });

  return (
  <>
    <header>
        <div className="header-left-group">
          <Link to='/'><Logo size={65}/></Link>
          {!isMobile && (
            <nav className="header-nav">
              <Link className={pathname === '/' ? 'headerText_active' : 'headerText'} to='/'>Accueil</Link>
              <Link className={pathname === '/about' ? 'headerText_active' : 'headerText'} to='/about'>À propos</Link>
            </nav>
          )}
        </div>
        <div className="header-right-group">
          {!isMobile && (
          <>
          <Search className="responsive-icon" color="#0E1F35"/>
          <div className="header-publish-btn">
            <Plus className="responsive-icon header-plus-icon" color={"#ffffff"} />
            <p className="header-publish-text">Publier une annonce</p>
          </div>
          </>
          )}
          <Bell className="responsive-icon" color="#0E1F35"/>
          <MessageSquareMore className="responsive-icon" color='#0E1F35'/>
          {isMobile && <Menu className="responsive-icon" color='#0E1F35'/>}
          {!isMobile && (
          <div ref={dropdownRef}>
              <button 
                onClick={() => setShowMyAccount(!showMyAccount)} 
                className={`header-account-btn ${showMyAccount ? 'active' : ''}`}
              >
                <Account className="responsive-icon" color={showMyAccount?'#EFEFEF':'currentColor'}/>
                <p style={{color: showMyAccount ? '#EFEFEF' : 'currentColor'}}>Mon compte</p>
                <ChevronDown size={20} color={showMyAccount?'#EFEFEF':'currentColor'}/>
              </button>
              {showMyAccount && (
                <MyAccount />
              )}
          </div>
          )}
          
        </div>
    </header>
  </>
  )
}
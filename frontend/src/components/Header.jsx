import Logo from '../assets/icons/Logo'
import Account from '../assets/icons/Account'
import './Header.css'
import { Plus, Bell, MessageSquareMore, ChevronDown, Search, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import MyAccount from './MyAccount.jsx'
import { useMediaQuery } from 'react-responsive'
import SearchComp from '../components/SearchComp.jsx'
import MenuComp from '../components/MenuComp.jsx'

export default function Header() {
  const { pathname } = useLocation()
  const [showMyAccount, setShowMyAccount] = useState(false)
  const dropdownRef = useRef(null)
  const [showSearch, setShowSearch] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMyAccount(false)
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const isMobile = useMediaQuery({ maxWidth: 650 })
  const isMedium = useMediaQuery({ minWidth: 651, maxWidth: 1300 })
  const isDesktop = useMediaQuery({ minWidth: 1301 })

  return (
    <>
      <header>
        <div className="header-left-group">
          <Link to="/">
            <Logo size={65} />
          </Link>
          {isDesktop && (
            <nav className={`header-nav ${showSearch ? 'hidden' : ''}`}>
              <Link className={pathname === '/' ? 'headerText_active' : 'headerText'} to="/">
                Accueil
              </Link>
              <Link className={pathname === '/about' ? 'headerText_active' : 'headerText'} to="/about">
                À propos
              </Link>
            </nav>
          )}
        </div>

        {isMedium && (
          <div className="header-middle-group">
            <SearchComp />
          </div>
        )}

        <div className="header-right-group">
          {isDesktop && (
            <>
              <div className={`search-container ${showSearch ? 'open' : ''}`}>
                <SearchComp />
              </div>
              <div>
                <button onClick={() => setShowSearch(!showSearch)}>
                  {showSearch ? (
                    <X className="responsive-icon" color="#0E1F35" />
                  ) : (
                    <Search className="responsive-icon" color="#0E1F35" />
                  )}
                </button>
              </div>
              <div className="header-publish-btn">
                <Plus className="responsive-icon header-plus-icon" color="#ffffff" />
                <p className="header-publish-text">Publier une annonce</p>
              </div>
            </>
          )}

          <Bell className="responsive-icon" color="#0E1F35" />
          <MessageSquareMore className="responsive-icon" color="#0E1F35" />

          {(isMobile || isMedium) && (
            <div ref={menuRef}>
              <button onClick={() => setShowMenu(!showMenu)}>
                <Menu className="responsive-icon" color="#0E1F35" />
              </button>
              {showMenu && <MenuComp onClose={() => setShowMenu(false)} />}
            </div>
          )}

          {showMenu && (
            <div
              style={{
                backgroundColor: '#000000',
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 2,
                opacity: 0.5,
              }}
            />
          )}

          {isDesktop && (
            <div ref={dropdownRef}>
              <button
                onClick={() => setShowMyAccount(!showMyAccount)}
                className={`header-account-btn ${showMyAccount ? 'active' : ''}`}
              >
                <Account className="responsive-icon" color={showMyAccount ? '#EFEFEF' : '#0E1F35'} />
                <p style={{ color: showMyAccount ? '#EFEFEF' : '#0E1F35' }}>Mon compte</p>
                <ChevronDown size={20} color={showMyAccount ? '#EFEFEF' : '#0E1F35'} />
              </button>
              {showMyAccount && <MyAccount />}
            </div>
          )}
        </div>
      </header>
    </>
  )
}
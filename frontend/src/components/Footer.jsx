import { Link } from 'react-router-dom'
import Logo2 from '../assets/icons/Logo2'
import '../assets/css/Footer.css'
import Linkedin from '../assets/icons/Linkedin'
import Facebook from '../assets/icons/Facebook'
import Twitter from '../assets/icons/Twitter'
import Instagram from '../assets/icons/Instagram'
import { useMediaQuery } from 'react-responsive'

export default function Footer() {
 const isMobile = useMediaQuery({ maxWidth: 425 });

  return (
    <footer>
        {!isMobile ? (
        <>
        <div>
            <Link to='/'><Logo2/></Link>
            <div id="bar"/>
            <div className="links">
                <div>
                    <Link to='/' className='footerItem'>Accueil</Link>
                    <Link to='/about' className='footerItem'>À propos</Link>
                    <Link to='/' className='footerItem'>Support</Link>
                    <Link to='/' className='footerItem'>Confidentialité</Link>
                </div>
                <p>© 2026 Banana Konect. Tous droits réservés.</p>
            </div>
        </div>
        <div>
            <div className="social-networks">
                <a href="" target="_blank" rel="noopener noreferrer" className="footerItem social-networks-logo"><Instagram /></a>
                <a href="" target="_blank" rel="noopener noreferrer" className="footerItem social-networks-logo"><Twitter /></a>
                <a href="" target="_blank" rel="noopener noreferrer" className="footerItem social-networks-logo"><Facebook /></a>
                <a href="" target="_blank" rel="noopener noreferrer" className="footerItem social-networks-logo"><Linkedin /></a>
            </div>
            <a className='footerItem' href="mailto:banana.konect@gmail.com?subject=SAV-Banana Konnect">banana.konect@gmail.com</a>
        </div>  
        </>
        )
        
        :

        (<>
            <div>
                <Link to='/'><Logo2/></Link>
                <div>
                    <div className="social-networks">
                        <a href="" target="_blank" rel="noopener noreferrer" className="footerItem social-networks-logo"><Instagram /></a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="footerItem social-networks-logo"><Twitter /></a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="footerItem social-networks-logo"><Facebook /></a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="footerItem social-networks-logo"><Linkedin /></a>
                    </div>
                    <a className='footerItem' href="mailto:banana.konect@gmail.com?subject=SAV-Banana Konnect">banana.konect@gmail.com</a>
                </div> 
            </div> 
            <div id="bar"/>
                <div className="links">
                    <div>
                        <Link to='/' className='footerItem'>Accueil</Link>
                        <Link to='/about' className='footerItem'>À propos</Link>
                        <Link to='/' className='footerItem'>Support</Link>
                        <Link to='/' className='footerItem'>Confidentialité</Link>
                    </div>
                    <p>© 2026 Banana Konect. Tous droits réservés.</p>
                </div>
        </>
        )
        }
        
    </footer>
  )
}

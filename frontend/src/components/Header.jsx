import Logo from '../assets/icons/Logo'
import './Header.css'
import { Plus, Bell, MessageSquareMore } from 'lucide-react';

export default function Header() {
  return (
    <div style={{display : "flex", flexDirection : "row", justifyContent : "space-between", paddingRight : "30px", paddingLeft : "30px", backgroundColor : "#FBFAF9", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", paddingTop : "20px", paddingBottom : "20px"}}>
        <div style={{display : "flex", flexDirection : "row"}}>
          <Logo size={65}/>
          <div style={{display : "flex", flexDirection : "row", gap: "40px", marginLeft : "40px", alignItems : "center"}}>
            <p className='headerText'>Accueil</p>
            <p className='headerText'>À propos</p>
          </div>
        </div>
        <div style={{display : "flex", flexDirection : "row", alignItems : 'center', gap:'30px'}}>
          <div style={{backgroundColor:"#FD9F01", display : "flex", flexDirection : 'row', borderRadius : "15px", padding : "15px", gap : "10px"}}>
            <Plus size={30} color={"#ffffff"} style={{alignSelf : "center"}}/>
            <p style={{color : "white", fontWeight : "bold"}}>Publier une annonce</p>
          </div>
          <Bell size={30} color="#0E1F35"/>
          <MessageSquareMore size={30} color='#0E1F35'/>
        </div>
    </div>
  )
}

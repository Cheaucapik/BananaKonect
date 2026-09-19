import './About.css'
import Header from '../components/Header.jsx'
import { Helmet } from 'react-helmet-async';

function About() {
  return(
    <>
    <Helmet>
      <title>À  propos</title>
    </Helmet>
    <Header></Header>
    </>
  )
}
export default About

import './SearchComp.css'
import {Search, X} from 'lucide-react'
import {useRef} from 'react'

export default function SearchComp() {
  const inputRef = useRef(null);
  return (
    <div className="search">
    <form>
        <label for='search'/>
        <input ref={inputRef} type="text" id="search" name="search" placeholder='Recherche' required/>

        <button onClick={() => { if (inputRef.current) inputRef.current.value = ""}} className='erase'><X color='#ffffff' className='x'/></button>
        <button type="submit"><Search className="responsive-icon" color="#ffffff"/></button>
    </form>
</div>
  )
}
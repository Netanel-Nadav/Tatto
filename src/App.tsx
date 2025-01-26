import {Routes, Route} from 'react-router-dom'

import { Navigation } from "./components/Navigaion"
import { ArtistDetails } from './pages/ArtistDetails'
import { BecomeArtist } from './pages/BecomeArtist'
import { Explore } from './pages/Explore'
import { Home } from './pages/Home'
import { Signup } from './pages/Signup'

export const App = () => {
  return (
    <div className="app main-container">
      <header className="main-container full">
        <Navigation />
      </header>
      <main className='full main-container'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/:id' element={<ArtistDetails />}/>
          <Route path='/explore' element={<Explore />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/becomeArtist' element={<BecomeArtist />}/>
        </Routes>
      </main>
      <footer>
      <p>All copyrights saved &copy;</p>
      </footer>
    </div>
  )
}

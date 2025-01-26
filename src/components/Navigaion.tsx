import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { UserActionTyps, UserState } from '../store/reducers/UserSlice';
import { asyncStorage } from '../services/asyncStorage';

export const Navigation = () => {

  const { user }: any = useSelector((state: UserState) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <nav className='flex align-center space-between'>
      <div className="logo-container">
        <h3 style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Artist Land</h3>
      </div>
      <ul className={`flex align-center clean-list ${isMenuOpen ? "open" : ""}`}>
        {isMenuOpen && <button onClick={() => setIsMenuOpen(false)}>X</button>}
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/explore'>Explore</NavLink></li>
        {!user && <li><NavLink to='/signup'>Signup</NavLink></li>}
        {user &&
          <>
            <li>
              <NavLink to='/becomeArtist'>Become an Artist</NavLink>
            </li>
            <button className='flex align-center'>
              <div className="img-container">
                <img src={user.picture} alt="" />
              </div>
              <span>{user.name}</span>
            </button>
            <button className='logout-btn' onClick={() =>{
               dispatch({ type: UserActionTyps.LOGOUT, payload: null })
               asyncStorage.saveToStorage('logged-user', null)
               navigate('/')
            }}>Logout</button>
          </>
        }
      </ul>
      <div className="hamburger flex column" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

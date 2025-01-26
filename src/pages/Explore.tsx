
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Artist } from '../models/Artist'
import { useNavigate } from 'react-router-dom'


export const Explore: React.FC = () => {
  const { artists } = useSelector((state: any) => state.artist)
  const { user } = useSelector((state: any) => state.user)
  const [categorySelected, setCategorySelected] = useState('')
  const [filteredArtists, setFilteredArtists] = useState<null | Artist[]>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()


  useEffect(() => {
    filterArtist()
  }, [categorySelected, searchTerm])


  const filterArtist = () => {
    if (!artists) return
    if (!categorySelected && !searchTerm) return setFilteredArtists(null)
    const filteredArtists = artists.filter((art: Artist) => {
      if (!categorySelected) return art.name.includes(searchTerm)
      else return art.services.includes(categorySelected) && art.name.includes(searchTerm)
    })
    setFilteredArtists(filteredArtists)
  }
  
  console.log(artists);
  
  if (!artists) return <h1>Loading..</h1>
  return (
    <div className="explore full main-container">
      <div className="seach-input full main-container">
        <input type="text" placeholder='search' onChange={({ target }) => setSearchTerm(target.value)} />
      </div>

      <section className="filters justify-self-center">
        <h2 className='text-center'>Search</h2>

        <select name="category" onChange={(e) => setCategorySelected(e.target.value)}>
          <option value="">All</option>
          <option value="Portraits">Portraits</option>
          <option value="Lettering">Lettering</option>
          <option value="Realism">Realism</option>
          <option value="black-and-grey">Black and Grey</option>
          <option value="Line">Line</option>
        </select>
      </section>

      <section className="filtered-imgs">
        <h2>{categorySelected}</h2>
        <div className="imgs-wrapper">
          {!filteredArtists && artists.map((artist: Artist) => (
            <button className="img-container" key={artist._id} onClick={() => navigate(`/${artist._id}`)}>
              <img src={artist.portfolio[0]} alt="" loading='lazy' />
              <div className="artist-info flex align-center">
                <div className="profile-img-container">
                  <img src={artist.profileImage} alt="profile img" />
                </div>
                  <p>{artist.name}</p>
              </div>
            </button>
          ))}
          {filteredArtists && filteredArtists.map((artist: Artist) => (
            <button className="img-container" key={artist._id} onClick={() => navigate(`/${artist._id}`)}>
              <img src={artist.portfolio[0]} alt="" />
              <div className="artist-info flex align-center">
                <div className="profile-img-container">
                  <img src={artist.profileImage} alt="profile img" />
                </div>
                  <p>{artist.name}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

    </div>
  )
}

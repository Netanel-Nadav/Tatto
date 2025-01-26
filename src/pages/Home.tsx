import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


import { ExploreArtists } from "../components/ExploreArtists"
import { Hero } from "../components/Hero"
import { OurGoal } from "../components/OurGoal"
import { artistService } from '../services/artist.service'
import { ArtistActionTyps } from '../store/reducers/ArtistSlice'
import { ImgSlider } from '../components/ImgSlider'



export const Home = () => {
  const { artists } = useSelector((state: any) => state.artist)
  const { user } = useSelector((state: any) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if(!artists) loadArtists()
  }, [])

  const loadArtists = async () => {
    const artists = await artistService.query()
    dispatch({ type: ArtistActionTyps.SET_ARTISTS, payload: artists })
  }
  
  return (
    <div className="home full">
      <Hero />
      <OurGoal />
      <ExploreArtists />
      <ImgSlider artists={artists} />
    </div>
  )
}

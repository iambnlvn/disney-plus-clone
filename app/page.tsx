import Header from '@/components/header/Header'
import Producers from '@/components/producers/Producers'
import Slider from '@/components/slider/Slider'
import GenreMovieList from '@/components/movies/GenreMovieList'
export default function Home() {
  return(
  <div className=''>
      <Header />
      <Slider />
      <Producers />
      <GenreMovieList />
    </div>
  )
}

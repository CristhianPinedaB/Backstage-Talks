
import './App.css'
import { NavList } from './components/NavList'
import { Header } from './components/Header'
import { PosterContainer } from './components/PosterContainer'
import { data_posters } from './data/dataPosters'

function App() {


  return (
    <>
      <Header/>
      <NavList data_posters={data_posters}/>
      <PosterContainer data_posters= {data_posters}/>
    </>
  )
}

export default App

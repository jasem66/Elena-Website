import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './Home'
import ShowCase from './ShowCase'
import Boxes from './components/Boxes'
import Questions from './Questions'
import Sliders from './Sliders'
function App() {
  return (
    <>
      <ShowCase />
      <Boxes />
      <Questions />
      <Sliders />
      <Home />
    </>
  )
}

export default App

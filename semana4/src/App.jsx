import './App.css'
import Header from './Header.jsx'
import Slideshow from './Slideshow.jsx'
import Intro from './Intro.jsx'
import Noticias from './Noticias.jsx'
import Footer from './Footer.jsx'
import Cartaz from './Cartaz.jsx'
import Agenda from './Agenda.jsx'

function App() {

  return (
    <>
        <Header />
        <Slideshow />
        <Intro/>

      <main>
          <Cartaz />
          <Noticias />
          <Agenda />
      </main>

      <Footer />
    </>
  )
}

export default App

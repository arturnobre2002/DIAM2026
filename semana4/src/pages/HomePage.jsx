import Header from '../Header.jsx'
import Slideshow from '../Slideshow.jsx'
import Intro from '../Intro.jsx'
import Noticias from '../Noticias.jsx'
import Footer from '../Footer.jsx'
import Cartaz from '../Cartaz.jsx'
import Agenda from '../Agenda.jsx'


function HomePage(){
    return(
        <>
         <Header />
            <main className="container my-4">
                <Slideshow />
                <Intro />
                <div className="row mt-5">
                    <div className="col-7">
                        <Cartaz />
                        <Agenda />
                    </div>
                    <aside className="col-5">
                        <Noticias />
                    </aside>
                </div>
            </main>
            <Footer />





        </>
    )
}

export default HomePage
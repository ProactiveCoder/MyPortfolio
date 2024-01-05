import './App.css'
import Hero from './components/Home/Hero'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Resume from './components/Resume/Resume'
import Skills from './components/About/Skills'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='body'>
   <Navbar/>
   <Hero/>
   <Skills/>
   <Portfolio/>
   <Resume/>
   <Blog/>
   <Contact/>
   <Footer/>
    </div>
  )
}

export default App


import './App.css'

import { Navbar } from './Components/Navbar'
import Content from "./Components/Content"
import { Dishes } from './Components/Dishes'
import { Aboutsec } from './Components/Aboutsec'
import { Menu } from './Components/Menu'
import { Review } from './Components/Review'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <div>
       
          <Navbar/>

          <main>

          <div id='content'>
          <Content/>
          </div>

          <div id='dishes'>     
            <Dishes/>
          </div>

          <div id='Aboutsec'>     
          <Aboutsec/>
          </div>
     
          <div id='menu'>     
          <Menu/>
          </div>

          <div id='review'>
            <Review/>
            
          </div>

          <div id='footer'>
            <Footer/>
            
          </div>

 </main>
      </div>
    </>
  )
}

export default App

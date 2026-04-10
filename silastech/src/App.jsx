import React from 'react'
import Mainnavbar from './Navbarcomponent/Mainnavbar'
import Navbar from './Navbarcomponent/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Categories from './Pages/Categories'
import Products from './Pages/Products'
import Bout from './Pages/Bout'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Footer from './Navbarcomponent/Footer'
import Phones from './Categories_Page/Phones'
import Watch from './Categories_Page/Watch'
import Headphones from './Categories_Page/Headphones'
import Smartwatch from './Categories_Page/Smartwatch'
import Accessories from './Categories_Page/Accessories'
import BluethoothSpeaker from './Categories_Page/BluethoothSpeaker'
import CategoryPage from "./Pages/CategoryPage"


const App = () => {
  return (
    <div>
      <Mainnavbar />
      <Navbar />
      <Routes>
      <Route path='/*' element={<Home />} />
      <Route path="/category/:name" element={<CategoryPage/>}/> 
      <Route path='/category' element={<Categories />} />
      <Route path='/product' element={<Products />}/>
      <Route path='/about' element={<Bout />} />
      <Route path='/service' element={<Services />}/>
      <Route path='/Contact' element={<Contact />}/>
      
      <Route path='/category' element={<Categories />} />
      <Route path='/produt' element={<Products />} />
      {/* link of category pages */}
      <Route path='/phone' element={<Phones />} />
      <Route path='/watch' element={<Watch />} />
      <Route path='/headphone' element={<Headphones />} />
      <Route path='/smartwatch' element={<Smartwatch />}/>
      <Route path='/accessories' element={<Accessories />}/>
      <Route path='/speaker' element={<BluethoothSpeaker />}/>
      {/* end */}
      </Routes>
      <Footer />
    </div>
  )
}
export default App;














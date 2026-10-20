import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import './App.css'
import image from "./assets/WhatsApp Image 2026-10-17 at 11.19.35 AM.jpeg";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Protfolio";
import Contact from "./Pages/Contact";







function App(){
    return(
 <div>
       
      <Navbar/>
   <Routes>
     <Route path="/" element={<Home
      image={image}
        title="Crafting Modern & Interactive Web Experiences"
        para="I'm Sara, a passionate Frontend Developer focused on building responsive, user-friendly, and visually engaging websites. I turn creative ideas into seamless digital experiences using React, JavaScript, and Tailwind CSS."
        boutton="Explore My Work"
     
     />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact/>} />
   </Routes>
</div>

    )
}

export default App;
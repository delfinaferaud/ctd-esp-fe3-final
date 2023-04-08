import {Route, Routes } from "react-router-dom";
import Home from "./Routes/Home.jsx"
import Contact from "./Routes/Contact.jsx"
import Favs from "./Routes/Favs.jsx"
import Detail from "./Routes/Detail.jsx"
import Footer from "./Components/Footer.jsx"
import Navbar from "./Components/Navbar.jsx"
import { useGlobalStates } from "./Components/utils/global.context.jsx";

function App() {
  const{state}=useGlobalStates()
  return (
      <div className="App" id={state.theme}>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/favs" element={<Favs/>}/>
            <Route path="/dentist/:id" element={<Detail/>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;

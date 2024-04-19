
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import SinglePage from './components/SinglePage';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  path='/'exact element={<Home/>}/>
         <Route  path='/menu'exact element={<Menu/>}/>
         <Route  path='/about'exact element={<About/>}/> 
        <Route  path='/contact'exact element={<Contact/>}/>
        <Route  path='/item/:id'exact element={<SinglePage  />}/>  
        <Route  path='/cart'exact element={<Cart  />}/>  
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

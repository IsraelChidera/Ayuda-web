import {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import Admin from './pages/Admin';
import './index.css';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import About from './pages/About';
import Posting from './pages/Posting';
import {AuthContextProvider} from './context/authContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

function App() {
  const [loader, setLoader] = useState(false);
  useEffect(()=>{
    setTimeout(() => {      
      setLoader(true);
    }, 4000)
  }, [])

  return (
    <>
      {/* <AuthContextProvider> */}
        <div className="App bg-white">
          {
            !loader?
            (
              
                <div id="load" className="text-8xl space-x-4">
                  <div>.</div>
                  <div>.</div>
                  <div>A</div>
                  <div>D</div>
                  <div>U</div>
                  <div>Y</div>
                  <div>A</div>
                </div>
            
            )
            :
            (
              <div>            
                
                <div className="relative">                  
                  <div className="bg-primary rounded-full text-white p-4 fixed z-50 right-14 bottom-10">
                    <a
                    href="https://wa.me/2349014960716"                    
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                      <i className="fab fa-2x fa-whatsapp"></i>
                    </a>
                  </div>   

                  <Routes>
                    <Route exact path="/" element={<LandingPage/>}/>
                    <Route path="/plans-pricing" element={<PricingPage/>}/>                               
                    <Route path="/about" element={ <About/> } />                    
                    <Route path="/payment" element={<Checkout/>}/>
                    <Route path="*" element={<p>There's nothing here: 404!</p>} />
                  </Routes>
                </div>
                
              </div>
            )
          }
        </div>
      {/* </AuthContextProvider>       */}
    </>
  );
}

export default App;

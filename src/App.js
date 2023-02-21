import './App.css';
import Header from './Header/Header';
import Aboute from './Header/Header-komponents/Aboute';
import Home from './Header/Header-komponents/Home';
import Footer from './Footer/Footer';
import { Routes, Route} from 'react-router-dom';
import Main from './Main/Main';
import MainBoxToysCard from './Main/MainBoxToys/MainBoxToysCard';


function App() {

  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Main />}/>
          <Route path='/aboute' element={<Aboute />}/>
          <Route path='/shop/:id' element={<MainBoxToysCard />}/>
        </Routes>
        <Footer />

    </div>
  );
}

export default App;

import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home'
import Layout from './layout/Layout';
import BestSellers from './pages/bestSellers/BestSellers';
import NewArrivals from './pages/newArrivals/NewArrivals';
import Rings from './pages/rings/Rings';
import Earrings from './pages/earrings/Earrings';
import BraceletsBangles from './pages/braceletsBangles/BraceletsBangles';
import Solitaires from './pages/solitaires/Solitaires';
import OtherJewellery from './pages/otherJewellery/OtherJewellery'
import Gifting from './pages/gifting/Gifting';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} /> 
        <Route path="bestSellers" element={<BestSellers/>}/>
        <Route path="new-arrivals" element={<NewArrivals/>}/>
        <Route path="rings" element={<Rings/>}/>
        <Route path="earrings" element={<Earrings/>}/>
        <Route path="bangles-bracelets" element={<BraceletsBangles/>}/>
        <Route path="solitaires" element={<Solitaires/>}/>
        <Route path="other-jewellery" element={<OtherJewellery/>}/>
        <Route path="gifting" element={<Gifting/>}/>
      </Route>
    </Routes>
    
  );
}

export default App;
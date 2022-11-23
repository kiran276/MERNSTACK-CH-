import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Navigation from './Components/shared/Navigation/Navigation';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';

function App() {
  return (<>
    <BrowserRouter>
    <Navigation/>
    <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/Register' exact element={<Register/>}/>
        <Route path='/Login' exact element={<Login/>}/>
        {/* <Route path='/' exact element={}/> */}
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;

import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>  
      <Home></Home>
      {/* <Outlet></Outlet>  */}
    </div>
  );
}

export default App;

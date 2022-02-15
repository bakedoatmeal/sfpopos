import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Footer from './Footer';
import POPOSList from './POPOSList';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Title/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;

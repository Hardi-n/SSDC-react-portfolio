// import logo from './logo.svg';
import './App.css';
import Header from './My Components/header';
import {Home} from './My Components/Home';
import { About } from './My Components/About';
import { Somemoment } from './My Components/Somemoment';
import { Contact } from './My Components/Contact';
import { Connect } from './My Components/Connect';
import { Footer } from './My Components/Footer';
function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Somemoment/>
      <Contact/>
      <Connect/>
      <Footer/>
    </>
  );
}

export default App;

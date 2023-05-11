import 'bootstrap/dist/css/bootstrap.min.css'
import "animate.css/animate.min.css";
import './App.css';
import Home from './components/Home';
import { About } from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Review from './components/Review';

function App() {
  return (
    <>
    
<Home/>
<About/>
<Review/>
<Services/>
<Contact/>
    </>
  );
}

export default App;

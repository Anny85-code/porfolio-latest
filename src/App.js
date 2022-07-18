import Intro from './Components/Intro/Intro';
// import Services from './components/Services/Services';
// import Experience from './components/Experience/Experience';
// import Works from './components/Works/Works';
// import Portfolio from './components/Portfolio/Portfolio';
// import Testimonial from './components/Testimonials/Testimonial';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';
// import { useContext } from 'react';
// import { themeContext } from './Context';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div
      className='App'
      // style={{
      //   background: darkMode ? 'black' : '',
      //   color: darkMode ? 'white' : '',
      // }}
    >
      <Navbar />
      <Intro />
      {/* <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />  */}
    </div>
  );
}

export default App;

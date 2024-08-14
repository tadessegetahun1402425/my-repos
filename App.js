impot
// import logo from './logo.svg';
// import './App.css';
// import Wellcome from './tranninig/new';
// import UseStateCount from './hooks/input-opition';
// import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
// import Home from './pages/home';
// import Contact from './pages/contact';
// import About from './pages/about';
// import Usestatecounter from './hooks/usestatecounter';
// import AuthForm from './hooks/nr';
// function App() {
//   return (
//     <div className="App">
//       <AuthForm />
//       {/* <Usestatecounter />
//       <Home />
//       <Router>
//         <nav>
//           <Link to = '/'>HOME</Link><br></br>
//           <Link to = '/Contact'>Contactus</Link><br></br>
//           <Link to = '/About'>Aboutus</Link><br></br>

//         </nav>
//         <Routes>
//           <Route path="/" element = {<home/>} />
//           <Route path="/Contact" element = {<Contact/>} />
//           <Route path="/About" element = {<About/>} />
//           <Route path="*" element = {<h1>page not found</h1>} />

//         </Routes>
//       </Router>
//  */}


//       {/* <UseStateCount /> */}
//       {/* <Wellcome />
//       <h1>hello world</h1>
//       <h2>my name is tadesse getahun molla azenega dellele nigusea bable joricho</h2>
//       <h4>hello mengistu amanu belew</h4>
//       <h1>kgfkqhlefk</h1> */}
//     </div>
//   );
// }

// export default App;
// import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './project/Header';
import LeftSidebar from './project/LeftSidebar';
import MiddleSection from './project/MiddleSection';
import Footer from './project/Footer';
import Login from './project/Login';
import Signup from './project/Signup';
import car from './immages/car.jfif'
import elect from './immages/electronics.jfif'
import home from './immages/home.jfif'
import hotel from './immages/hotel.jfif'




function App() {
  return (
    <Router>
      <div className="App">
        
        <Header />
        
        <div className="main-content">
          <LeftSidebar />
          <Switch><a>
            <Route exact path="/" component={MiddleSection} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            
            </a>
          </Switch>
          <div className="middle-section">
              <div className="item">
                <img src={car}/>
                <p>Car</p>
                <a href="http://carwebsite.com">Visit Website</a>
              </div>
              <div className="item">
                <img src={elect} />
                <p>electronics</p>
                <a href="http://hotelwebsite.com">Visit Website</a>
              </div>
              <div className="item">
                <img src={home}/>
                <p>Smart Home</p>
                <a href="G:\Downloads\OIP (1).jfif">Visit Website</a>
              </div>
              {/* <div className="item">
                <img src={hotel} />
                <p>hotel</p>
                <a href="http://electronicswebsite.com">Visit Website</a>
              </div> */}
    </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

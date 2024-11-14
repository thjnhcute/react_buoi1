// import {Routes,Route} from 'react-router-dom';
// import HomePage from './page/home.js';
// import NewsPage from './page/news.js';
// import ContactPage from './page/contact.js';
import logo from './logo.svg';
import './App.css';
import { Hello, HelloPersion } from './hello.js';
import React from 'react';
import { Header,Login } from './header.js';
import Car from './car.js';


function App() {

  
  return (
    <div className="App">
         {/* <Hello />  */}
         {/* <HelloPersion/> */}
        <Header/>
        {/* <Login/> */}
        {/* <Car />  */}

        {/* <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/news'>news</a>
            </li>
            <li>
              <a href='/contact'>contact</a>
            </li>
          </ul>
        </nav> */}
       {/* <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/news' element={<NewsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>

       </Routes> */}
    </div>
  
    
  );
}


export  {App};

import React from 'react';
import Header from './components/Header'
import Feed from './components/Feed'
import './index.css';

function App() {
 
  return (

   <div className="App">
     <Header/>
     <Feed/>
   </div>
   )
  //React.createElement(
  //   'div', 
  //   {
  //   className: 'App'
  //   },
  //   React.createElement(
  //       'h1',
  //       null,
  //       'Hello, world'

  //   )
  // )
}

export default App;

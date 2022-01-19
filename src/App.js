import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ShowBookList from './components/ShowBookList';
import CreateBook from './components/CreateBook';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowBookList />}>


          </Route>

        </Routes>
      </BrowserRouter>

      // <Router>
      //   <div>
      //     <Route path='/'>
      //       <ShowBookList />
      //     </Route>
      //     {/* <Route path="/testing" component={ShowBookList} /> */}
      //   </div>

      // </Router>


    )
  }
}

export default App;
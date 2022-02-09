import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ShowBookList from './components/ShowBookList';
import CreateBook from './components/CreateBook';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ShowBookList />}>
          </Route>
          <Route path='/create-book' element={<CreateBook />}>
          </Route>
          <Route path='/show-book/:id' element={<ShowBookDetails />}>
          </Route>
          <Route path='/edit-book/:id' element={<UpdateBookInfo />}>
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
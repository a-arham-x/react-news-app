import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// API Key 1530b1fe1ca949a5812c8760dea94315

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* <div> */}
            <Navbar />
            <Routes>
              <Route exact path="/" element={<News key="home" category="general"></News>} />
              <Route exact path="/general" element={<News key="general" category="general"></News>} />
              <Route exact path="/business" element={<News key="business" category="business"></News>} />
              <Route exact path="/entertainment" element={<News key="entertainment" category="enetertainment"></News>} />
              <Route exact path="/science" element={<News key="science" category="science"></News>} />
              <Route exact path="/sports" element={<News key="sports" category="sports"></News>} />
              <Route exact path="/technology" element={<News key="technology" category="technology"></News>} />
              <Route exact path="/health" element={<News key="health" category="health"></News>} />
            </Routes>
            {/* <News category="science"></News> */}
          {/* </div> */}
        </Router>
      </div>
    )
  }
}


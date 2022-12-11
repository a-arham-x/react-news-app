import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// API Key 1530b1fe1ca949a5812c8760dea94315

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        {/* <div> */}
        <LoadingBar
          color='#0000FF'
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="home" category="general"></News>} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" category="general"></News>} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" category="business"></News>} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" category="enetertainment"></News>} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" category="science"></News>} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" category="sports"></News>} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" category="technology"></News>} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" category="health"></News>} />
        </Routes>
        {/* <News category="science"></News> */}
        {/* </div> */}
      </Router>
    </div>
  )
}

export default App; 


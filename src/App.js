import Header from "./components/header/header";
import SeriesList from "./components/seriesList/seriesList";
import FilmsList from "./components/filmsList/filmsList";
import TopSeries from "./components/topSeries/topSeries";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OneFilmCard from "./components/oneFilmCard/oneFilmCard";
import { useState } from 'react';

import "./App.css";

function App() {
const [filmsVisible, setFilmsVisible] = useState(false)


  return (
    // <Router>
    //   <div className="App">
    //     <Header />
    //     <Routes>
    //       <div className="main__part">
    //         <div className="left">
    //           <Route path="/" element={<TopSeries />} />
    //         </div>
    //         <div className="right">
    //           <Route path="/" element={<SeriesList />} />
    //           <Route path="/" element={<FilmsList />} />
    //           <Route path="/:id" element={<OneFilmCard />} />
    //         </div>
    //       </div>
    //     </Routes>
    //   </div>
    // </Router>

    <Router>
      <div className="App">
        <Header />

        <div className="main__part">
          <div className="left">
            <Routes>
              <Route path="/" element={<TopSeries />} />
            </Routes>
          </div>
          <div className="right">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <SeriesList />
                    <FilmsList />
                  </>
                }
              />
            </Routes>
          </div>
        </div>
        <Routes>
          <Route path="/:id" element={<OneFilmCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

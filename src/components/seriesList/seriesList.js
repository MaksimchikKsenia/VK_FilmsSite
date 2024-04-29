import React, { useState, useEffect } from "react";
import useKinoService from "../kinoService.js";
import FilmIcon from "../filmIcon/filmIcon.js";
import { Link } from 'react-router-dom';
import moreBtn from "../../images/moreBtn.png";
import "./seriesList.css";
import setContent from '../setContent.js';

const SeriesList = () => {
  const [seriesList, setSeriesList] = useState([]);
  const [page, setPage] = useState(1);
  const [clickCount, setClickCount] = useState(1); 
  const { loading, error, getSeries, process, setProcess } = useKinoService();

 useEffect(() => {
    console.log(seriesList)
     onRequest(page);
 }, []);

  const onRequest = (page) => {
    getSeries(page)
      .then(onSeriesListLoaded)
      .then(() => setProcess("confirmed"));
  };

 const onSeriesListLoaded = (newSeriesList) => {
 
   if (page === 1) {
     setSeriesList(newSeriesList);
   } else {
     setSeriesList((prevList) => [...prevList, ...newSeriesList]);
   }

   setPage(page + 1);
 };


  const handleMoreButtonClick = () => {
    if (clickCount < 4) {
      onRequest(page);
      setClickCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div className="container">
      <div className="series-titleBlock">
        <h2 className="series-title">Сериалы</h2>
        <div
          className="more__btn"
          disabled={clickCount >= 4}
          style={{
            display: clickCount >= 4 ? "none" : "flex",
          }}
          onClick={handleMoreButtonClick}
        >
          <img src={moreBtn} alt="" className="more__btn-img" />
          <p className="more__btn-text"> Больше </p>
        </div>
      </div>
      <div className="series-line"></div>
      {setContent(process, View, seriesList)}
    </div>
  );
};


const View = ({data})=>{

  return (
    
    <div className="series-list">
      {data.map((item) => (
        <Link to={`/${item.id}`} className="link">
          <FilmIcon
            key={item.id}
            name={item.title.length > 20 ?  item.title.slice(0,20): item.title }
            src={item.poster}
            rating={item.rating}
          />
        </Link>
      ))}
    </div>
  );
}

export default SeriesList;

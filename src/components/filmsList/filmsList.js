import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import setContent from "../setContent.js";
import useKinoService from "../kinoService.js";
import FilmIcon from "../filmIcon/filmIcon.js";

import "./filmsList.css";

const FilmsList = () => {
  const [filmList, setFilmList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const { loading, error, getFilms, process, setProcess } = useKinoService();
  
  useEffect(() => {
    onRequest(currentPage);
  }, [currentPage]);

 

  const onRequest = (currentPage) => {
    getFilms(currentPage)
      .then(onFilmsListLoaded)
      .then(() => setProcess("confirmed"));
  };

  const onFilmsListLoaded = (newFilmList) => {
    setFilmList(newFilmList);
  };

 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="films-titleBlock">
        <h2 className="films-title">Фильмы</h2>
      </div>
      <div className="films-line"></div>
      {setContent(process, View, filmList)}
      <div className="pagination__block">
        {[...Array(5)].map((item, i) => (
          <button
            onClick={() => setCurrentPage(i + 1)}
            key={i}
            className={
              currentPage == i + 1
                ? "active pagination__block-item"
                : "notActive pagination__block-item"
            }
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const View = ({data})=>{

return (
  <div className="films-list">
    {data.map((item) => (
      <Link to={`/${item.id}`} className="link">
        <FilmIcon
          key={item.id}
          name={item.title.length > 20 ? item.title.slice(0, 20) : item.title}
          src={item.poster}
          rating={item.rating}
        />
      </Link>
    ))}
  </div>
);
}

export default FilmsList;

import { useState, useEffect } from 'react';
import setContent from '../setContent';
import { Link } from 'react-router-dom';
import useKinoService from '../kinoService';
import TopFilm from '../topFilm/topFilm';
import './topSeries.css'
const TopSeries = ()=>{

   const [topList, setTopList] = useState([]);
  
   const { loading, error, getTopFilms, process, setProcess } =
     useKinoService();

   useEffect(() => {
     onRequest();
   }, []);

 
   const onRequest = () => {
     getTopFilms()
       .then(onTopFilmsListLoaded)
       .then(() => setProcess("confirmed"));
   };

   const onTopFilmsListLoaded = (newTopList) => {
     setTopList(newTopList);
   };



	return (
    <div className="top__container">
      <h2 className="top__title">TOP 5 Series</h2>
      <div className="top__line"></div>
      {setContent(process, View, topList)}
    </div>
  );
}


const View = ({data})=>{
  return (
    <div className="top__list">
      {data.map((item, index) => (
        <Link className="link" to={`/${item.id}`}>
          <TopFilm
            index={index}
            name={item.title}
            src={item.poster}
            shortDescr={item.shortDescr}
            rating={item.rating}
          />
        </Link>
      ))}
    </div>
  );
}
export default TopSeries
import FilmIcon from '../filmIcon/filmIcon'
import setContent from '../setContent';
import useKinoService from '../kinoService';
import { useState, useEffect } from 'react';
import noVideo from '../../images/noVideo.jpg'
import { Link, useParams } from 'react-router-dom';
import noImg from '../../images/no_image_big.webp'
import './oneFilmCard.css'


const OneFilmCard = ()=>{
  const {id} = useParams()
const [film, setFilm] = useState([]);
const { loading, error, getFilm, process, setProcess } = useKinoService();

useEffect(() => {
  onRequest(id);
}, [id]);



const onRequest = (id) => {
  getFilm(id)
    .then(onFilmLoaded)
    .then(() => setProcess("confirmed"));
};

const onFilmLoaded = (newFilm) => {
  setFilm(newFilm);
};

	return (
    
      <div className="container">
        <Link to={"/"} className="link">
          <p className="mainPage">&larr;На главную</p>
        </Link>
        <h1 className="film__name"> {film.title} </h1>
        {setContent(process, View, film)}
      </div>
    
  );
}

const View = ({data})=>{

  return (
    <>
      <div className="card__block">
        <img src={data.poster} alt="" className="card__block-img" />
        <div className="card__block-text">
          <p className="type text">Вид: {data.type}</p>
          <p className="year text">Год выпуска: {data.year}</p>
          <p className="rating text">Рейтинг Кинопоиск: {data.rating}</p>
          <p className="movieLength text">
            Возрастное ограничение :{data.age}+
          </p>
          <p className="description text">Описание: {data.description}</p>
        </div>
      </div>
      <div>
        <h3 className="trailer__title">Посмотрите трейлер данного фильма</h3>
        {data.trailer === "" ? (
          <img src={noVideo} alt="" className="mockImg" />
        ) : (
          <iframe
            width="560"
            height="315"
            src={data.trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <h3 className="similar__title"> Похожие фильмы</h3>
      {data.similarMovies.length > 0 ? (
        <div className="similar-films">
          {data.similarMovies.map((item) => (
            <Link to={`/${item.id}`} className="link">
              <FilmIcon 
              name={item.name} 
              rating={item.rating ? item.rating.imdb: "-" } 
              src={item.poster ? item.poster.url: noImg  } />
            </Link>
          ))}
        </div>
      ) : (
        <p className="similar__text">
          "Извините, мы пока не нашли похожие фильмы или сериалы"
        </p>
      )}
    </>
  );
}
export default OneFilmCard
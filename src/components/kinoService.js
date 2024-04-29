import { MyHook } from "./myHook";
import noImg from "../images/no_image_big.webp";
const useKinoService = () => {
  const { request, clearError, process, setProcess } = MyHook();

  const getFilms = async (page) => {
    const res = await request(
      `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=12&isSeries=false`
    );
   
    return res.docs.map(_transformFilms);
    
  };

  const getSeries = async (page) => {
    const result = await request(
      `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=4&isSeries=true`
    );
   
    return result.docs.map(_transformSeries);
 
  };

  const getTopFilms = async () => {
    const result = await request(
      `https://api.kinopoisk.dev/v1.4/movie?page=35&limit=5`
    );
 
    return result.docs.map(_transformFilms);
   
  };

  const getFilm = async (id) => {
    const res = await request(`https://api.kinopoisk.dev/v1.4/movie/${id}`);
    return _transformFilms(res);
  
  };

  const findFilm = async (name) => {
    const res = await request(
      `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=4&query=${name}`
    );
 
    return res.docs.map(_transformFilms);
  
  };

  const _transformSeries = (series) => {
    return {
      id: series.id,
      age: series.ageRating ? series.ageRating : "нет информации",
      title: series.name ? series.name : "нет названия",
      type: series.type ? series.type : "нет информации",
      year: series.year ? series.year : "нет информации",
      rating: series.rating
        ? Math.round(series.rating.kp).toFixed(1)
        : series.rating.imdb,
      description: series.description ? series.description : "Нет описания",
      shortDescr: series.shortDescription
        ? series.shortDescription.slice(0, 20) + "..."
        : "Нет описания",
      poster: series.backdrop.url ? series.backdrop.url : noImg,
      trailer: series.videos ? series.videos.trailers[0].url : "",
      similarMovies: series.similarMovies
        ? series.similarMovies
        : [],
    };
  };

  const _transformFilms = (film) => {
    return {
      id: film.id,
      age: film.ageRating ? film.ageRating : "нет информации",
      title: film.name ? film.name : "нет названия",
      type: film.type ? film.type : "нет информации",
      year: film.year ? film.year : "нет информации",
      rating: film.rating
        ? Math.round(film.rating.kp).toFixed(1)
        : film.rating.imdb,
      filmLength: film.movieLength
        ? film.movieLength
        : "нет информации"
        ? "Длительность фильма " + film.movieLength
        : null,
      description: film.description ? film.description : "Нет описания",
      shortDescr: film.shortDescription
        ? film.shortDescription
        : "Нет описания",
      poster: film.backdrop.url ? film.backdrop.url : noImg,
      trailer: film.videos ? film.videos.trailers[0].url : "",
      similarMovies: film.similarMovies ? film.similarMovies : [],
    };
  };

  return {
    getFilms,
    getTopFilms,
    getSeries,
    getFilm,
    findFilm,
    clearError,
    process,
    setProcess,
  };
};

export default useKinoService;

import logo from '../../images/LOGO.png'
import name from '../../images/ComponyName.png'
import searchIcon from '../../images/SearchIcon.png'
import useKinoService from '../kinoService'
import SearchCard from '../searchCard/searchCard'
import setContent from '../setContent'
import Spinner from '../Spinner/spinner'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'

import './header.css'

const Header =()=>{

	  const [isFocused, setIsFocused] = useState(false);
	  const [isRequested, setIsRequested] = useState(false);
    const [request, setRequest] = useState('')
    const [filmList, setFilmList] = useState([])
    const [load, setLoad] = useState(false)

    
    const { loading, error, findFilm, process, setProcess } = useKinoService();

    const onRequest = (request) => {
  
        setIsRequested(true);
        findFilm(request)
          .then(onFilmLoaded)
          .then(() => setProcess("confirmed"));
      
      
    };

    const onFilmLoaded = (newFilmList) => {
      setFilmList(newFilmList);
      setIsRequested(false)
      setLoad(false)
    };
  

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      if(request !=''){
        setLoad(true);
        onRequest(request);
        setIsFocused(false);
      
      }
    };

 

	return (
    <div className="container">
      <div className="main__block">
        <img src={logo} alt="" className="main__block-logo" />
        <img src={name} alt="" className="main__block-name" />
        <img src={searchIcon} alt="" className="main__block-searchIcon" />
        <input
          type="text"
          className="main__block-search"
          placeholder={isFocused ? "" : "Введите название фильма и нажмите на кнопку поиска"}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value = {request}
          onChange={(e) => setRequest(e.target.value)}
        />
      </div>
      {filmList.length != 0 ? setContent(process, View,{ filmList, isRequested, setFilmList, setRequest}) : load ?  <Spinner/> : null}
     
    </div>
  );

}


const View = ({data})=>{
  const {filmList, isRequested, setFilmList, setRequest} = data
 
  const clearFilms = ()=>{
    setFilmList([])
    setRequest('')
  }

  return (
      <div className="findedFilms">
        {filmList && filmList.length !== 0 ? (
          filmList.map((item) => {
            return (
              <Link to={`/${item.id}`} className="link" onClick = {clearFilms}>
                <SearchCard
                  name={item.title}
                  src={item.poster}
                  shortDescr={item.shortDescr.slice(0, 50) + "..."}
                  rating={item.rating}
                />
              </Link>
            );
          })
        ) : isRequested ? (
          <p className='similar__text'>Фильм не найден</p>
        ) : null}
      </div>
   
  );
}
export default Header
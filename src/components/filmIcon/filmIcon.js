import star from "../../images/star.png"
import './filmIcon.css'
const FilmIcon = (data)=>{

	return (
    <div className="film-container" style={{ backgroundImage: `url(${data.src})` }}>
      <div className="film__field">
        <h4 className="film__field-name">{data.name.length > 20? data.name.slice(0,20)+'...' : data.name}</h4>
        <div className="film__field-rate">
          <img src={star} alt="" className="stars"></img>
          <p className="rate">{`${data.rating}/10`}</p>
        </div>
      </div>
    </div>
  );
}

export default FilmIcon
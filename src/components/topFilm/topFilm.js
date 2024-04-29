import star from "../../images/star.png";
import mockImg from '../../images/mockTopImg.png'
import './topFilm.css'

const TopFilm = (data) => {
  return (
    <div className="topfilm__card">
      <img src={data.src} alt="" className="topfilm__card-img" />
      <div className="topfilm__card-field">
        <p className="topfilm__field-num"> &#176;{data.index + 1}</p>
        <h4 className="topfilm__field-name">
          {data.name
            ? data.name.length > 10
              ? data.name.slice(0, 10) + "..."
              : data.name
            : "no title"}
        </h4>
        <p className="shortDesc">{data.shortDescr.slice(0, 20) + "..."}</p>
        <div className="topfilm__field-rate">
          <img src={star} alt="" className="stars"></img>
          <p className="rate">{`${data.rating}/10`}</p>
        </div>
      </div>
    </div>
  );
};

export default TopFilm

import star from "../../images/star.png";
import mockImg from "../../images/mockTopImg.png";
import "./searchCard.css"

const SearchCard = (data) => {
  return (
    <div className="search__card">
      <img src={data.src} alt="" className="search__card-img" />
      <div className="search__card-field">
        <h4 className="search__field-name">
          {data.name.length > 20 ? data.name.slice(0, 20) : data.name}
        </h4>
        <p className="search__shortDesc">{data.shortDescr}</p>
        <div className="search__field-rate">
          <img src={star} alt="" className="stars"></img>
          <p className="rate">{data.rating}/10</p>
        </div>
      </div>
    </div>
  );
};

export default SearchCard

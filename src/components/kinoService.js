import { MyHook } from "./myHook";
import noImg from "../images/no_image_big.webp";
const useKinoService = () => {
  const { request, clearError, process, setProcess } = MyHook();

  //   const oneObj = {
  //     id: 435,
  //     name: "Зеленая миля",
  //     img: "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a00000169e39ef77f588ccdfe574dae8227/orig",
  //     rating: 8.6,
  //     year: 1999,
  //     description:
  //       "Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.",
  //     duration: "189 minutes",
  //     trailer: "https://www.youtube.com/embed/TODt_q-_4C4",
  //     genres: [
  //       {
  //         name: "драма",
  //       },
  //       {
  //         name: "фэнтези",
  //       },
  //       {
  //         name: "криминал",
  //       },
  //     ],
  //     county: [
  //       {
  //         name: "США",
  //       },
  //     ],
  //     similarMovies:[
  //     {
  //       id: 1100777,
  //       name: "Триггер",
  //       img: "https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a0000017e08446283517541047b63d35a54/orig",
  //       rating: 7.4,
  //       shortDescr:
  //         "Гриша, бывший мажор, побывавший холопом и ставший человеком, после ",
  //       year: 2018,
  //     },
  //     {
  //       id: 435,
  //       name: "Зеленая миля",
  //       img: "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a00000169e39ef77f588ccdfe574dae8227/orig",
  //       rating: 8.6,
  //       shortDescr:
  //         "Гриша, бывший мажор, побывавший холопом и ставший человеком, после ",
  //       year: 1999,
  //     },
  //     {
  //       id: 689,
  //       name: "Гарри Поттер и фи...",
  //       img: "https://image.openmoviedb.com/tmdb-images/original/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
  //       rating: 7.6,
  //       shortDescr:
  //         "Гриша, бывший мажор, побывавший холопом и ставший человеком, после ",
  //       year: 2001,
  //     },
  //     {
  //       id: 5047468,
  //       name: "Холоп 2",
  //       img: "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000018dd0d4e773da22154d134398d333/orig",
  //       rating: 5.6,
  //       shortDescr:
  //         "Гриша, бывший мажор, побывавший холопом и ставший человеком, после ",
  //       year: 2023,
  //     },
  //   ],
  // }

  //   const obj = [
  //     {
  //       id: 1100777,
  //       name: "Триггер",
  //       img: "https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a0000017e08446283517541047b63d35a54/orig",
  //       rating: 7.4,
  //       shortDescr:
  //         "Гриша, бывший мажор, побывавший холопом и ставший человеком, после ",
  //       year: 2018,
  //     },
  //     {
  //       id: 435,
  //       name: "Зеленая миля",
  //       img: "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a00000169e39ef77f588ccdfe574dae8227/orig",
  //       rating: 8.6,
  //       shortDescr:
  //         "Гриша, бывший мажор, побывавший холопом и ставший человеком, после ",
  //       year: 1999,
  //     },
  //     {
  //       id: 689,
  //       name: "Гарри Поттер и фи...",
  //       img: "https://image.openmoviedb.com/tmdb-images/original/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
  //       rating: 7.6,
  //       shortDescr:
  //         "Гриша, бывший мажор, побывавший холопом и ставший человеком, после ",
  //       year: 2001,
  //     },
  //     {
  //       id: 5047468,
  //       name: "Холоп 2",
  //       img: "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000018dd0d4e773da22154d134398d333/orig",
  //       rating: 5.6,
  //       shortDescr:
  //         "Гриша, бывший мажор, побывавший холопом и ставший человеком, после ",
  //       year: 2023,
  //     },
  //   ];

  //   const searchObj = [
  //     {
  //       id: 1183582,
  //       title: "Холоп",
  //       type: "movie",
  //       year: 2019,
  //       rating: "7.0",
  //       filmLength: "Длительность фильма 109",
  //       description:
  //         "27-летний московский мажор Григорий ошалел от безнаказанности. Богатый папа стабильно его отмазывает, да так, что уже обновил автопарк и оборудование отделению полиции, где служит начальником его друг. После очередной выходки терпение отца иссякает, и он обращается к психологу, практикующему шоковые методы воздействия на пациентов.\n\nВскоре сынуля попадает в аварию и приходит в себя на деревенской конюшне. На дворе — Россия 1860 года, а сам он — бесправный конюх Гришка, которому за любую провинность и ослушание всегда готовы всыпать плетей, а то и вздёрнуть на глазах у всего честного народа.",
  //       shortDescr:
  //         "Гриша, бывший мажор, побывавший холопом и ставший человеком, после ",
  //       poster:
  //         "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a000001725b4939284cc9a54b7f2f30ef85/orig",
  //       trailer: null,
  //       similarMovies: "Sorry> we can't find similar movies or series",
  //     },
  //     {
  //       id: 5047468,
  //       title: "Холоп 2",
  //       type: "movie",
  //       year: 2023,
  //       rating: "7.0",
  //       filmLength: "Длительность фильма 119",
  //       description:
  //         "Гриша, бывший мажор, побывавший холопом и ставший человеком, после путешествия в «прошлое» чутко реагирует на любую несправедливость. И, конечно, не может пройти мимо беспредела, который творит наглая и избалованная Катя. Ничего удивительного, что вскоре мажорка обнаруживает себя в другом времени.",
  //       shortDescr:
  //         "Гриша, бывший мажор, побывавший холопом и ставший человеком, после ",
  //       poster:
  //         "https://image.openmoviedb.com/kinopoisk-ott-images/224348/2a0000018dd0d4e773da22154d134398d333/orig",
  //       trailer: null,
  //       similarMovies: "Sorry> we can't find similar movies or series",
  //     },
  //     {
  //       id: 5435024,
  //       title: "Холоп. Однажды в Мон...",
  //       type: "movie",
  //       year: 2023,
  //       rating: "6.0",
  //       filmLength: "Длительность фильма 125",
  //       description:
  //         "Дамиран — избалованный сын богатых родителей, который не знает слова «нет». Он уверен, что деньгами можно решить любую проблему, и совершенно не думает о своем будущем. Отец Дамирана устал от такого поведения сына и решает проучить парня, поэтому устраивает для него испытание. Однажды Дамиран просыпается в монгольской деревне и узнает, что перенесся назад во времени. Теперь он — бедный крестьянин, который должен трудиться на благо общества. Богачу придется изменить свои привычки и научиться смирению, чтобы не умереть с голоду.",
  //       shortDescr:
  //         "Гриша, бывший мажор, побывавший холопом и ставший человеком, после ",
  //       poster:
  //         "https://image.openmoviedb.com/kinopoisk-ott-images/2439731/2a0000018cb5cbef7af41921fa3e0cb43052/orig",
  //       trailer: null,
  //       similarMovies: "Sorry> we can't find similar movies or series",
  //     },
  //     {
  //       id: 5495322,
  //       title: "Холоп в Турции",
  //       type: "movie",
  //       year: 0,
  //       rating: "0.0",
  //       filmLength: null,
  //       description:
  //         "Мете, избалованный наследник из Стамбула, попадает в османский город XVI века.",
  //       shortDescr: "no description",
  //       poster: null,
  //       trailer: null,
  //       similarMovies: "Sorry> we can't find similar movies or series",
  //     },
  //   ];

  //запросы с api
  const getFilms = async (page) => {
    const res = await request(
      `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=12&isSeries=false`
    );
    console.log(res.docs.map(_transformFilms));
    return res.docs.map(_transformFilms);
    // console.log(obj);
    // return obj;
  };

  const getSeries = async (page) => {
    const result = await request(
      `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=4&isSeries=true`
    );
    console.log(result.docs.map(_transformSeries));
    return result.docs.map(_transformSeries);
    // return obj;
  };

  const getTopFilms = async () => {
    const result = await request(
      `https://api.kinopoisk.dev/v1.4/movie?page=35&limit=5`
    );
    console.log(result.docs.map(_transformFilms));
    return result.docs.map(_transformFilms);
    // return obj;
  };

  const getFilm = async (id) => {
    const res = await request(`https://api.kinopoisk.dev/v1.4/movie/${id}`);
    return _transformFilms(res);
    // return oneObj;
  };

  const findFilm = async (name) => {
    const res = await request(
      `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=4&query=${name}`
    );
    console.log(res);
    return res.docs.map(_transformFilms);
    // return new Promise((res) => {
    //   setTimeout(() => {
    //     res(searchObj);
    //   }, 5000);
    // });
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

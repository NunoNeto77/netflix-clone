import { useState, useEffect } from "react";
import './App.css';
import api from "./api"; 
import MovieRow from "./components/MovieRow/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie/FeaturedMovie";
import Header from "./components/Header/Header";


function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      const list = await api.getHomeList();
      setMovieList(list);

      let originals = list.filter(movie => movie.slug === "originals");
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await api.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);

    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    }
  }, []);


  return (
    <div className="page">

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://rchandru.com/images/portfolio/loading.gif"
            alt="loading"
          />
        </div>
      )}
      
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by Nuno Neto <br />
        Image rights for Netflix <br />
        Data taken from the website Themoviedb.org
      </footer>
    </div>
  );
}

export default App;

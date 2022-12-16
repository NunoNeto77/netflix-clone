import { useState, useEffect } from "react";
import './App.css';
import api from "./api"; 


function App() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await api.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className="page">
    </div>
  );
}

export default App;

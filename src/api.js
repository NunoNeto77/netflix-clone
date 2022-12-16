const API_KEY = "f5906c46931f66776502f7c49e6420eb";
const API_BASE_URL = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
    const res = await fetch(`${API_BASE_URL}${endpoint}`);
    const data = res.json();
    return data;
}

export default {
    getHomeList: async () => {
        return [
          {
            slug: "originals",
            title: "Originals from Netflix",
            items: await basicFetch(
              `/discover/tv?with_network=213&api_key=${API_KEY}`
            ),
          },

          {
            slug: "trending",
            title: "Recommended for you",
            items: await basicFetch(`/trending/all/week?api_key=${API_KEY}`),
          },

          {
            slug: "toprated",
            title: "Booming",
            items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}`),
          },

          {
            slug: "action",
            title: "Action",
            items: await basicFetch(
              `/discover/movie?with_genres=28&api_key=${API_KEY}`
            ),
          },

          {
            slug: "comedy",
            title: "Comedy",
            items: await basicFetch(
              `/discover/movie?with_genres=35&api_key=${API_KEY}`
            ),
          },
          {
            slug: "horror",
            title: "Horror",
            items: await basicFetch(
              `/discover/movie?with_genres=27&api_key=${API_KEY}`
            ),
          },

          {
            slug: "romance",
            title: "Romance",
            items: await basicFetch(
              `/discover/movie?with_genres=10749&api_key=${API_KEY}`
            ),
          },

          {
            slug: "documentary",
            title: "Documentary",
            items: await basicFetch(
              `/discover/movie?with_genres=99&api_key=${API_KEY}`
            ),
          },
        ];
    }
}
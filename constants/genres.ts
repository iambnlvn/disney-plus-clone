const API_KEY = process.env.API_KEY;

export const trending = {
  title: "Trending",
  url: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
};

export const movieGenres = [{
  title: "Action",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
}, {
  title: "Adventure",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
}, {
  title: "Animation",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
}, {
  title: "Comedy",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
}, {
  title: "Crime",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
}, {
  title: "Documentary",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}, {
  title: "Drama",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
}, {
  title: "Family",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
}, {
  title: "Fantasy",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
}, {
  title: "History",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
}, {
  title: "Horror",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
}, {
  title: "Music",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
}, {
  title: "Mystery",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
}, {
  title: "Romance",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
}, {
  title: "Sci-Fi",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
}, {
  title: "Western",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
}, {
  title: "TV Movie",
  url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
}] as const;

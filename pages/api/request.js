//typically we could store in{process.env.API_KEY}

const API_KEY = "2a6f76c8329877b082e5238d6972a281";

// const requests = {
//       fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
//       fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//         fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//         fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_geners=28`,
//         fetchComedyMovies:`/movie/top_rated?api_key=${API_KEY}&with_geners=35`,
//         fetchHorrorMovies:`/movie/top_rated?api_key=${API_KEY}&with_geners=27`,
//         fetchRomanceMovies:`/movie/top_rated?api_key=${API_KEY}&with_geners=10749`,
//         fetchDocumantaries:`/movie/top_rated?api_key=${API_KEY}&with_geners=99`,
        
// };
// export default requests;


const BASE_URL = 'https://api.themoviedb.org/3'

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
}

export default requests
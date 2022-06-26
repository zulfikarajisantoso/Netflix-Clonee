const API_KEY = "0307826c44b0a4d45b74c3d7e1d87b68";

const requests = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  netflixoriginal: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  toprated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  actionmovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedymovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrormovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romancemovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentermovie: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;

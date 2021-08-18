import axios from 'axios';

const apiKey = 'api_key=1f8a0c3ce3f6c20eddf144eb7b10963c'
const apiUrl = 'https://api.themoviedb.org/3/'
// Get Popular Movies
export const getPopularMovies = async () => {
    //const resp = await axios.get(`${apiUrl} /'movie/popular?${apiKey}`);
    const resp = await axios.get('https:api.themoviedb.org/3/movie/popular?api_key=1f8a0c3ce3f6c20eddf144eb7b10963c&language=en-US&page=1');
    return resp.data.results;
}

//Get UpComingmovies
export const getUpcomingMovies = async () => {
    //const resp = await axios.get(`${apiUrl} /'movie/popular?${apiKey}`);
    const resp = await axios.get('https:api.themoviedb.org/3/movie/upcoming?api_key=1f8a0c3ce3f6c20eddf144eb7b10963c&language=en-US&page=1');
    return resp.data.results;
}

//Get Popular TV
export const getPopularTv = async () => {
    //const resp = await axios.get(`${apiUrl} /'movie/popular?${apiKey}`);
    const resp = await axios.get('https:api.themoviedb.org/3/tv/popular?api_key=1f8a0c3ce3f6c20eddf144eb7b10963c&language=en-US&page=1');
    return resp.data.results;
}

//Get Family Movies
export const getFamilyMovies = async () => {
    //const resp = await axios.get(`${apiUrl} /'movie/popular?${apiKey}`);
    const resp = await axios.get('https:api.themoviedb.org/3/discover/movie?api_key=1f8a0c3ce3f6c20eddf144eb7b10963c&language=en-US&page=1&with_genres=10751');
    return resp.data.results;
}

//Get Popular TV
export const getHorrorMovies = async () => {
    //const resp = await axios.get(`${apiUrl} /'movie/popular?${apiKey}`);
    const resp = await axios.get('https:api.themoviedb.org/3/discover/movie?api_key=1f8a0c3ce3f6c20eddf144eb7b10963c&language=en-US&page=1&with_genres=27');
    return resp.data.results;
}
import axios from "axios";



// // const APIKEY = '8b10ee9ec2e80fb61717045f67c36d53';


// axios.get('https://api.themoviedb.org/3/search/movie/authentication', {
//   params: {
//     language: "en-US",
//     query: 
//   },
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjEwZWU5ZWMyZTgwZmI2MTcxNzA0NWY2N2MzNmQ1MyIsIm5iZiI6MTcyODE1NTMwNS42ODcxNDIsInN1YiI6IjY2ZmY5YTY3NmZjNzRlNTc1NmY3ZjgzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Aqs7zPXEzgvUC_il--d4RvQhYGDHW5J__eb9gkBUbZc'
//   },
// });

const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
    headers: {
      Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjEwZWU5ZWMyZTgwZmI2MTcxNzA0NWY2N2MzNmQ1MyIsIm5iZiI6MTcyODE1NTIzMS45NzYxNTIsInN1YiI6IjY2ZmY5YTY3NmZjNzRlNTc1NmY3ZjgzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iMSXehTvWYejye90UenCOpfrrWoWAFMU76Sso29-evI'
    }
  };

  axios.get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));
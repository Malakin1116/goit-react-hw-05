import axios from 'axios';

axios.default.baseURl = 'https://api.themoviedb.org/3/movie/movie_id';

export const fetchDetails = async () => {
    const res = await axios.get('', {
        params: {language: 'en-US'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjEwZWU5ZWMyZTgwZmI2MTcxNzA0NWY2N2MzNmQ1MyIsIm5iZiI6MTcyODE1NTMwNS42ODcxNDIsInN1YiI6IjY2ZmY5YTY3NmZjNzRlNTc1NmY3ZjgzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Aqs7zPXEzgvUC_il--d4RvQhYGDHW5J__eb9gkBUbZc'
        }
    })
    
    return res.data
  };





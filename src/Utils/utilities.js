const BASE_URL=process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN=process.env.REACT_APP_ACCESS_TOKEN;

export const getMovies=async()=>{
 try{
    const response= await fetch(`${BASE_URL}/3/movie/popular`,{
        method:`GET`,
        headers:{
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            'Content-Type':'application/json'
        }

    })
    const result=await response.json();
    return result


}
catch(error){
    return error.message;
}
}
export const searchMovies = async (query) => {
    try {
      const response = await fetch(
        `${BASE_URL}/3/search/movie?query=${query}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
          }
        }
      );
  
      const result = await response.json();
      return result;
    } catch (error) {
      return error.message;
    }
  };
  export const nowPlaying = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/3/movie/now_playing`,
        {  method:`GET`,
        headers:{
            Authorization: `Bearer ${ACCESS_TOKEN}`,
            'Content-Type':'application/json'
        }

    });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
      return [];
    }
  };
  // export const getMovieDetails = async (movieId) => {
  //   try {
  //     const response = await fetch(`${BASE_URL}/3/movie/${movieId}`, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${ACCESS_TOKEN}`,
  //         'Content-Type': 'application/json',
  //       },
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error('Error fetching movie details:', error);
  //     return null;
  //   }
  // };
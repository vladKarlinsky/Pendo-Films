import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { MovieCell } from './MovieCell';

const POPULAR_API = 'https://api.themoviedb.org/3/discover/movie?api_key=4a1e384e2c307db119f16abdbd6deeb8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
const POSTER_PATH = 'https://image.tmdb.org/t/p/original';

const fetchMovies = async (URL) => {
  const response = await fetch(URL);
  return await response.json();

}

const MainScreen = ({ route, navigation }) => {

      let URL = POPULAR_API;

      // Showing default movie list or search result movie list
      if(route.params){
        URL = route.params.URL;
      }

      const [data, setData] = useState([]); // Represents the data fetched 
      const [loading, isLoading] = useState(true); 

      useEffect(() => {
        isLoading(true);

        fetchMovies(URL)
          .then((json) => setData(json.results))
          .catch((error) => console.error(error));

        isLoading(false);
      }, [URL]);
      

      const Movie = ({ id, original_title, backdrop_path, vote_average, overview, release_date }) => (
 
        <TouchableOpacity
          key={id}
          activeOpacity={ 0.75 }
          style={styles.card}
          onPress={() => {
            navigation.navigate('Home', {
              screen: 'Movie Screen',
              params: {
              Title: original_title,
              Poster: `${POSTER_PATH}${backdrop_path}`,
              Rating: vote_average,
              Desc: overview,
              Date: release_date,
            }});
          }}
        >
      <MovieCell
       Poster={`${POSTER_PATH}${backdrop_path}`}
       Name={original_title}
       Rating={vote_average}
       />
      </TouchableOpacity>
      );


      // Rendering each Movie on the list in following format
      const renderMovie = ({ item }) => (
        <Movie
         id={item.id}
         original_title={item.original_title}
         backdrop_path={item.backdrop_path}
         vote_average={item.vote_average}
         overview={item.overview}
         release_date={item.release_date} 
         />
      );

      const RenderDisplay = () => {

        // Taking care of loading animation 
        // And then displaying list of movies

        if(loading){
          return (
            <ActivityIndicator size="large" color="#ec2059" style={{marginTop: 20}}/>
          );
        } else {
          return(
            <FlatList
              numColumns={2}
              data={data}
              renderItem={renderMovie}
              keyExtractor={(item) => item.id}
              columnWrapperStyle={{ justifyContent: 'space-around' }}
            />
          );
        }
      }

      
    return (
      <View style={styles.container}>
        <RenderDisplay />
      </View>
      )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f3f3f3'
    },
    card:{
      width: '45%',
      borderRadius: 6,
      elevation: 3,
      backgroundColor: '#2f3641',
      shadowOffset: {width: 1, height: 1},
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal: 4,
      marginVertical: 6
    }
  });
  

export { MainScreen };





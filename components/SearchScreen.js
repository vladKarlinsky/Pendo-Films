import React, { useCallback, useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';
import debounce from 'lodash/debounce';


const SearchScreen = ({ navigation }) => {

  const [query, setQuery] = useState(''); // Represents the keyword we typed 
  const [output, setOutput] = useState([]); // Represents the keyword suggestions fetched 


  const fetchSearch = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/search/keyword?api_key=4a1e384e2c307db119f16abdbd6deeb8&query=${query}&page=1`);
    return await res.json();

  };

  
  useEffect(() => {

    /*

    Whenever we type, keyword suggestions are retrieved.
    In order to implement a performance-based approach,
    Debounce by lodash & useCallback or useMemo 
    Are necessary.
 
    With more time to complete the assignment, 
    This is what I would’ve improved.

    */

    if(query != ''){
      fetchSearch()
      .then((json) => (setOutput(json.results)));
    }
  }, [query]);

  // Updating query when typing in searchbar
  const updateSearch = (input) => {
    setQuery(input);
  }

  // Keyword suggestions will render in the following format
  const renderResult = ({ item }) => (
    <TouchableOpacity
          key={item.id}
          activeOpacity={ 0.75 }
          onPress={() => {
            navigation.navigate('Home', {
              screen: 'Pendo Films',
              params: {
                URL: `https://api.themoviedb.org/3/search/movie?api_key=4a1e384e2c307db119f16abdbd6deeb8&query=${item.name}&page=1&include_adult=false`
            }});
          }}
        >
    <View>
    <Text style={styles.flatList}>
      {`${item.name}`}
    </Text>
    </View>
    </TouchableOpacity>
  );

  // Pressing the submit button on the keyboard will activate this func
  const submitSearch = () => {
    navigation.navigate('Home', {
      screen: 'Pendo Films',
      params: {
        URL: `https://api.themoviedb.org/3/search/movie?api_key=4a1e384e2c307db119f16abdbd6deeb8&query=${query}&page=1&include_adult=false`
    }});
  }

    return (
      <View>
        <SearchBar
          placeholder="Type Here.."
          onChangeText={updateSearch}
          onSubmitEditing={submitSearch}
          value={query}
        />
        <FlatList data={output}
          keyExtractor = {(item)=>item.id.toString()}
          renderItem = {renderResult}  
        /> 
      </View>
    )
}

export { SearchScreen };

const styles = StyleSheet.create({
  flatList:{
      paddingLeft: 15, 
      marginTop:15, 
      paddingBottom:15,
      fontSize: 20,
      borderBottomColor: '#ec2059',
      borderBottomWidth:1
  }
});

  


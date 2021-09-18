import React from 'react';
import { StyleSheet, Text, View , ActivityIndicator, Image } from 'react-native';
import Star from './Star';

const MovieCell = (props) => {
    return (
        <View style={styles.Container}>
        <Image
         source={{ uri: props.Poster }}
         style={styles.Image}
         PlaceholderContent={<ActivityIndicator size='large' color='#ec2059'/>} 
          />
            <View style={styles.Info}>
                <Text style={styles.Name} numberOfLines={1} >{props.Name}</Text>
                <Text style={styles.Rating} numberOfLines={1}>{props.Rating}</Text>
                <Star size={18}/>
            </View>
        </View>
    )
}

export { MovieCell };

const styles = StyleSheet.create({
    Container:{
        alignItems: 'center',
        marginVertical : 10,

    },
    Image: {
        width: '90%',
        aspectRatio: 2/3,
        borderRadius: 0,
        marginVertical : 0,
    },
    Info: {
        flexDirection: 'row',
        width: '80%',
        elevation: 3,
        backgroundColor: '#191d22',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        alignItems: 'center',
        width: '90%',
        height: 30,
        borderRadius: 0
    },
    Name: {
        flex: 4,
        color: "white",
        fontSize: 13,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        left: 10
    },
    Rating: {
        flex: 1,
        color: "white",
        fontSize: 13,
        textAlign: 'right',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        left: 7
    }
  });
  

  


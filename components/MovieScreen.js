import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import Star from './Star';


const MovieScreen = ({ route, navigation }) => {
    const { Title, Poster, Rating, Desc, Date } = route.params;


    useEffect(() => {
        navigation.setOptions({
          title: Title,
        });
      }, [Title]);

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Image 
                 source={{ uri: Poster }}
                 style={styles.Image}
                 />
            </View>
            
            <View style={styles.Stats}>
                <View style={styles.Info}>
                    <Text style={[styles.BasicText, {left: 10}]}>{Date}</Text>
                    <Text style={[styles.BasicText,{marginLeft:'auto',}]}>{Rating}</Text>
                    <Star size={25}/>
                </View>
                <View style={styles.Desc}>
                    <Text style={[styles.BasicText ,styles.Title]}>Description:</Text>
                    <ScrollView>
                    <View style={{width:'90%'}}>
                        <Text style={[styles.BasicText,styles.Par]}>{Desc}</Text>
                    </View>
                    </ScrollView>
                </View>
            </View>
            
        </View>
    )
}

export { MovieScreen };

const styles = StyleSheet.create({
    Stats:{
        flex: 1,
        backgroundColor: '#2f3641'
    },
    Desc:{
        flex: 4,
    },
    Title:{
        fontSize: 25,
        marginTop: 10,
        left: 10
    },
    Info:{
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: '#454f5f'
    },
    Image:{
        flex: 1,
        width: '100%'
    },
    Par:{
        marginTop: 10,
        marginBottom: 10,
        fontSize: 15,
        left: 10,
        fontWeight:'normal'
    },
    BasicText:{
        fontWeight: 'bold',
        color: '#f3f3f3',
        fontFamily: 'sans-serif',
        fontSize: 20
    }  
  });
  


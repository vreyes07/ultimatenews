import { Text, View, StyleSheet, ScrollView, SafeAreaView, Image, Linking, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NewsScreen (){
    const [news, setNews] = useState([]);

    //base
  
    const options = {
      method: 'GET',
      url: 'https://newsapi.org/v2/everything?q=apple&SortBy=popularity&apiKey=a1550e185eb54109810596b78a5b0b44',
    };
    
    const getNewsData = () => {
      axios.request(options)
      .then((response) => {
        setNews(response.data.articles)
        //console.log(response.data.articles);
      })
      .catch(function (error) {
        console.error(error);
      });
    }
  
    useEffect(() => {
      getNewsData()
    }, []);

    return (
      <SafeAreaView style={styles.container}>    
      <ScrollView style={ styles.scrollview }>
        {news.map((news, index) => {
            return (
            <View style={[styles.news, {marginVertical:5}]} key={index}>
                <Image style={ [styles.image, {width: '100%', height: 200}] } source={{uri:news.urlToImage}}></Image>
                <Text style={ styles.tittle } >{news.title}</Text>
                <Text style={ styles.fuente }>{news.author}</Text>
                <Text style={ styles.content }>{news.description} </Text>
            </View>
         )
        })}
      </ScrollView>
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
    },
    content: {
        margin: 5,
        paddingBottom: 10,

    },
    fuente: {
        margin: 5,
        paddingBottom: 5,

    }
    ,
    news: {
        borderStyle: 'solid',
        borderWidth: 0.2,
        borderColor: 'gray',
        //width: '%',
        borderRadius: 10,
        alignItems: 'flex-start',
    },
    scrollview: {
        marginVertical: 50,
        padding: 5,
        //width: '100%'
    },
    image: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    tittle: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 25,
        marginLeft: 5,
        paddingBottom: 5,
    }
})
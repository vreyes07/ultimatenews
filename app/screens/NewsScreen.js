import { Text, View, StyleSheet, ScrollView, SafeAreaView, Image, Linking } from 'react-native'
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
        console.log(response.data.articles);
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
        {news.map((news) => {
            return (
            <View style={styles.news}>
                <Image style={ [styles.image, {width: '100%', height: 200}] } source={{uri:news.urlToImage}}></Image>
                <Text style={ styles.tittle } >{news.title}</Text>
                <Text style={ styles.fuente }>{news.author}</Text>
                <Text style={ styles.content }>{news.content} </Text>
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
        //alignItems: 'center',
        //justifyContent: 'flex-start',
        marginTop: '20%',
    },
    content: {
        margin: 5,
    },
    fuente: {
        margin: 5,
        color: 'gray'
    }
    ,
    news: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'gray',
        width: '95%',
        borderRadius: 10,
        paddingBottom: 5,
        alignItems: 'flex-start',
    },
    scrollview: {
        //alignItems: 'center',
    },
    image: {
        //width: '100%',
        //height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    tittle: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 25,
        //position: 'absolute',
        marginLeft: 5
    }
})
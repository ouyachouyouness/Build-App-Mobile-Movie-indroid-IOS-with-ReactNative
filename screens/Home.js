import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { getPopularMovies, getUpcomingMovies, getPopularTv, getFamilyMovies } from '../services/services'
import  List from '../components/List'
import { SliderBox } from "react-native-image-slider-box"


const dimentions = Dimensions.get('screen');
const Home = () => {

    const [moviesImages, setMoviesImages] = useState('');
    const [popularMovies, setPopularMovies] = useState('');
    const [familyMovies, setFamilyMovies] = useState('');
    const [popularTv, setPopularTv] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {

        getUpcomingMovies()
            .then(movies => {
                const moviesImagesArray = [];
                movies.forEach(movie => {
                    moviesImagesArray.push('https://image.tmdb.org/t/p/w500' + movie.poster_path)

                })
                setMoviesImages(moviesImagesArray);
            }).catch(err => {
                setError(err);
            });

        getPopularMovies()
            .then(movies => {
                setPopularMovies(movies)
            }).catch(err => {
                setError(err);
            });

        getPopularTv()
            .then(movies => {
                setPopularTv(movies)
            }).catch(err => {
                setError(err);
            });

        getFamilyMovies()
            .then(movies => {
                setFamilyMovies(movies)
            }).catch(err => {
                setError(err);
            });
    }, [])
    return (

    <React.Fragment>
        <ScrollView>
        <View
            style={
                styles.sliderContainer
            }>
            <SliderBox images={moviesImages}
                circleLoop={true}
                autoplay={true}
                dotStyle={styles.sliderStyle}
                sliderBoxHeight={dimentions.height/1.5}
            />
        </View>

        

        <View style= { styles.carousel}>
            <List title={'Popular Movies'} content= {popularMovies}></List>
        </View>

        <View style= { styles.carousel}>
            <List title={'Popular Tv'} content= {popularTv} />
        </View>

        <View style= { styles.carousel}>
            <List title={'Family Movies'} content= {familyMovies} />
        </View>
        
        </ScrollView>
    </React.Fragment>
    );
}

const styles = StyleSheet.create({
    sliderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    sliderStyle : {
        height:0
    },
    carousel: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    }
})

export default Home;
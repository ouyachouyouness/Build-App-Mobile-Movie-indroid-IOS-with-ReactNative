import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { getPopularMovies, getUpcomingMovies } from '../services/services'

import { SliderBox } from "react-native-image-slider-box"

const Home = () => {

    const

    const [moviesImages, setMoviesImages] = useState('');
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
                //setMovie(movies[0]);
            }).catch(err => {
                setError(err);
            });
    }, [])
    return (
        <View
            style={
                styles.sliderContainer
            }>
            <SliderBox images={moviesImages}
                circleLoop={true}
                autoplay={true}
                sliderBoxHeight={600}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    sliderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    }
})

export default Home;
import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Dimensions, ScrollView, ActivityIndicator  } from 'react-native';
import { getPopularMovies, getUpcomingMovies, getPopularTv, getFamilyMovies, getHorrorMovies } from '../services/services'
import  List from '../components/List'
import { SliderBox } from "react-native-image-slider-box"


const dimentions = Dimensions.get('screen');
const Home = () => {

    const [moviesImages, setMoviesImages] = useState('');
    const [popularMovies, setPopularMovies] = useState();
    const [familyMovies, setFamilyMovies] = useState();
    const [horrorMovies, setHorrorMovies] = useState();
    const [popularTv, setPopularTv] = useState();
    
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);
    

    const getData = () => {
        return Promise.all([
            getUpcomingMovies(),
            getPopularMovies(),
            getPopularTv(),
            getFamilyMovies(),
            getHorrorMovies()


        ])
    }
    useEffect(() => {

        getData().then(([UpcomingMoviesData,
            PopularMoviesData,
            PopularTvData,
            FamilyMoviesData,
            HorrorMoviesData]) => {
                const moviesImagesArray = [];
                UpcomingMoviesData.forEach(movie => {
                     moviesImagesArray.push('https://image.tmdb.org/t/p/w500' + movie.poster_path)

                })
                setMoviesImages(moviesImagesArray);
                setPopularMovies(PopularMoviesData)
                setPopularTv(PopularTvData)
                setFamilyMovies(FamilyMoviesData)
                setHorrorMovies(HorrorMoviesData)
                

            }).catch(err => {
                setError(err)
            }).finally(()=> {
                setLoaded(true)
            })
    
    }, [])
    return (

    <React.Fragment>
        {loaded && (<ScrollView>
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

        {/* popularMovies */}
        {popularMovies && 
        (<View style= { styles.carousel}>
            <List title={'Popular Movies'} content= {popularMovies}></List>
        </View>)}
        
        {/* popularTv */}
        {popularTv && 
        (<View style= { styles.carousel}>
            <List title={'Popular Tv Shows'} content= {popularTv} />
        </View>)}
        
        {/* familyMovies */}
        {familyMovies && 
        (<View style= { styles.carousel}>
            <List title={'Family Movies'} content= {familyMovies} />
        </View>)}
        
        {/* horrorMovies */}
        {horrorMovies && 
        (<View style= { styles.carousel}>
            <List title={'Horror Movies'} content= {horrorMovies} />
        </View>)}
        
        
        </ScrollView>)}
        {!loaded && <ActivityIndicator size="large" /> }
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
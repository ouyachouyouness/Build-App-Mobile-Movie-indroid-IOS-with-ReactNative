import React, {useState, useEffect} from 'react'
import { ScrollView, StyleSheet, Image} from 'react-native'
import {getMovie} from '../services/services'

const placeholderImage = require('../assets/images/yy.jpg')

const Detail = (route, navigation) => {
    const movieId = route.params.movieDetail.id

    const [movieDetail, setMovieDetail] = useState();
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        getMovie(movieId).then(movieData => {
            setMovieDetail(movieData);
            setLoaded(true)
        })
        
    }, [movieId])
    return (
        <React.Fragment>
            {loaded && (<ScrollView >
                <Image
                    resizeMode = "cover"
                    style = {styles.image} 
                    source = {
                        movieDetail.poster_path ? 
                        {uri: 'https://image.tmdb.org/t/p/w500'+ movieDetail .poster_path}
                        : placeholderImage
                    }/>
            </ScrollView>)}
        </React.Fragment>
    );
}

const styles =StyleSheet.create({

    image: {
        height:200,
        width: 120,
        borderRadius: 20 
    },
    

}) 

export default Detail;
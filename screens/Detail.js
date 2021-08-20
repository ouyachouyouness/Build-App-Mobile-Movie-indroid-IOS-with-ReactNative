
import React, {useState, useEffect} from 'react'
import {  Modal,
    View,
    Text,
     ScrollView,
     StyleSheet,
     Image,
     Dimensions,
     ActivityIndicator,
     Pressable  
} from 'react-native'
import StarRating from 'react-native-star-rating'
import PlayButton from '../components/PlayButton'
import {getMovie} from '../services/services'
import VideoPlayer from 'react-native-video-controls';
import Vedio from '../components/Vedio'




const placeholderImage = require('../assets/images/yy.jpg')
const height = Dimensions.get('screen').height
const Detail = ({route, navigation}) => {
    const movieId = route.params.movieId 

    const [movieDetail, setMovieDetail] = useState();
    const [loaded, setLoaded] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);



    useEffect(() => {
        getMovie(movieId).then(movieData => {
            setMovieDetail(movieData);
            setLoaded(true)
        })
        
    }, [movieId])

    const videoShown = () => {
        setModalVisible(!modalVisible)
    }
    return (
        <React.Fragment>
         
            {loaded && (
            <View>  
            <ScrollView>
                <Image
                    resizeMode = "cover"
                    style = {styles.image} 
                    source = {
                        movieDetail.poster_path ? 
                        {uri: 'https://image.tmdb.org/t/p/w500'+ movieDetail .poster_path}
                        : placeholderImage
                    }/>
            <View style={styles.container} >
                <View style={styles.PlayButton}>
                    <PlayButton handlePress ={videoShown}/>
                </View>
                <Text style={styles.movieTitle}>{movieDetail.title}</Text>
                {movieDetail.genres && (<View style={styles.genrescontainer}>
                    {movieDetail.genres.map(genre => {
                            return (<Text style={styles.genre} key={genre.id}>
                                {genre.name}</Text>)
                    })}
                
                </View>)}

                <StarRating 
                 disabled={true}
                 maxStars={5}
                 starSize={30}
                 rating={movieDetail.vote_average/2}
                 fullStarColor={'gold'}
                 />

                <Text style={styles.overview}>{movieDetail.overview}</Text>
                <Text style={styles.release}>{'Release date : '+ movieDetail.release_date}</Text>
               
            </View>
            </ScrollView>
            <Modal animationType="slide" visible={modalVisible}>
                   
                   <View style={styles.videoModal}>
                   <Text>{'fdjifkdsj'}</Text>
                    <Vedio onClose={videoShown} />
                   
 
                   </View>
            </Modal>
            </View>
            
            )}

            {!loaded && <ActivityIndicator size="large" /> }

        </React.Fragment>
    );
}

const styles =StyleSheet.create({

    image: {
        height:height/2.5,
      
    },
    movieTitle: {
        fontSize:24,
        fontWeight: 'bold',
        marginTop:10,
        marginBottom:10,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    genrescontainer: {
        flexDirection: 'row',
        alignContent:'center',
        marginTop :20,
        marginBottom:20,
    },
    genre:{
        marginRight: 10,
        fontWeight:'bold'
    },
    overview:{
        padding:15,

    },
    release:{
        fontWeight: 'bold'
    },
    PlayButton:{
        position: 'absolute',
        top: -45,
        right: 20,
    },
    videoModal:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    }

}) 

export default Detail;
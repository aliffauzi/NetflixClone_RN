import * as React from 'react';
import { Text, View, Image, Pressable } from "react-native";
import movie from '../../assets/data/movie';
import styles from './styles'
import { MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';


const firstEpsiode = movie.seasons.items[0].episodes.items[0]

const MovieDetailScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle}
                source={{ uri: firstEpsiode.poster }}
            />
            <View style={{ padding: 10 }}>
                <Text style={styles.title}>{movie.title}</Text>
                <View style={styles.container2}>
                    <Text style={styles.match}>67% match</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                    <View style={styles.ageContainer}>
                        <Text style={styles.agetextStyle}>23+</Text>

                    </View>
                    <Text style={styles.numberOfSeasionsStyle}>{movie.numberOfSeasons} Seasons</Text>
                    <MaterialIcons name="hd" size={24} color="white" />
                </View>

                {/* play button */}

                <Pressable onPress={() => {
                    console.log('Play')
                }} style={styles.playButton}>
                    <Text style={styles.playButtonText}>
                        <Entypo name="controller-play" size={17} color="black" />{" "}
                        Play
                    </Text>
                </Pressable>
                {/* download button */}

                <Pressable onPress={() => {
                    console.log('download')
                }} style={styles.downloadButton}>
                    <Text style={styles.downloadButtonText}>
                        <AntDesign name="download" size={17} color="white" style={{}} />{"  "}
                        Download
                    </Text>
                </Pressable>
                <Text style={styles.plot}>{movie.plot}</Text>
                <Text style={styles.cast}>Cast: {movie.cast}</Text>
                <Text style={styles.creator}>Creator: {movie.creator}</Text>

                {/* row with icon buttons */}
                <View style={styles.iconButton}>
                    <View style={styles.plus}>
                        <AntDesign name="plus" size={24} color="white" />
                        <Text style={styles.plusText}>My List</Text>

                    </View>
                    <View  style={styles.plus}>
                        <AntDesign name="like2" size={24} color="white" />
                        <Text style={styles.plusText}>Rate</Text>
                    </View>
                    <View  style={styles.plus}>
                        <Entypo name="share" size={24} color="white" />
                        <Text style={styles.plusText}>Share</Text>
                    </View>

                </View>

            </View>

        </View>

    )

};
export default MovieDetailScreen;

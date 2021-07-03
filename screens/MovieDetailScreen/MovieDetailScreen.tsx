import * as React from 'react';
import { Text, View, Image } from "react-native";
import movie from '../../assets/data/movie';
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons';


const firstEpsiode = movie.seasons.items[0].episodes.items[0]

const MovieDetailScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle}
                source={{ uri: firstEpsiode.poster }}
            />
            <View style={{padding:10}}>
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
            </View>

        </View>

    )

};
export default MovieDetailScreen;

import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View,Image, Pressable } from 'react-native';
import { Episode } from '../../types';
import styles from './styles';

interface EpisodeItemProps{
    episode:Episode,
    onPress:(episode:Episode)=>{}
}
   

const EpisodeItem = (props:EpisodeItemProps) => {
    const {episode,onPress} =props;
    return (
        <Pressable style={{margin:10}} onPress={()=>onPress(episode)} >
           <View style={styles.row}>
               <Image
               style={styles.episodeImage1}
               source={{uri:episode.poster}}
                
               />
               <View style={styles.titleContainer}>
                   <Text style={styles.title}>{episode.title}</Text>
                   <Text style={styles.duration}>{episode.duration}</Text>
               </View>
               <AntDesign name="download" size={24} color={'white'}/>

           </View>
           <Text style={{color:"darkgrey"}}>{episode.plot}</Text>
        </Pressable>
    )
}

export default EpisodeItem;



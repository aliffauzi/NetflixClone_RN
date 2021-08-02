import * as React from 'react';
import { StyleSheet, Image, FlatList, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import movie from '../../assets/data/movie';
import { Text } from '../../components/Themed';
import styles from './styles';

interface HomeCategoryProps {
    category: {
        id: String,
        title: string,
        movies: {
            id: string,
            poster: string,
        }[]
    }

}

const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props;
    const navigation = useNavigation();
    const onMoviePress =(movie)=>{
        navigation.navigate('MovieDetailScreen',{id:movie.id})
      
    }
    return (
        <>
            <Text style={styles.headText}>{category.title}</Text>

            <FlatList
                data={category.movies}
                renderItem={({ item }) => (
                    <Pressable onPress={()=>onMoviePress(item)}>
                        <Image style={styles.imageStyle} source={{ uri: item.poster }} />

                    </Pressable>
                    
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

        </>
    );
}

export default HomeCategory;
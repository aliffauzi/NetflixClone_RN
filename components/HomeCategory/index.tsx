import * as React from 'react';
import { StyleSheet, Image, FlatList } from 'react-native';
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
    return (
        <>
            <Text style={styles.headText}>{category.title}</Text>

            <FlatList
                data={category.movies}
                renderItem={({ item }) => (
                    <Image style={styles.imageStyle} source={{ uri: item.poster }} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

        </>
    );
}

export default HomeCategory;
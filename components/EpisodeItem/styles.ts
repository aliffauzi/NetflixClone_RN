import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:10,
        marginTop:10

    },
    episodeImage1:{
        height: 75,
        aspectRatio:16/9,
        resizeMode:'cover',
        borderRadius:5

    },
    title:{
        color: "white"

    },
    duration:{
        color: "darkgrey",
        fontSize:10

    },
    titleContainer:{
        flex: 1,
        padding: 10,
        justifyContent:"center"
    }
})

export default styles;

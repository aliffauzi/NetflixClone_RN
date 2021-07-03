import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
       // flex: 1,

       // padding: 20,
       

    },
    container2:{
        flexDirection:'row'

    },
    imageStyle: {
        width: '100%',
        aspectRatio:16/9,
        resizeMode:'cover',
        margin: 5
    },
    match:{
        color: '#00aa00',
        fontWeight:'bold',
        marginRight:20

    },
    
    title:{
        color: 'white',
        fontSize:20,
        fontWeight:'bold'

    },
    year:{
        color: '#757575',
        marginRight:8

    },ageContainer:{
        backgroundColor:'#e6e229',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:3,
        paddingHorizontal:3,
        marginRight:10
        

    },
    agetextStyle:{
        color: 'black',
        fontWeight:'bold',
        fontSize:14,
        marginRight:0

    },
    numberOfSeasionsStyle:{
        color: '#757575',
        marginRight:10

    }


});
export default styles;
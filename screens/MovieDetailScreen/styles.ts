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

    },
    playButton:{
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        padding: 5,
        borderRadius:5,  
        marginVertical:5,
        
    },
    playButtonText:{
        color: "black",
        fontSize:16,
        fontWeight:"bold"

    },
    downloadButton:{
        backgroundColor:"#2b2b2b",
        justifyContent:'center',
        alignItems:'center',
        padding: 5,
        borderRadius:5,
        marginVertical:5

    },
    downloadButtonText:{
        color: "white",
        fontWeight:"bold",
        fontSize:16

    },
    plot:{

        color: "white",
        marginVertical:10
    },
    cast:{
        color: "#b5a8a7"

    },
    creator:{
        
        color: "#b5a8a7"

    },
    iconButton:{
        flexDirection:"row",
        marginTop:20,
    },
    plus:{
        alignItems:'center',
        marginHorizontal:20,
      

    },
    plusText:{
        color: "darkgrey",
        marginTop:3

    }


});
export default styles;
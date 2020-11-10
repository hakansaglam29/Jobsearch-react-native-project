import {StyleSheet, Dimensions} from 'react-native';

export const Topicstyle = StyleSheet.create({
    container:{
        padding:12,
        margin:7,
        borderRadius:6,
        height: Dimensions.get('window').height /16,
        width: Dimensions.get('window').width /3,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontWeight:'bold',
        fontSize:18,
        color: 'white',
        textAlign:'center',
    }
});

export const Introstyle = StyleSheet.create({
    // container:{
    //     padding:12,
    //     margin:7,
    //     borderRadius:6,
    // },
    text:{
        fontWeight:'bold',
        fontSize:18,
        textAlign: 'center',
        margin:10,
        padding:10,
    }
});

export const jobItemstyle = StyleSheet.create({
        container:{
        padding:5,
        margin:15,
        borderRadius:20,
        backgroundColor: 'lightgray',
        borderWidth:0.3,
    },
    text:{
        fontWeight:'bold',
        fontSize:18,
        textAlign: 'center',
        margin:3,
        padding:5,
    }
});
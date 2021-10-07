import React from 'react';
import { View ,StyleSheet, TextInput } from 'react-native';

function AppForm(props) {
    return (
        <View style={styles.container}>
          <TextInput style={styles.textInput} placeholder="User Name" />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'lightgray',
        borderRadius:25,
        flexDirection:'row',
        width:'100%',
        padding:15,
        marginVertical:10

    },
    textInput:{
        fontSize:18,
        fontFamily:"Avenir",
        
    },

})
export default AppForm;
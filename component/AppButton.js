import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function AppButton({title , onPress , color}) {
    return (
      <TouchableOpacity style={[styles.button ,{backgroundColor:color}]} onPress={onPress}> 
          <Text style={styles.text}>{title}</Text>
      </TouchableOpacity> 
    );
}
const styles = StyleSheet.create({
   button:{
       backgroundColor:'blue',
       width:'100%',
       borderRadius:25,
       justifyContent:'center',
       alignItems:'center',
       padding:15,
       marginBottom:20,
       borderColor:"white",
       borderWidth:1

       
   } ,
   text:{
       color:'white',
       fontSize:18,
       textTransform:'uppercase',
       fontWeight:'bold'
   }
})
export default AppButton;
import React from 'react';
import { Text, TouchableOpacity, View , StyleSheet } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import Screen from '../screens/Screen';

function ListActivity({Username, onPress}) {
    return (
        <Screen>
          <Swipeable>
            <TouchableOpacity onPress = {onPress}>
              <View style={styles.item}>
                <Text style={styles.Username}>{Username}</Text>
              </View>
            </TouchableOpacity>
          </Swipeable>
          </Screen>
    );
}
const styles = StyleSheet.create({
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    Username: {
      fontSize: 32,
    },
  });
  

export default ListActivity;

import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { Image, Center, NativeBaseProvider } from "native-base";
import Screen from "./Screen";


function ActivityDetailScreen({ route }) {
  const detail = route.params;

console.log(detail.image)

  return (
    <NativeBaseProvider>
      <Screen>
        <Swipeable>
          <View>
            <View style={styles.each}>
              <Text style={styles.title}>User Name :</Text>

              <Text style={styles.text}>{detail.userName}</Text>
            </View>
            <View style={styles.each}>
              <Text style={styles.title}>Message:</Text>
              <Text style={styles.text}>{detail.message}</Text>
            </View>
            <Image
              source={{
                uri: `${detail.image}`,
              }}
              
              size="xl"
            />
          </View>
        </Swipeable>
      </Screen>
    </NativeBaseProvider>
  );
}

export default ActivityDetailScreen;
const styles = StyleSheet.create({
  each: {
    marginTop: 10,
    flexDirection: "row",
    width: "80%",
    padding: 10,
  },
  text: {
    fontSize: 20,

    fontWeight: "bold",
    color: "black",
    marginTop: 10,
    marginLeft: 20,
  },
  title: {
    fontSize: 30,

    fontWeight: "bold",
    color: "green",
  },
});

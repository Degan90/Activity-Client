import { MaterialCommunityIcons } from "@expo/vector-icons";

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import Swipeout from "react-native-swipeout";

import Screen from "./Screen";
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

function HomeScreen({ navigation: { navigate } }) {
  const [activities, setActivities] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getActivity = async () => {
    try {
      const response = await fetch("https://taj-api.herokuapp.com/activities");
      const data = await response.json();
      console.log(data);
      setActivities(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getActivity();
  }, []);
  const onRefresh = React.useCallback(() => {
    getActivity();
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
  }, []);

  const handleDelete = async (activity) => {
    try {
      const response = await fetch(
        `https://taj-api.herokuapp.com/activities/${activity._id}`,
        {
          method: "DELETE",
          body: JSON.stringify(activities),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setActivities(activities.filter((m) => m._id !== activity._id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <FlatList
            data={activities}
            keyExtractor={(active) => active.id}
            renderItem={({ item }) => (
              <Swipeable>
                <Swipeout autoClose="true">
                  <TouchableOpacity
                    onPress={() => navigate("ActivityDetailScreen", item)}
                  >
                    <View style={styles.item}>
                      <View style={styles.text}>
                        <Text style={styles.Username}>{item.userName}</Text>
                      </View>
                      <View style={styles.delete}>
                        <TouchableHighlight onPress={() => handleDelete(item)}>
                          <MaterialCommunityIcons
                            name="trash-can"
                            size={35}
                            color="#F95A4F"
                          />
                        </TouchableHighlight>
                      </View>
                      <View>
                        <TouchableHighlight
                          onPress={() => navigate("EditScreen", item)}
                        >
                          <MaterialCommunityIcons
                            name="file-edit-outline"
                            size={35}
                            color="#5F92F9"
                          />
                        </TouchableHighlight>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Swipeout>
              </Swipeable>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    </Screen>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#5B7504",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  Username: {
    fontSize: 32,
    color: "white",
  },
  delete: {
    marginLeft: 40,
  },
  text: {
    width: "70%",
  },
});

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Screen from "./Screen";
import { Formik } from "formik";
import ImageInputList from "../component/ImageInputList";




function NewActivityScreen({ navigation: { navigate } } ) {
  const initialFormValues = {
    userName: "",
    message: "",
    image: "",
  };
  const [formData, setFormData] = useState(initialFormValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://taj-api.herokuapp.com/activities", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

   
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <Screen>
      <Text style={styles.text}>Add New Activity</Text>
      <Formik
        initialValues={{
          userName: "",
          message: "",
          image: null,
        }}
        onSubmit={handleSubmit}
      >
        <View style={styles.all}>
          <View style={styles.container}>
            <TextInput
              style={styles.textInput}
              placeholder="User Name *"
              onChangeText={(text) =>
                setFormData({ ...formData, userName: text })
              }
            />
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.textInput}
              placeholder="Message *"
              multiline
              numberOfLines={4}
              onChangeText={(text) =>
                setFormData({ ...formData, message: text })
              }
            />
          </View>
          <ImageInputList />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.textButton}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Formik>
    </Screen>
  );
}
export default NewActivityScreen;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "green",
    fontSize: 35,
    marginTop: 30,
  },
  container: {
    backgroundColor: "lightgray",
    borderRadius: 25,
    flexDirection: "row",
    width: "80%",
    padding: 15,
    marginVertical: 10,
    marginLeft: 40,
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Avenir",
  },

  all: {
    marginTop: 90,
  },
  button: {
    backgroundColor: "#9C9821",
    width: "90%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginBottom: 20,
    borderColor: "white",
    borderWidth: 1,
    marginLeft: 20,
  },
  textButton: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  image: {
    marginLeft: 50,
  },
});

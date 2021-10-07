import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Text ,StyleSheet, View, TextInput} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Screen from "./Screen";

function EditScreen({ route , getActivity}) {
  const detail = route.params;
  const API_ENDPOINT = `https://taj-api.herokuapp.com/activities/${route.params._id}`;
  const [values, setValues] = useState({
    userName: "",
    message: "",
    image: "",
  });



  const getDetail = async () => {
    try {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      setValues({ title: data.userName, message: data.message });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  const _updateActivity = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_ENDPOINT, {
        method: "PATCH",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        getActivity();
        
    } 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Screen>
      <Text style={styles.text}>Edit</Text>
      <Formik
        initialValues={{
          userName: "",
          message: "",
          image: null,
        }}
        onSubmit={_updateActivity}
      >
        <View style={styles.all}>
          <View style={styles.container}>
            <TextInput
              style={styles.textInput}
              placeholder={detail.userName}
              onChangeText={(text) =>
                setValues({ ...values, userName: text })
              }
            />
          </View>
          <View style={styles.container}>
            <TextInput
              style={styles.textInput}
              placeholder={detail.message}
              multiline
              numberOfLines={4}
              onChangeText={(text) =>
                setValues({ ...values, message: text })
              }
            />
          </View>
          
          <TouchableOpacity style={styles.button} onPress={_updateActivity}>
            <Text style={styles.textButton}>Submit</Text>
          </TouchableOpacity>
        </View>
      </Formik>
    </Screen>
  );
}

export default EditScreen;

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
  
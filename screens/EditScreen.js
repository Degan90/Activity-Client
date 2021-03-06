
import React from "react";
import {StyleSheet, View} from "react-native";

import {
  VStack,
  Button,
  FormControl,
  Input,
  NativeBaseProvider,
  Center
} from 'native-base';
import ImageInputList from "../component/ImageInputList";

function EditScreen({ route , navigation: { navigate } }) {
  const detail = route.params;
  console.log(detail)
  const initialFormValues = {
    userName: undefined,
    message: undefined,
    image: "",
  };
  const API_ENDPOINT = `https://taj-api.herokuapp.com/activities/${detail._id}`;
 
const [errors, setErrors] = React.useState({});
const [formData, setData] = React.useState(initialFormValues);
const validate = () => {
  if (formData.userName === undefined ) {
    setErrors({
      ...errors,
      userName: 'Name is required',
      
    });
    return false;
  } else if (formData.message === undefined) {
    setErrors({
      ...errors,
      message: 'Message is required',
      
    });
    return false;
  }
  return true;
};


  const updateActivity = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_ENDPOINT, {
        method: "PATCH",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData({ userName: formData.userName, message: formData.message , image:formData.image });
      validate() ? navigate("Home") : console.log('Validation Failed');

    } catch (err) {
      console.log(err);
    }
  };

  return (
    
    <NativeBaseProvider>
    <VStack width="90%" mx="3">
      <View style={styles.input}>
      <FormControl isRequired isInvalid={'userName' in errors}>
        <FormControl.Label _text={{bold: true}}> User Name</FormControl.Label>
        <Input
          placeholder={detail.userName}
          onChangeText={(value) => setData({ ...formData, userName: value })}
        />
        {'userName' in errors ?
        <FormControl.ErrorMessage _text={{fontSize: 'xs', color: 'error.500', fontWeight: 500}}>Error</FormControl.ErrorMessage>
:

        <FormControl.HelperText _text={{fontSize: 'xs'}}>
          User Name is require.
        </FormControl.HelperText>
        }
      </FormControl>
      </View>
      <View style={styles.input}>
      <FormControl isRequired isInvalid={'message' in errors}>
        <FormControl.Label _text={{bold: true}}>Message</FormControl.Label>
        <Input
          placeholder={detail.message}
          onChangeText={(value) => setData({ ...formData, message: value })}
          
        />
        {'message' in errors ?
        <FormControl.ErrorMessage _text={{fontSize: 'xs', color: 'error.500', fontWeight: 500}}>Error</FormControl.ErrorMessage>
:

        <FormControl.HelperText _text={{fontSize: 'xs'}}>
         Message is require.
        </FormControl.HelperText>
        }
      </FormControl>
      </View>
      <ImageInputList  setFormData = {setData} formData={formData} />
    
    <Button onPress={updateActivity} mt="5" colorScheme="cyan">
      Submit
    </Button>
    </VStack>
    
    </NativeBaseProvider>
    
  );
}

export default EditScreen;

const styles = StyleSheet.create({
  
    input:{
      marginTop:30
    }
  });
  


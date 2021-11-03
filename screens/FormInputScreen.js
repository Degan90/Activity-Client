import React from 'react';
import {
  VStack,
  Button,
  FormControl,
  Input,
  NativeBaseProvider,

} from 'native-base';

import { View ,StyleSheet} from 'react-native';
import ImageInputList from '../component/ImageInputList';



export default function FormInputScreen( { navigation: { navigate } }) {
  const initialFormValues = {
    userName: undefined,
    message: undefined,
    image: "",
  };
  const [formData, setData] = React.useState(initialFormValues);
  const [errors, setErrors] = React.useState({});

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



  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://taj-api.herokuapp.com/activities", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
    
      validate() ?  navigate("Home") : console.log('Validation Failed');
   
    } catch (error) {
        console.log(error)
    }
  };

// console.log(formData)
  return (
    <NativeBaseProvider>
    <VStack width="90%" mx="3">
      <View style={styles.input}>
      <FormControl isRequired isInvalid={'userName' in errors}>
        <FormControl.Label _text={{bold: true}}> User Name</FormControl.Label>
        <Input
          placeholder="User Name"
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
          placeholder="Message"
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
    <Button onPress={onSubmit} mt="5" colorScheme="cyan">
      Submit
    </Button>
    </VStack>
    
    </NativeBaseProvider>
    
  );
}

const styles = StyleSheet.create({
  input:{
    marginTop:30
  }
})
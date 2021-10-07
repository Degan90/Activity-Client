import { useFormikContext } from "formik";
import React, { useRef, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ name, formData, setFormData }) {
  const [imageUris, setImageUris] = useState([]);
  const scrollView = useRef();
  console.log(imageUris);

  const handleAdd = (uri) => {
    console.log(uri)
    setImageUris([...imageUris, uri]);
    setFormData({ ...formData, image: imageUris });
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => handleRemove(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => handleAdd(uri)} />
        </View>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;

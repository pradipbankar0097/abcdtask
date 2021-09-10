import { StyleSheet, Button, TextInput, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const allItems = [
  "Milk",
  "Coffee",
  "Oranges",
  "Bread",
];


export default function App() {

  const [searchTerm, setSearchTerm] = React.useState("");

  const results = !searchTerm
    ? allItems
    : allItems.filter(item =>
        item.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <View>
    <View style={styles.container}>
      <TextInput
        style={{height: 40,}}
        placeholder="Type here to translate!"
        onChangeText={searchTerm=>setSearchTerm(searchTerm)}
        defaultValue={searchTerm}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={()=>{allItems.push(searchTerm),setSearchTerm('')}}
      >
        <Text>+</Text>
      </TouchableOpacity>
      
    </View>
    <Text style={{padding: 10, fontSize: 42}}>
    {results.map(item => (
        <View style={{
          display:'flex',
          flexDirection:'column',
          padding:10,
          backgroundColor:'rgb('
        }}>
          <Text>{item}</Text>
        </View>
        ))}
  </Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display:'flex',
    flexDirection: 'row',
  },
  button: {
    backgroundColor:'blue',
    padding: 15,
    borderRadius:7,
  }
});

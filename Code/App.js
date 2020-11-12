import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#790973', '#ff008f']} style={{flex:1}}>
    <View style={styles.container}>
    
    <StatusBar style="auto" />

    <Text style={styles.baseText}> MusicME </Text>
   
      <Image source={{uri: 'https://i.pinimg.com/originals/ec/2f/53/ec2f53237973f53d2d81adba3b4d74d6.png'}}
        style={{width: 200, height: 200, alignSelf: "center"}} />
        
        <TextInput  style={{ height: 40, width: 200, borderRadius: 30, textAlign: 'center', borderColor: 'gray', borderWidth: 1 }}
              placeholder="Enter your email address"       
              placeholderTextColor={'#fff'}
              multiline={true}
              autoCapitalize="sentences"
              underlineColorAndroid="transparent"
              selectionColor={'white'}
              maxLength={30}
              returnKeyType="done"
              autoCorrect={false}
              blurOnSubmit={true}
      /> 

      <Button
        title="Send"
        color="orange"
        onPress={() => alert('Thank you! Check your email')}
      />
      
    </View>
    </LinearGradient>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },

  baseText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white', 
  }
  
});

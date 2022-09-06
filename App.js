import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import DatePicker from '@react-native-community/datetimepicker';

export default function App() {

  const [show, setShow] =  useState(false);  
  const [date, setDate] = useState(new Date());

  //Function fow showing alert
  const showAlert = () =>{
  }

  //Function for setting new date (onChange). 
  //You can check the date and initate the alert here also
  const setSelectedDate = (e, myDate)=>{
  };

  //You need DatePicker, button and textfield
  return (
    <View style={styles.container}>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

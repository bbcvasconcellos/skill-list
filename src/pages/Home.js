import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native'

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  const handleNewSkill = () => {
    setMySkills(prevState => [...prevState, newSkill]);
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container} >
        <Text style={styles.title}>Welcome</Text>
        <TextInput 
          style={styles.input}
          placeholder='New Skill'
          placeholderTextColor='#555'
          onChangeText={setNewSkill}
        />
        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.6}
          onPress={handleNewSkill}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { marginVertical: 50 }]}>
          My Skills
        </Text>
        {
          mySkills.map((skill, index) => (
            <TouchableOpacity style={styles.buttonSkill} key={index}> 
              <Text style={styles.textSkill}>
                {skill}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
    </TouchableWithoutFeedback>
  )
}

//estilizações usando stylesheet
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70
   
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10
  },
  textSkill: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    
  }
})
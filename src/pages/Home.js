import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Platform, Keyboard, TouchableWithoutFeedback, FlatList } from 'react-native'
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  const handleNewSkill = () => {
    setMySkills(prevState => [...prevState, newSkill])
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
        <Button 
          customText='Add'
          handleAction={handleNewSkill}
        />
        <Text style={[styles.title, { marginVertical: 50 }]}>
          My Skills
        </Text>
        <FlatList
          data={mySkills}
          keyExtractor={item => item}
          renderItem={({ item }) => (<SkillCard skill={item} />)}
        />
  
            
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
})
import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform, 
    Keyboard, 
    TouchableWithoutFeedback, 
    FlatList
  } from 'react-native'
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';


interface SkillData {
  id: string;
  name: string;
}

export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  const handleNewSkill = () => {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMySkills(prevState => [...prevState, data])
    Keyboard.dismiss()
  }

  const handleRemoveSkill = (id: string) => {
    console.log(id);
    
    setMySkills(prevState => prevState.filter(skill => skill.id !== id))
  }

  useEffect(() => {
    const currentTime = new Date().getHours();

    if(currentTime < 12) {
      setGreeting('Good morning')
    }
    else if(currentTime < 18) {
      setGreeting('Good afternoon')
    }
    else {
      setGreeting('Good evening')
    }
  }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container} >
        <Text style={styles.title}>{greeting} Bruno!</Text>
        <TextInput 
          style={styles.input}
          placeholder='New Skill'
          placeholderTextColor='#555'
          onChangeText={setNewSkill}
        />
        <Button 
          customText='Add'
          onPress={handleNewSkill}
        />
        <Text style={[styles.title, { marginVertical: 50 }]}>
          My Skills
        </Text>
        
        <FlatList
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SkillCard 
              skill={item.name} 
              onPress={() => handleRemoveSkill(item.id)}
            />
          )}
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
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {PlantDetail, Home}  from './screens/';
import Tabs from './navigation/tabs'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="PlantDetail" component={PlantDetail} />
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return <App/>
}
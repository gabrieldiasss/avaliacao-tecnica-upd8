import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { MainStack } from './index.routes'
import Clients from './clients'

const Stack = createStackNavigator<MainStack>()

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }} 
        initialRouteName={'Clients'}>
        <Stack.Screen name="Clients" component={Clients} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes
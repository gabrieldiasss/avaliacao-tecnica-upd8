import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ClientsCreate from '../../screens/client-add';
import ClientsList from '../../screens/client-list';
import ClientsUpdate from '../../screens/client-update';
import { ClientsStack } from './clients.routes';
import ClientsListFilter from '../../screens/client-list-filter';

const Stack = createStackNavigator<ClientsStack>();

const ClientsRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName={'List'}>
    <Stack.Screen name="List" component={ClientsList} />
    <Stack.Screen name="Filter" component={ClientsListFilter} />
    <Stack.Screen name="Create" component={ClientsCreate} />
    <Stack.Screen name="Update" component={ClientsUpdate} />
  </Stack.Navigator>
)

export default ClientsRoutes
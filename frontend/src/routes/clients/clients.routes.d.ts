import { CompositeScreenProps } from '@react-navigation/native'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { MainStack } from '../index.routes'

export type ClientsStack = {
  Create: undefined
  List: undefined
}

/* ClientsCreate */
export type ClientsCreateScreen = CompositeScreenProps<
  StackScreenProps<ClientsStack, 'Create'>,
  StackScreenProps<MainStack>
>

export type ClientsCreateScreenNav = StackNavigationProp<ClientsStack, 'Create'>

/* ClientsList */
export type ClientsListScreen = CompositeScreenProps<
  StackScreenProps<ClientsStack, 'List'>,
  StackScreenProps<MainStack>
>
export type ClientsListScreenNav = StackNavigationProp<ClientsStack, 'List'>

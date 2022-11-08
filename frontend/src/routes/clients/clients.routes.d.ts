import { CompositeScreenProps } from '@react-navigation/native'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { Client } from '../../types/client.type'
import { MainStack } from '../index.routes'

export type ClientsStack = {
  Create: undefined
  Update: {
    client: Client
  }
  List: undefined
}

/* ClientsCreate */
export type ClientsCreateScreen = CompositeScreenProps<
  StackScreenProps<ClientsStack, 'Create'>,
  StackScreenProps<MainStack>
>

export type ClientsCreateScreenNav = StackNavigationProp<ClientsStack, 'Create'>

/* ClientsUpdate */
export type ClientsUpdateScreen = CompositeScreenProps<
  StackScreenProps<ClientsStack, 'Update'>,
  StackScreenProps<MainStack>
>

export type ClientsUpdateScreenNav = StackNavigationProp<ClientsStack, 'Update'>

/* ClientsList */
export type ClientsListScreen = CompositeScreenProps<
  StackScreenProps<ClientsStack, 'List'>,
  StackScreenProps<MainStack>
>
export type ClientsListScreenNav = StackNavigationProp<ClientsStack, 'List'>

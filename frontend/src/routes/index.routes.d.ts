import { NavigatorScreenParams } from '@react-navigation/native'
import { ClientsStack } from './clients/clients.routes'

export type MainStack = {
  Clients: NavigatorScreenParams<ClientsStack>
}
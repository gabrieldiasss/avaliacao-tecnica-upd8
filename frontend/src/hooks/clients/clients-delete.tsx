import { Client } from '../../types/client.type'
import { del } from '../../services/clients-service'
import { Alert } from 'react-native'
import { 
  useMutation,
  UseMutationOptions, 
  UseMutationResult,
  useQueryClient 
} from '@tanstack/react-query'
import { QueryKey } from '../query-key'

function useClientsDelete(
  options?: Omit<UseMutationOptions<Client, unknown, unknown, unknown>,'mutationFn'>,
): UseMutationResult<Client, unknown, unknown, unknown> {

  const queryClient = useQueryClient()

  return useMutation(del, {
    ...options,
    onError: () => {
      return Alert.alert('Erro ao deletar cliente, tente mais tarde.')
    },
    onSuccess: (data, vars, ctx) => {
      queryClient.invalidateQueries(QueryKey.CLIENTS)
      options?.onSuccess?.(data, vars, ctx)
    },
  })
}

export { useClientsDelete }
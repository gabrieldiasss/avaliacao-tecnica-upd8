import { Client } from '../../types/client.type'
import { ClientUpdateDto, update } from '../../services/clients-service'
import { Alert } from 'react-native'
import { useMutation, UseMutationOptions, UseMutationResult, useQueryClient } from '@tanstack/react-query'
import { QueryKey } from '../query-key'

function useClientsUpdate(
    options?: Omit<UseMutationOptions<Client, unknown, ClientUpdateDto, unknown>,'mutationFn'>,
  ): UseMutationResult<Client, unknown, ClientUpdateDto, unknown> {
  
    const queryClient = useQueryClient()
  
    return useMutation(update, {
      ...options,
      onError: () => {
        return Alert.alert('Erro ao atualizar client, tente mais tarde.')
      },
      onSuccess: (data, vars, ctx) => {
        queryClient.invalidateQueries(QueryKey.CLIENTS)
        options?.onSuccess?.(data, vars, ctx)
      },
    })
  }
  
  export { useClientsUpdate }
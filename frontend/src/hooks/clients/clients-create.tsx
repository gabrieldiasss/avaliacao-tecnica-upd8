import { Client } from '../../types/client.type'
import { ClientCreateDto, create } from '../../services/clients-service'
import { Alert } from 'react-native'
import { useMutation, UseMutationOptions, UseMutationResult, useQueryClient } from '@tanstack/react-query'
import { QueryKey } from '../query-key'

function useClientsCreate(
    options?: Omit<UseMutationOptions<Client, unknown, ClientCreateDto, unknown>,'mutationFn'>,
  ): UseMutationResult<Client, unknown, ClientCreateDto, unknown> {
  
    const queryClient = useQueryClient()
  
    return useMutation(create, {
      ...options,
      onError: () => {
        return Alert.alert('Erro ao criar client, tente mais tarde.')
      },
      onSuccess: (data, vars, ctx) => {
        queryClient.invalidateQueries(QueryKey.CLIENTS)
        options?.onSuccess?.(data, vars, ctx)
      },
    })
  }
  
  export { useClientsCreate }
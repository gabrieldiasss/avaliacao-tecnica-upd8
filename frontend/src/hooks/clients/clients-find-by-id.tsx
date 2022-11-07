import { Client } from '../../types/client.type'
import { findOne } from '../../services/clients-service'
import { Alert } from 'react-native'
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { QueryKey } from '../query-key'

type GetClientsFindByIdOptions = Omit<
UseMutationOptions<Client, unknown, string, unknown>,
'mutationFn'
>

function useClientsFindById(options?: GetClientsFindByIdOptions): UseMutationResult<Client, unknown, string, unknown> {
  return useMutation(findOne, {
    onError: () => {
      Alert.alert('Erro ao buscar cliente por id.')
    },
    ...options,
    onSuccess: (data, vars, ctx) => {
      options.invalidateQueries(QueryKey.CLIENTS)
      options?.onSuccess?.(data, vars, ctx)
    },
  })
}

export { useClientsFindById }
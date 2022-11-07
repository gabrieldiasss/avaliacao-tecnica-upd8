import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query";
import { Alert } from "react-native";
import { findAll } from "../../services/clients-service";
import { Client } from "../../types/client.type";
import { QueryKey } from "../query-key";

type FindAllClientsOptions = Omit<
  UseQueryOptions<Client[], unknown, Client[], 'CLIENTS'>,
  'queryKey'
>;

function useClientsFindAll(options?: FindAllClientsOptions): UseQueryResult<Client[], unknown> {
  return useQuery(QueryKey.CLIENTS, findAll, {
    onError: e => {
      Alert.alert('Erro ao buscar clients.', (e as Error).message)
    },
    ...options,
  })
}

export { useClientsFindAll }
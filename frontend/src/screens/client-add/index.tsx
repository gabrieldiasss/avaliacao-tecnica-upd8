import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useClientsCreate } from "../../hooks/clients";
import { ClientsCreateScreen } from "../../routes/clients/clients.routes";

const ClientsCreate: React.FC<ClientsCreateScreen> = ({ navigation }) => {
  const { mutate, isSuccess, isLoading } = useClientsCreate();

  useEffect(() => {
    if(isSuccess) navigation.goBack()
  }, [isSuccess])

  return (
    <ScrollView style={{ flex: 1 }}>
    </ScrollView>
  )
}

export default ClientsCreate;
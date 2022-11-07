import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useClientsFindAll } from "../../hooks/clients";
import { ClientsListScreen } from "../../routes/clients/clients.routes";

const ClientsList: React.FC<ClientsListScreen> = ({ navigation }) => {
    const { data, isSuccess, isLoading } = useClientsFindAll();
  
    return (
      <ScrollView style={{ flex: 1 }}>
      </ScrollView>
    )
  }
  
export default ClientsList;

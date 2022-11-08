import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import moment from "moment";
import { useClientsDelete, useClientsFindAll } from "../../hooks/clients";
import { ClientsListScreen } from "../../routes/clients/clients.routes";

const ClientsList: React.FC<ClientsListScreen> = ({ navigation: { navigate } }) => {
    const { data: clients } = useClientsFindAll();
    const { mutate } = useClientsDelete();

    return (
      <ScrollView style={{ flex: 1, margin: 20 }}>
        <Button title="NOVO CADASTRO" onPress={() => navigate('Create')} />
        {clients?.map(client => {
          return <View style={{
            marginTop: 10, 
            paddingBottom: 5, 
            borderColor: 'gray', 
            borderBottomWidth: 0.5 
          }}>
              <Text style={{
                fontSize:16, 
                fontWeight:"bold"
              }}>{client.name}</Text>
              <Text>{client.cpf}, {moment(client.birth).format('L')} ({client.gender.substring(0,1)})</Text>
              <Text style={{
                fontStyle:'italic'
                }}>{client.city} - {client.state}</Text>
              <View style={{
                marginTop: 10, 
                flex: 1, 
                flexDirection: 'row', 
                flexWrap: 'nowrap', 
                alignContent: 'stretch'
                }}>
                <View style={{flex:1, marginRight: 5}}>
                  <Button 
                    color={'green'} 
                    title="EDITAR"
                    onPress={() => navigate('Update', { client })} />
                </View>
                <View style={{flex:1}}>
                  <Button color={'red'} title="EXCLUIR" onPress={() => mutate(client.id)} />
                </View>
              </View>
          </View>
        })}
      </ScrollView>
    )
  }
  
export default ClientsList;

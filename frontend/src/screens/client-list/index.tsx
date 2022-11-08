import React from 'react';
import moment from 'moment';
import {useClientsDelete, useClientsFindAll} from '../../hooks/clients';
import {ClientsListScreen} from '../../routes/clients/clients.routes';
import {
  ActionButtonCreate,
  Conteiner,
  Item,
  ItemActionButtonDelete,
  ItemActionButtonEdit,
  ItemActions,
  ItemActionsDelete,
  ItemActionsEdit,
  ItemTextLocation,
  ItemTextPerson,
  ItemTextPersonName,
  TextTitle,
} from './styles';

const ClientsList: React.FC<ClientsListScreen> = ({navigation: {navigate}}) => {
  const {data: clients} = useClientsFindAll();
  const {mutate} = useClientsDelete();
  return (
    <Conteiner>
      <TextTitle>Cadastro de Clientes</TextTitle>
      <ItemActions>
        <ItemActionsEdit>
          <ActionButtonCreate
            title="FILTAR"
            onPress={() => navigate('Filter')}
          />
        </ItemActionsEdit>
        <ItemActionsDelete>
          <ItemActionButtonEdit
            title="NOVO CADASTRO"
            onPress={() => navigate('Create')}
          />
        </ItemActionsDelete>
      </ItemActions>
      {clients?.map(client => {
        return (
          <Item>
            <ItemTextPersonName>{client.name}</ItemTextPersonName>
            <ItemTextPerson>
              {client.cpf}, {moment(client.birth).format('L')} (
              {client.gender.substring(0, 1)})
            </ItemTextPerson>
            <ItemTextLocation>
              {client.city} - {client.state}
            </ItemTextLocation>
            <ItemActions>
              <ItemActionsEdit>
                <ItemActionButtonEdit
                  title="EDITAR"
                  onPress={() => navigate('Update', {client})}
                />
              </ItemActionsEdit>
              <ItemActionsDelete>
                <ItemActionButtonDelete
                  title="EXCLUIR"
                  onPress={() => mutate(client.id)}
                />
              </ItemActionsDelete>
            </ItemActions>
          </Item>
        );
      })}
    </Conteiner>
  );
};

export default ClientsList;

import { Button, ScrollView, Text, View } from 'react-native';
import styled from 'styled-components/native';

const Conteiner = styled(ScrollView)`
  flex: 1;
  margin: 20px;
`;

const TextTitle = styled(Text)`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 18px;
  border-color: 'gray';
  border-bottom-width: 0.5px;
`;

const ActionButtonCreate = styled(Button)``;

const Item = styled(View)`
  margin-top: 10px;
  padding-bottom: 5px;
  border-color: 'gray';
  border-bottom-width: 0.5px;
`;

const ItemTextPersonName = styled(Text).attrs({
  fontSize: 16,
  fontWeight: 'bold',
})``;

const ItemTextPerson = styled(Text).attrs({
  fontStyle: 'italic'
})``;

const ItemTextLocation = styled(Text)`
  font-style: 'italic';
`;

const ItemActions = styled(View).attrs({
  marginTop: 10, 
  flex: 1, 
  flexDirection: 'row', 
  flexWrap: 'nowrap', 
  alignContent: 'stretch'
})``;

const ItemActionsEdit = styled(View)`
  flex: 1; 
  margin-right: 5px;
`;

const ItemActionButtonEdit = styled(Button)
.attrs({color: 'green'})``;

const ItemActionsDelete = styled(View)`
  flex: 1;
`;

const ItemActionButtonDelete = styled(Button)
.attrs({color: 'red'})``;

export {
  Conteiner,
  TextTitle,
  Item,
  ItemTextLocation,
  ItemTextPerson,
  ItemTextPersonName, 
  ItemActions,
  ItemActionsEdit,
  ItemActionButtonEdit,
  ItemActionsDelete,
  ItemActionButtonDelete,
  ActionButtonCreate,
};
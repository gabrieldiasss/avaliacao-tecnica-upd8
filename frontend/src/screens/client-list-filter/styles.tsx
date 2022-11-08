import { Button, ScrollView, Text, View } from 'react-native';
import styled from 'styled-components/native';

const Conteiner = styled(ScrollView)`
  flex: 1;
  margin: 20px;
`;

const TextTitle = styled(Text)`
  margin-bottom: 10px;
  font-size: 18px;
  border-color: 'gray';
  border-bottom-width: 0.5px;
`;

const TextLabel = styled(Text)`
  font-size: 10px;
  margin-bottom: -10px;
`;

const TextLabelGender = styled(Text)`
  font-size: 10px;
  margin-bottom: 5px;
`;

const TextLabelAddress = styled(Text)`
  font-size: 10px; 
  margin-bottom: -10px; 
  margin-top: 5px;
`;

const Actions = styled(View).attrs({
  flex: 1,
  flexDirection: 'row', 
  flexWrap: 'nowrap', 
  alignContent: 'stretch',
  marginBottom: 5,
  marginTop: 20
})`
`;
const ActionsSave = styled(View)`
  flex: 1; 
`;

const ActionButtonSave = styled(Button)
.attrs({color: 'green'})``;

const ActionsClear = styled(View)`
  flex: 1;
  margin-right: 5px;
`;

const ActionButtonClear = styled(Button)
.attrs({color: 'red'})``;

const ActionButtonBack = styled(Button)`
  margin-top: 10px;
`;

export {
  Conteiner, 
  TextTitle, 
  TextLabel, 
  TextLabelGender, 
  TextLabelAddress, 
  Actions,
  ActionsSave,
  ActionButtonSave,
  ActionsClear,
  ActionButtonClear,
  ActionButtonBack,
};

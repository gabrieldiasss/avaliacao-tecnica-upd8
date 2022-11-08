import React, { useEffect, useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import RadioForm from 'react-native-simple-radio-button';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'
import MaskInput from 'react-native-mask-input'
import { useFormik } from 'formik';
import * as yup from 'yup';
import moment from "moment";
import { ClientsListScreen } from "../../routes/clients/clients.routes";
import { ClientFindAllParams } from "../../services/clients-service";
import { useClientsUpdate } from "../../hooks/clients";
import {
  ActionButtonBack,
  ActionButtonClear,
  ActionButtonSave,
  Actions,
  ActionsClear,
  ActionsSave,
  Conteiner,
  TextLabel,
  TextLabelAddress,
  TextLabelGender,
  TextTitle
} from "./styles";

const ClientsListFilter: React.FC<ClientsListScreen> = ({ navigation: { goBack } }) => {
  const { mutate, isSuccess } = useClientsUpdate();
  const [open, setOpen] = useState(false);
  const CPF_MASK = [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/];
  const form = useFormik<ClientFindAllParams>({
    initialValues: {},
    validationSchema: yup.object({
      address: yup.string().optional(),
      birth: yup.string().optional(),
      city: yup.string().optional(),
      cpf: yup.string().optional(),
      gender: yup.string().optional(),
      name: yup.string().optional(),
      state: yup.string().optional()
    }),
    onSubmit: (data) => console.log(data),
    validateOnChange: false,
    validateOnBlur: false
  });

  useEffect(() => {
    if(isSuccess) goBack()
  }, [isSuccess])

  return (
    <Conteiner>
      <TextTitle>Filtro de pesquisa do cliente</TextTitle>
      <TextLabel>CPF</TextLabel>
      <MaskInput
        value={form.values.cpf}
        placeholder={'Escreva aqui...'}
        onChangeText={form.handleChange('cpf')}
        mask={CPF_MASK}
      />
      <TextLabel>NOME</TextLabel>
      <TextInput
        value={form.values.name}
        onChangeText={form.handleChange('name')}
        placeholder="Escreva aqui..."/>
      <TextLabel>DATA DE NASCIMENTO</TextLabel>
      <Pressable onPress={() => setOpen(true)}>
        <View pointerEvents="none">
          <TextInput
            value={form.values.birth ? moment(form.values.birth).format('L'):undefined}
            onChangeText={form.handleChange('birth')}
            placeholder="Escreva aqui..."/>
        </View>
      </Pressable>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={form.values.birth ?? new Date()}
        onConfirm={(date) => {
          setOpen(false)
          form.setFieldValue('birth', date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      <TextLabelGender>SEXO</TextLabelGender>
      <RadioForm
        radio_props={[
          {label: 'Todos  ', value: 2 },
          {label: 'Masculino  ', value: 0 },
          {label: 'Feminino ', value: 1 },
        ]}
        formHorizontal={true}
        initial={2}
        onPress={(data) => form.setFieldValue('gender', data === 2 ? undefined : data === 0 ? 'MALE':'FEMALE')}
      />
      <TextLabelAddress>ENDEREÇO</TextLabelAddress>
      <TextInput 
        value={form.values.address}
        onChangeText={form.handleChange('address')}
        placeholder="Escreva aqui..."/>
      <TextLabel>ESTADO</TextLabel>
      <Picker
        style={{marginLeft:-13}}
        itemStyle={{paddingLeft:-100}}
        selectedValue={form.values.state}
        onValueChange={(itemValue) =>
          form.setFieldValue('state', itemValue)
        }>
        <Picker.Item label="Todos" value={undefined} />
        <Picker.Item label="Acre" value="AC"/>
        <Picker.Item label="Alagoas" value="AL"/>
        <Picker.Item label="Amapá" value="AP"/>
        <Picker.Item label="Amazonas" value="AM"/>
        <Picker.Item label="Bahia" value="BA"/>
        <Picker.Item label="Ceará" value="CE"/>
        <Picker.Item label="Espírito Santo" value="ES"/>
        <Picker.Item label="Goiás" value="GO"/>
        <Picker.Item label="Maranhão" value="MA"/>
        <Picker.Item label="Mato Grosso" value="MT"/>
        <Picker.Item label="Mato Grosso do Sul" value="MS"/>
        <Picker.Item label="Minas Gerais" value="MG"/>
        <Picker.Item label="Pará" value="PA"/>
        <Picker.Item label="Paraíba" value="PB"/>
        <Picker.Item label="Paraná" value="PR"/>
        <Picker.Item label="Pernambuco" value="PE"/>
        <Picker.Item label="Piauí" value="PI"/>
        <Picker.Item label="Rio de Janeiro" value="RJ"/>
        <Picker.Item label="Rio Grande do Norte" value="RN"/>
        <Picker.Item label="Rio Grande do Sul" value="RS"/>
        <Picker.Item label="Rondônia" value="RO"/>
        <Picker.Item label="Roraima" value="RR"/>
        <Picker.Item label="Santa Catarina" value="SC"/>
        <Picker.Item label="São Paulo" value="SP"/>
        <Picker.Item label="Sergipe" value="SE"/>
        <Picker.Item label="Tocantins" value="TO"/>
        <Picker.Item label="Distrito Federal" value="DF"/>
      </Picker>
      <TextLabel>CIDADE</TextLabel>
      <TextInput 
        value={form.values.city}
        onChangeText={form.handleChange('city')}
        placeholder="Escreva aqui..."/>
      <Actions>
        <ActionsClear>
          <ActionButtonBack title="VOLTAR" onPress={goBack}/>
        </ActionsClear>
        <ActionsSave>
          <ActionButtonClear title="LIMPAR" onPress={form.resetForm}/>
        </ActionsSave>
      </Actions>
      <ActionButtonSave title="PESQUISAR" onPress={form.submitForm}/>
    </Conteiner>
  )
}

export default ClientsListFilter;
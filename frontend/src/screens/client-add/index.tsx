import React, { useEffect, useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { useClientsCreate } from "../../hooks/clients";
import { ClientsCreateScreen } from "../../routes/clients/clients.routes";
import RadioForm from 'react-native-simple-radio-button';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'
import MaskInput from 'react-native-mask-input'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ClientCreateDto } from "../../services/clients-service";
import moment from "moment";

import {
  Conteiner,
  Actions,
  TextLabel,
  TextLabelAddress,
  TextLabelGender,
  TextTitle,
  ActionButtonBack,
  ActionsSave,
  ActionButtonSave,
  ActionsClear,
  ActionButtonClear
} from "./styles";

const ClientsCreate: React.FC<ClientsCreateScreen> = ({ route, navigation: { goBack } }) => {
  const { mutate, isSuccess } = useClientsCreate();
  const [open, setOpen] = useState(false);
  const CPF_MASK = [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/]
  const form = useFormik<ClientCreateDto>({
    initialValues: {
      address: '',
      birth: new Date(),
      city: '',
      cpf: '',
      gender: 'MALE',
      name: '',
      state: ''
    },
    validationSchema: yup.object({
      address: yup.string().required('* preenchimento obrigatório'),
      birth: yup.string().required('* preenchimento obrigatório'),
      city: yup.string().required('* preenchimento obrigatório'),
      cpf: yup.string().required('* preenchimento obrigatório'),
      gender: yup.string().required('* preenchimento obrigatório'),
      name: yup.string().required('* preenchimento obrigatório'),
      state: yup.string().required('* preenchimento obrigatório')
    }),
    onSubmit: (data) => mutate({
      address: data.address, 
      birth: data.birth, 
      city: data.city, 
      cpf: data.cpf, 
      gender: data.gender, 
      name: data.name, 
      state: data.state
    }),
    validateOnChange: false,
    validateOnBlur: false
  });

  useEffect(() => {
    if(isSuccess) goBack()
  }, [isSuccess])

  return (
    <Conteiner>
      <TextTitle>{route.name === "Create" ? "Criar cadastro" : 'Atualização de cadastro do cliente'}</TextTitle>
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
            value={moment(form.values.birth).format('L')}
            onChangeText={form.handleChange('birth')}
            placeholder="Escreva aqui..."/>
        </View>
      </Pressable>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={form.values.birth}
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
          {label: 'Masculino  ', value: 0 },
          {label: 'Feminino', value: 1 }
        ]}
        formHorizontal={true}
        initial={form.values.gender === 'MALE' ? 0:1}
        onPress={(data) => form.setFieldValue('gender', data === 0 ? 'MALE':'FEMALE')}
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
        <ActionsSave>
          <ActionButtonSave title="SALVAR" onPress={form.submitForm}/>
        </ActionsSave>
        <ActionsClear>
          <ActionButtonClear title="LIMPAR" onPress={form.resetForm}/>
        </ActionsClear>
      </Actions>
      <ActionButtonBack title="VOLTAR" onPress={goBack}/>
    </Conteiner>
  )
}

export default ClientsCreate;
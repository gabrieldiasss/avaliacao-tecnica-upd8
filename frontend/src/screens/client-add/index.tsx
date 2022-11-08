import React, { useEffect, useState } from "react";
import { Button, Pressable, ScrollView, Text, TextInput, View } from "react-native";
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

const ClientsCreate: React.FC<ClientsCreateScreen> = ({ navigation: { goBack } }) => {
  const { mutate, isSuccess, isLoading } = useClientsCreate();
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
    <ScrollView style={{ flex: 1, margin: 20 }}>
      <Text style={{
        fontSize: 18, 
        marginBottom: 10, 
        borderColor: 'gray', 
        borderBottomWidth: 0.5
      }}>Cadastro de Cliente</Text>
      <Text style={{fontSize: 10, marginBottom: -10}}>CPF</Text>
      <MaskInput
        value={form.values.cpf}
        placeholder={'Escreva aqui...'}
        onChangeText={form.handleChange('cpf')}
        mask={CPF_MASK}
      />
      <Text style={{fontSize: 10, marginBottom: -10}}>NOME</Text>
      <TextInput
        value={form.values.name}
        onChangeText={form.handleChange('name')}
        placeholder="Escreva aqui..."/>
      <Text style={{fontSize: 10, marginBottom: -10}}>DATA DE NASCIMENTO</Text>
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
      <Text style={{fontSize: 10, marginBottom: 5}}>SEXO</Text>
      <RadioForm
        radio_props={[
          {label: 'Masculino  ', value: 0 },
          {label: 'Feminino', value: 1 }
        ]}
        formHorizontal={true}
        initial={form.values.gender === 'MALE' ? 0:1}
        onPress={(data) => form.setFieldValue('gender', data === 0 ? 'MALE':'FEMALE')}
      />
      <Text style={{fontSize: 10, marginBottom: -10, marginTop: 5}}>ENDEREÇO</Text>
      <TextInput 
        value={form.values.address}
        onChangeText={form.handleChange('address')}
        placeholder="Escreva aqui..."/>
      <Text style={{fontSize: 10, marginBottom: -10}}>ESTADO</Text>
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
      <Text style={{fontSize: 10, marginBottom: -10}}>CIDADE</Text>
      <TextInput 
        value={form.values.city}
        onChangeText={form.handleChange('city')}
        placeholder="Escreva aqui..."/>
      <View style={{
        marginBottom: 10, 
        flex: 1, 
        flexDirection:'row', 
        alignContent: 'stretch'
      }}>
        <View style={{flex: 1, marginRight: 10}}>
          <Button color={'green'} title="SALVAR" onPress={form.submitForm}/>
        </View>
        <View style={{flex: 1}}>
          <Button color={'red'} title="LIMPAR" onPress={() => form.resetForm()}/>
        </View>
      </View>
      <Button title="VOLTAR" onPress={() => goBack()}/>
    </ScrollView>
  )
}

export default ClientsCreate;
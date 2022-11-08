import React, { useEffect, useState } from "react";
import { Button, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { ClientsUpdateScreen } from "../../routes/clients/clients.routes";
import RadioForm from 'react-native-simple-radio-button';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'
import MaskInput from 'react-native-mask-input'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ClientUpdateDto } from "../../services/clients-service";
import moment from "moment";
import { useClientsUpdate } from "../../hooks/clients";

const ClientsUpdate: React.FC<ClientsUpdateScreen> = ({ route, navigation: { goBack } }) => {
  const client = route.params?.client;
  const { mutate, isSuccess } = useClientsUpdate();
  const [open, setOpen] = useState(false);
  const CPF_MASK = [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/];
  const form = useFormik<ClientUpdateDto>({
    initialValues: {
      address: client?.address,
      birth: moment(client.birth).toDate(),
      city: client?.city,
      cpf: client?.cpf,
      gender: client?.gender,
      name: client?.name,
      state: client?.state
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
      }}>Atualização de cadastro de Cliente</Text>
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
        date={form.values.birth!}
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
        <Picker.Item label="São Paulo" value="SP" />
        <Picker.Item label="Rio de Janeiro" value="RJ" />
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

export default ClientsUpdate;
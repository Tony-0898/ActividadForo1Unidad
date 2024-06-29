import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { ContactFormProps } from '../types';
import Button from './Button';

const ContactForm: React.FC<ContactFormProps> = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    if (name && phone) {
      onAddContact({ name, phone });
      setName('');
      setPhone('');
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el Nombre del Contacto"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese el Numero de Teléfono"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Button title="Añadir Nuveo Contacto" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ContactForm;
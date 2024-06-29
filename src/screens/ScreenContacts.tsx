import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import { Contact } from '../types';

const ScreenContacts: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (newContact: Omit<Contact, 'id'>) => {
    setContacts([...contacts, { id: Date.now(), ...newContact }]);
  };

  const deleteContact = (id: number) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <View style={styles.container}>
      <ContactForm onAddContact={addContact} />
      <ContactList contacts={contacts} onDeleteContact={deleteContact} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#c0c0c0',
  },
});

export default ScreenContacts;
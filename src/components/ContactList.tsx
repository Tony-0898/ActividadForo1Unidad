import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ContactListProps } from '../types';
import Button from './Button';

const ContactList: React.FC<ContactListProps> = ({ contacts, onDeleteContact }) => {
  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.contactItem}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.phone}>{item.phone}</Text>
          </View>
          <Button 
            title="Borrar" 
            onPress={() => onDeleteContact(item.id)}
            style={styles.deleteButton}
            textStyle={styles.deleteButtonText}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    color: '#666',
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    padding: 8,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ContactList;
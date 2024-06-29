import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface Contact {
  id: number;
  name: string;
  phone: string;
}

export interface ContactFormProps {
  onAddContact: (contact: Omit<Contact, 'id'>) => void;
}

export interface ContactListProps {
  contacts: Contact[];
  onDeleteContact: (id: number) => void;
}

export interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
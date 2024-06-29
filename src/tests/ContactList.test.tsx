import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ContactList from '../components/ContactList';

describe('ContactList', () => {
  const contacts = [
    { id: '1', name: 'John Doe', phone: '123456789' },
    { id: '2', name: 'Jane Smith', phone: '987654321' },
  ];

  it('renders correctly', () => {
    const { getByText } = render(
      <ContactList contacts={contacts} onDeleteContact={jest.fn()} />
    );

    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('123456789')).toBeTruthy();
    expect(getByText('Jane Smith')).toBeTruthy();
    expect(getByText('987654321')).toBeTruthy();
  });

  it('handles delete event', () => {
    const onDeleteContactMock = jest.fn();
    const { getAllByText } = render(
      <ContactList contacts={contacts} onDeleteContact={onDeleteContactMock} />
    );

    fireEvent.press(getAllByText('Borrar')[0]);
    expect(onDeleteContactMock).toHaveBeenCalledWith('1');
  });
});

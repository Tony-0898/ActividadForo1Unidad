import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ContactForm from '../components/ContactForm';

describe('ContactForm', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <ContactForm onAddContact={jest.fn()} />
    );
    expect(getByPlaceholderText('Ingrese el Nombre del Contacto')).toBeTruthy();
    expect(getByPlaceholderText('Ingrese el Numero de Teléfono')).toBeTruthy();
    expect(getByText('Añadir Nuveo Contacto')).toBeTruthy();
  });

  it('handles input and submit', () => {
    const onAddContactMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <ContactForm onAddContact={onAddContactMock} />
    );

    fireEvent.changeText(getByPlaceholderText('Ingrese el Nombre del Contacto'), 'John Doe');
    fireEvent.changeText(getByPlaceholderText('Ingrese el Numero de Teléfono'), '123456789');
    fireEvent.press(getByText('Añadir Nuveo Contacto'));

    expect(onAddContactMock).toHaveBeenCalledWith({ name: 'John Doe', phone: '123456789' });
  });
});

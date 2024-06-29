import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../components/Button';

 describe ('Button', () => {
  it('renders correctly with title', () => {
    const { getByText } = render(<Button title="Press me" onPress={() => {}} />);
    expect(getByText('Press me')).toBeTruthy();
  });

  it('handles press event', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Press me" onPress={onPressMock} />);
    
    fireEvent.press(getByText('Press me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});

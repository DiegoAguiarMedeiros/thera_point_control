import React from 'react';
import * as Styled from './styles';

interface InputProps {
    styleInput: string;
    secureTextEntry?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    autoCorrect?: boolean;
    placeholder?: string;
    onChangeText?: (text: string) => void;
    type?: 'text' | 'password'; // Add type property here
}

const Input: React.FC<InputProps> = ({
    styleInput,
    secureTextEntry = false,
    autoCapitalize = 'none',
    autoCorrect = false,
    placeholder,
    onChangeText,
    type = 'text', // Set default value for type here
}) => {
    return (
        <Styled.StyledTextInput
            styleInput={styleInput}
            secureTextEntry={type === 'password' ? true : secureTextEntry}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            placeholder={placeholder}
            onChangeText={onChangeText}
        />
    );
};


export default Input;
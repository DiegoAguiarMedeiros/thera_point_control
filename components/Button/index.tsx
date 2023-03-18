import React from 'react';
import { TouchableOpacityProps, useColorScheme } from 'react-native';
import * as Styled from './styles';
interface ButtonProps extends TouchableOpacityProps {
    active: boolean;
    styleButton: string;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text, styleButton, active, onPress, ...rest }) => {
    const colorScheme = useColorScheme();
    return (
        <Styled.Button active={active} styleButton={styleButton} onPress={() => onPress}>
            <Styled.TextButton active={active}>{text}</Styled.TextButton>
        </Styled.Button>
    );
};

export default Button;
import { Dimensions, TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ButtonProps extends TouchableOpacityProps {
  active: boolean;
  styleButton: string;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  ${(props: { styleButton: string; }) => props.styleButton}
  position:absolute;
  background: ${({ active }) => (active ? '#FCCD2A' : '#1E5084')} 0% 0% no-repeat padding-box;
  border: 1px solid #FCCD2A;
  border-radius: 5px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text<{
  active: boolean,
}>`
  text-align: center;
  font: normal normal bold 14px/19px Open Sans;
  letter-spacing: 0px;
  color: ${({ active }) => (active ? '#1E5084' : '#FCCD2A')};
  opacity: 1;
`;
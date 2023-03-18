import { Dimensions, TouchableOpacityProps } from 'react-native';
import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';



export const StyledTextInput = styled(TextInput) <{
  styleInput: string,
}>`
  ${(props: { styleInput: string; }) => props.styleInput}
  position:absolute;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 5px;
  padding: 5px 15px;
  opacity: 1;
`;